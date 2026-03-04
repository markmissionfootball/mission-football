# Mission Viejo Diablos Football — Mobile App Architecture Plan

## Overview

A **Flutter** mobile app (iOS + Android) that mirrors the MVHS Football website's Diablo red/gold branding and navigation, with a headline feature: a **personalized AI assistant agent** for each football player powered by the **Claude API**, backed by **Firebase**.

---

## 1. Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Flutter (Dart) | Cross-platform iOS + Android |
| State Management | Riverpod | Reactive state, dependency injection |
| Backend | Firebase | Auth, Firestore, Cloud Functions, Storage, Cloud Messaging |
| AI Engine | Claude API (Anthropic) | Per-player conversational agent with tool use |
| AI Orchestration | Firebase Cloud Functions (Node.js/TypeScript) | Proxy Claude API calls, inject player context, execute tools |
| Push Notifications | Firebase Cloud Messaging (FCM) | Schedule alerts, coach announcements, workout reminders |
| Analytics | Firebase Analytics + Crashlytics | Usage tracking, crash reporting |

---

## 2. Firebase Data Model (Firestore Collections)

Designed from the actual 213 files of program data analyzed.

### `users/` — Authentication & Roles
```
{
  uid: string,
  username: string,              // unique login identifier (e.g., "jsmith27")
  email: string?,                // optional, for notifications/recovery
  role: "player" | "coach" | "parent" | "admin",
  linkedPlayerId: string?,       // for players and parents
  linkedCoachId: string?,        // for coaches
  displayName: string,
  avatarUrl: string?,
  fcmTokens: string[],          // push notification tokens
  phoneNumber: string?,           // registered during first-login 2FA
  phoneVerified: boolean,
  passkeyCredentialIds: string[], // WebAuthn credential IDs (one per device)
  mustChangePassword: boolean,    // true on first login
  mfaComplete: boolean,           // true after first SMS verification
  onboardingSurveyComplete: boolean,
  createdAt: timestamp
}
```

### `playerPreferences/` — Onboarding Survey Responses (Per Player)
```
{
  playerId: string,
  goals: string[],               // e.g., ["play_college", "get_stronger", "start_varsity", "earn_scholarship"]
  recruitingInterest: "high" | "some" | "not_yet",
  preferredCollege: string?,     // dream school (optional)
  agentTone: "coach" | "buddy" | "all_business",  // how they want the agent to talk to them
  topPriority: "recruiting" | "strength" | "game_prep" | "academics",
  updatedAt: timestamp
}
```
*Collected during first-login onboarding survey. Can be updated later in Settings.*

### `players/` — Core Player Profiles
```
{
  id: string,
  firstName: string,
  lastName: string,
  grade: 9 | 10 | 11 | 12,
  position: string,              // "QB", "WR", "OL/DL", "DB", "LB", etc.
  jerseyNumber: number?,
  team: "varsity" | "jv" | "freshman",
  height: string?,
  weight: number?,
  sizes: { top: string, bottom: string, cleat: string? },
  athleticClearance: "cleared" | "pending" | "incomplete",
  clearanceNotes: string?,
  paymentStatus: {
    springBall: boolean,
    summerBall: boolean,
    contributionFee: boolean,
    blastContacts: boolean
  },
  parentContact: { name: string, email: string, phone: string }?,
  active: boolean,
  updatedAt: timestamp
}
```

### `coaches/` — Coaching Staff
```
{
  id: string,
  firstName: string,
  lastName: string,
  title: string,                  // "Head Coach", "OC", "DC", etc.
  positionGroup: string,          // "Offensive Line", "Defensive Backs", etc.
  email: string?,
  phone: string?,
  certifications: { name: string, status: string, expiry: date }[],
  active: boolean
}
```

### `schedule/` — Game Schedule (All Levels)
```
{
  id: string,
  season: "2026",
  week: number,                   // 0-10 + playoff rounds
  date: timestamp,
  opponent: string,
  location: "home" | "away",
  time: string,
  level: "varsity" | "jv" | "freshman",
  result: { mvScore: number, oppScore: number, win: boolean }?,
  notes: string?                  // "Senior Night", "Scrimmage", etc.
}
```

### `calendar/` — Master Program Calendar
```
{
  id: string,
  date: timestamp,
  title: string,
  description: string?,
  phase: "offseason" | "spring" | "summer" | "fallcamp" | "inseason" | "playoffs" | "dead",
  timeRange: string?,
  allDay: boolean,
  level: "all" | "varsity" | "jv" | "freshman"
}
```
*Seeded from the 179-row 2026 Football Calendar spreadsheet.*

### `strength/` — Strength & Conditioning

#### `strength/maxes/{playerId}/entries/` — Lift Maxes Over Time
```
{
  date: timestamp,
  type: "spring_combine" | "summer_combine" | "end_of_school" | "december" | "february" | "weekly",
  clean: number?,
  squat: number?,
  bench: number?,
  incline: number?,
  total: number?,
  bodyWeight: number?
}
```
*Seeded from: MAXES.xlsx (Dec/Feb), Spring Combine, Summer Combine, End of School Maxes — covering 86 players with historical data.*

#### `strength/combines/{combineId}/results/` — Athletic Testing
```
{
  playerId: string,
  fortyYd: number?,
  proShuttle: number?,
  threeCone: number?,
  broadJump: number?,
  vertical: number?,
  reach: number?,
  weight: number?,
  height: string?
}
```
*Seeded from: 2025 Spring Combine (72 players with full data) and Summer Combine.*

#### `strength/programs/` — Year-Round Workout Templates
```
{
  id: string,
  phaseName: string,              // "Off-Season 1A", "Strength Week 3", "In-Season 5", etc.
  exercises: [{
    name: string,
    sets: number,
    reps: string,
    percentOfMax: number?,        // e.g., 0.75
    liftReference: "clean" | "squat" | "bench" | "incline"?,
    notes: string?
  }]
}
```
*Seeded from: 2026 Year Round Template (87 phases covering the entire season cycle from off-season through state finals).*

#### `strength/playerWorkouts/{playerId}/` — Personalized Workout Sheets
```
{
  phase: string,
  exercises: [{ name, targetWeight, sets, reps, completed: boolean }],
  assignedDate: timestamp,
  completedDate: timestamp?
}
```
*Seeded from: 86 individual player sheets in the Player Sheets workbook, each with personalized loading based on their maxes.*

### `depthChart/` — Current Depth Chart
```
{
  id: string,
  season: "2026",
  type: "offense" | "defense" | "special_teams",
  positions: [{
    position: string,             // "QB", "LT", "X (WR)", "F (RB)", etc.
    starters: [{ playerId, name }],
    backups: [{ playerId, name, depth: number }]
  }],
  updatedAt: timestamp
}
```
*Seeded from: Spring Depth Chart 2025 (offense).*

### `gameStats/` — Per-Game Statistics

#### `gameStats/{gameId}/defense/` — Defensive Stats Per Player
```
{
  playerId: string,
  playerNumber: number,
  tackles: { solo: number, assisted: number },
  tfls: number,
  sacks: number,
  passDeflections: number,
  interceptions: number,
  forcedFumbles: number,
  fumbleRecoveries: number,
  isStarter: boolean
}
```
*Seeded from: Defensive Hall of Fame (19 game sheets covering the entire 2025 season + season summary).*

#### `gameStats/{gameId}/awards/` — Game Awards
```
{
  playerOfGame: string,
  offensivePOG: string,
  defensivePOG: string,
  specialTeamsPOG: string,
  bigPlay: string?,
  scoutPlayerOfWeek: { defense: string?, offense: string?, specialTeams: string? }
}
```
*Seeded from: 2025 Season Player of Game & Team Awards.*

#### `gameStats/{gameId}/teamGoals/` — Team Performance Goals
```
{
  type: "offense" | "defense" | "special_teams",
  goals: [{ name: string, achieved: boolean, value: string? }]
}
```
*Seeded from: Offensive/Defensive/ST Team Player Awards sheets.*

### `awards/` — Season Awards & Honors
```
{
  season: "2025",
  type: "all_league" | "banquet" | "records",
  entries: [{
    award: string,                // "MVP", "1st Team All-League", "Pancake Award"
    playerName: string,
    position: string?,
    grade: number?
  }]
}
```
*Seeded from: All League Allocations + Varsity Banquet Awards.*

### `practicePlans/` — Practice Plans & Scripts
```
{
  id: string,
  phase: "spring" | "summer" | "fall_camp" | "inseason",
  practiceNumber: number,
  date: timestamp?,
  periods: [{ number: number, duration: string, activity: string, notes: string? }],
  scripts: { offensive: string[]?, defensive: string[]? }?
}
```
*Seeded from: 15 Spring Practice Plans, 20 Summer Practice Plans, 15 Fall Camp Practice Plans — each with detailed period breakdowns and accompanying script spreadsheets.*

### `recruiting/` — Recruiting Profiles
```
{
  playerId: string,
  gpa: number?,
  satScore: number?,
  actScore: number?,
  ncaaId: string?,
  highlightVideoUrls: string[],
  collegeInterests: [{
    school: string,
    level: "D1" | "D2" | "D3" | "NAIA" | "JC",
    status: "interested" | "contacted" | "visited" | "offered" | "committed",
    coachContact: string?,
    notes: string?
  }],
  campDates: [{ name: string, date: timestamp, location: string }],
  outreachEmails: [{ college: string, sentDate: timestamp, template: string }]
}
```

### `announcements/` — Team Announcements & Notifications
```
{
  id: string,
  title: string,
  body: string,
  author: string,
  audienceLevel: "all" | "varsity" | "jv" | "freshman",
  priority: "normal" | "urgent",
  createdAt: timestamp,
  readBy: string[]
}
```

### `teamOps/` — Team Operations
```
{
  meals/{id}: { date, description, signedUp: string[] },
  equipment/{playerId}: { items: [{ name, checkedOut: boolean, returnedDate? }] },
  travel/{tripId}: { destination, date, busAssignments, itinerary, roomAssignments }
}
```
*Travel seeded from: Folsom trip data.*

### `agentLogs/` — AI Agent Interaction Logs
```
{
  playerId: string,
  sessionId: string,
  messages: [{ role: "user" | "assistant", content: string, timestamp }],
  toolCalls: [{ tool: string, input: object, output: object }],
  createdAt: timestamp
}
```

### `analytics/` — User Engagement Tracking (Admin Only)

#### `analytics/sessions/{sessionId}` — Individual App Sessions
```
{
  userId: string,
  role: "player" | "coach" | "parent",
  startTime: timestamp,
  endTime: timestamp?,
  durationSeconds: number?,
  platform: "ios" | "android",
  screensVisited: string[],          // ordered list of screens touched
  agentMessagesCount: number,        // agent messages this session
  actionsPerformed: string[]         // e.g., ["viewed_workout", "opened_schedule", "chatted_agent"]
}
```

#### `analytics/daily/{YYYY-MM-DD}` — Aggregated Daily Metrics
```
{
  date: string,
  dailyActiveUsers: number,
  sessionCount: number,
  avgSessionDurationSeconds: number,
  agentConversations: number,
  agentMessagesTotal: number,
  topAgentTools: [{ tool: string, count: number }],   // which tools the agent used most
  topScreens: [{ screen: string, views: number }],
  byRole: {
    player: { active: number, sessions: number },
    coach: { active: number, sessions: number },
    parent: { active: number, sessions: number }
  },
  byPlatform: {
    ios: { active: number, sessions: number },
    android: { active: number, sessions: number }
  }
}
```
*Aggregated nightly by a scheduled Cloud Function.*

#### `analytics/playerEngagement/{playerId}` — Per-Player Engagement Summary
```
{
  playerId: string,
  totalSessions: number,
  totalAgentMessages: number,
  lastActiveAt: timestamp,
  streakDays: number,                // consecutive days active
  topAgentTopics: string[],          // most-asked-about categories
  workoutsViewed: number,
  recruitingActionsCount: number,
  firstLoginAt: timestamp
}
```

---

## 3. Flutter App Architecture

### Project Structure
```
mvhs_football/
├── lib/
│   ├── main.dart
│   ├── app.dart                        // MaterialApp, theme, routing
│   ├── theme/
│   │   ├── diablo_theme.dart           // Colors, typography, shared styles
│   │   └── diablo_colors.dart          // #d12132, #fcb423, #1a1a1a, #8B0000
│   ├── routing/
│   │   └── app_router.dart             // GoRouter with auth guards
│   ├── models/                         // Dart data classes matching Firestore
│   │   ├── player.dart
│   │   ├── coach.dart
│   │   ├── game.dart
│   │   ├── calendar_event.dart
│   │   ├── workout.dart
│   │   ├── max_entry.dart
│   │   ├── combine_result.dart
│   │   ├── depth_chart.dart
│   │   ├── game_stat.dart
│   │   ├── recruiting_profile.dart
│   │   └── announcement.dart
│   ├── providers/                      // Riverpod providers
│   │   ├── auth_provider.dart
│   │   ├── player_provider.dart
│   │   ├── schedule_provider.dart
│   │   ├── strength_provider.dart
│   │   ├── agent_provider.dart
│   │   └── ...
│   ├── services/
│   │   ├── firebase_service.dart
│   │   ├── agent_service.dart          // Claude API via Cloud Functions
│   │   ├── notification_service.dart
│   │   ├── analytics_service.dart      // Session tracking, event logging
│   │   └── engagement_service.dart     // Admin analytics queries + aggregation
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── login_screen.dart
│   │   │   ├── sms_verify_screen.dart         // 2FA — enter phone, verify code
│   │   │   ├── change_password_screen.dart
│   │   │   ├── passkey_register_screen.dart   // register Face ID / fingerprint
│   │   │   └── onboarding_survey_screen.dart  // 5 quick questions to customize agent
│   │   ├── home/
│   │   │   └── dashboard_screen.dart
│   │   ├── schedule/
│   │   │   ├── schedule_screen.dart
│   │   │   └── game_detail_screen.dart
│   │   ├── agent/
│   │   │   └── agent_chat_screen.dart  // THE MAIN FEATURE
│   │   ├── team/
│   │   │   ├── roster_screen.dart
│   │   │   ├── player_detail_screen.dart
│   │   │   ├── depth_chart_screen.dart
│   │   │   └── coaches_screen.dart
│   │   ├── strength/
│   │   │   ├── workout_screen.dart
│   │   │   ├── maxes_screen.dart
│   │   │   └── combine_screen.dart
│   │   ├── stats/
│   │   │   ├── game_stats_screen.dart
│   │   │   └── season_summary_screen.dart
│   │   ├── recruiting/
│   │   │   ├── recruiting_hub_screen.dart
│   │   │   └── college_detail_screen.dart
│   │   ├── calendar/
│   │   │   └── calendar_screen.dart
│   │   ├── profile/
│   │   │   ├── player_profile_screen.dart
│   │   │   └── settings_screen.dart
│   │   ├── admin/                              // Admin-only screens
│   │   │   ├── admin_dashboard_screen.dart     // Engagement analytics overview
│   │   │   ├── user_management_screen.dart     // Create/manage accounts
│   │   │   └── player_engagement_screen.dart   // Per-player drill-down
│   │   └── more/
│   │       ├── parent_portal_screen.dart
│   │       ├── team_store_screen.dart  // WebView to existing store
│   │       ├── social_screen.dart
│   │       └── volunteer_screen.dart
│   └── widgets/
│       ├── diablo_app_bar.dart         // Red header with logo
│       ├── diamond_divider.dart        // Signature diamond-line motif
│       ├── stat_card.dart              // Red/gold gradient cards
│       ├── quick_link_card.dart
│       ├── chat_bubble.dart            // Agent chat messages
│       ├── workout_card.dart
│       ├── game_card.dart
│       ├── engagement_chart.dart       // Reusable chart widget (fl_chart)
│       ├── metric_tile.dart            // Big number + label + trend arrow
│       └── heatmap_calendar.dart       // GitHub-style activity heatmap
├── assets/
│   ├── images/
│   │   ├── mv_logo.png
│   │   ├── mv_logo_laces.png
│   │   └── ...
│   └── fonts/
│       └── OpenSans/
├── firebase/
│   └── functions/                      // Cloud Functions (TypeScript)
│       ├── src/
│       │   ├── index.ts
│       │   ├── agent/
│       │   │   ├── handler.ts          // Claude API orchestration
│       │   │   ├── tools.ts            // Agent tool definitions
│       │   │   ├── systemPrompt.ts     // Dynamic system prompt builder
│       │   │   └── context.ts          // Player context assembler
│       │   ├── notifications/
│       │   │   └── scheduler.ts        // Scheduled push notifications
│       │   ├── analytics/
│       │   │   └── aggregator.ts       // Nightly scheduled function — rolls up sessions → daily metrics
│       │   └── data/
│       │       └── seed.ts             // Data import scripts
│       └── package.json
├── pubspec.yaml
└── firebase.json
```

### Navigation — Bottom Tab Bar (5 tabs)

```
┌─────────────────────────────────────────┐
│            🏈 MVHS FOOTBALL             │  ← Diablo red app bar with logo
├─────────────────────────────────────────┤
│                                         │
│              [Screen Content]           │
│                                         │
├────────┬────────┬────────┬────────┬─────┤
│  Home  │Schedule│  Agent │  Team  │ Me  │  ← Bottom nav
│   🏠   │  📅    │  🤖💬  │  👥    │ 👤  │
└────────┴────────┴────────┴────────┴─────┘
```

**Tab 1 — Home (Dashboard)**
- Hero banner (upcoming game countdown)
- Announcements feed
- Quick stats (next workout, depth chart position, season record)
- Quick links grid (matching website's icon grid)

**Tab 2 — Schedule**
- Game schedule (all levels, tabbed: Varsity | JV | Freshman)
- Master calendar (month view, pulled from 2026 Football Calendar)
- Game detail → box score, stats, awards
- Practice plan viewer

**Tab 3 — Agent (Center, Prominent)**
- Full-screen chat interface with the AI assistant
- Persistent FAB button from any screen to jump into agent
- Voice input support
- Suggested prompts: "What's my workout today?", "Help me email coaches", "When's the next game?"

**Tab 4 — Team**
- Roster (Varsity/JV/Freshman tabs)
- Depth Chart (interactive, tap to see player detail)
- Coaching Staff
- Game Stats → Defensive HOF, Player of the Game awards

**Tab 5 — Me (Profile)**
- Player profile card (number, position, photo, grade)
- My Stats (combine PRs, season stats, lift maxes chart over time)
- Strength & Conditioning (today's workout, max history, combine results)
- Recruiting Hub (profile builder, college tracker, outreach emails)
- Settings (notifications, account, theme)

### Theming — Matching the Website

```dart
// diablo_colors.dart
class DiabloColors {
  static const Color red = Color(0xFFD12132);
  static const Color gold = Color(0xFFFCB423);
  static const Color dark = Color(0xFF1A1A1A);
  static const Color maroon = Color(0xFF8B0000);
  static const Color background = Color(0xFFE8E4DE);  // warm beige
  static const Color textPrimary = Color(0xFF333333);
}

// diablo_theme.dart — ThemeData
ThemeData diabloTheme = ThemeData(
  primaryColor: DiabloColors.red,
  scaffoldBackgroundColor: DiabloColors.background,
  fontFamily: 'OpenSans',
  appBarTheme: AppBarTheme(
    backgroundColor: DiabloColors.red,
    foregroundColor: Colors.white,
    elevation: 0,
  ),
  bottomNavigationBarTheme: BottomNavigationBarThemeData(
    backgroundColor: DiabloColors.dark,
    selectedItemColor: DiabloColors.gold,
    unselectedItemColor: Colors.white60,
  ),
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: DiabloColors.gold,
      foregroundColor: DiabloColors.red,
      textStyle: TextStyle(fontWeight: FontWeight.bold, letterSpacing: 1.5),
    ),
  ),
);
```

### Signature UI Elements (Ported from Website)
- **Diamond Divider** — Custom widget replicating the `line—◇—line` motif
- **Stat Cards** — Gradient red/gold cards with noise texture overlay
- **Uppercase Tracking** — All headings use `letterSpacing: 2.0+`, `fontWeight: FontWeight.w300`, uppercase
- **Font:** Open Sans (matching website)

---

## 4. Claude AI Agent System — Per-Player Personal Assistant

### How It Works

```
┌──────────────┐     ┌────────────────────┐     ┌──────────────┐
│  Flutter App  │────▶│  Cloud Function     │────▶│  Claude API  │
│  (Chat UI)    │◀────│  /api/agent/chat    │◀────│  (Sonnet)    │
│               │     │                     │     │              │
│  Sends:       │     │  1. Loads player    │     │  Receives:   │
│  - message    │     │     context from    │     │  - system    │
│  - playerId   │     │     Firestore       │     │    prompt    │
│  - sessionId  │     │  2. Builds system   │     │  - tools     │
│               │     │     prompt          │     │  - history   │
│               │     │  3. Calls Claude    │     │  - message   │
│               │     │  4. Executes tools  │     │              │
│               │     │  5. Returns response│     │  Returns:    │
│               │     │  6. Logs session    │     │  - response  │
│               │     └────────────────────┘     │  - tool calls│
│               │                                 └──────────────┘
└──────────────┘
```

### Dynamic System Prompt (Built Per Player)

```typescript
function buildSystemPrompt(player: Player, context: PlayerContext, prefs: PlayerPreferences): string {
  return `
You are the personal football assistant for ${player.firstName} ${player.lastName},
a ${gradeToYear(player.grade)} ${player.position} (#${player.jerseyNumber})
at Mission Viejo High School — Home of the Diablos.

PLAYER PROFILE:
- Team: ${player.team} | Grade: ${player.grade} | Position: ${player.position}
- Height: ${context.height} | Weight: ${context.weight}
- Current Maxes: Clean ${context.maxes.clean}, Squat ${context.maxes.squat},
  Bench ${context.maxes.bench}, Incline ${context.maxes.incline}
  (Total: ${context.maxes.total})
- Combine PRs: 40yd ${context.combine.fortyYd}, Pro Shuttle ${context.combine.proShuttle},
  3-Cone ${context.combine.threeCone}, Broad ${context.combine.broadJump},
  Vertical ${context.combine.vertical}
- Depth Chart: ${context.depthChartPosition}

CURRENT PHASE: ${context.currentPhase}
TODAY'S DATE: ${today}
NEXT GAME: ${context.nextGame.opponent} on ${context.nextGame.date} (${context.nextGame.location})
SEASON RECORD: ${context.seasonRecord}

You help ${player.firstName} with:

1. WORKOUTS & TRAINING
   - Today's lift (pull from their personalized workout sheet)
   - Technique tips for their position
   - Progress tracking ("How much has my squat gone up since spring?")
   - Conditioning and speed work

2. SCHEDULE & CALENDAR
   - Practice times, game details, events
   - What's coming up this week
   - Travel logistics (bus times, departure, hotels)

3. RECRUITING
   - Build and refine their recruiting profile
   - Research colleges that match their stats and academic profile
   - Draft outreach emails to college coaches
   - Track which schools they've contacted
   - Camp and combine scheduling
   - NCAA eligibility guidance (core courses, GPA requirements, test scores)

4. GAME PREPARATION
   - Their personal stat trends across the season
   - Upcoming opponent overview
   - Position-specific scouting questions to review
   - Film study reminders

5. ACADEMICS & ELIGIBILITY
   - NCAA eligibility requirements by division
   - GPA tracking reminders
   - Core course guidance

6. TEAM OPERATIONS
   - Announcements from coaches
   - Meal signups
   - Equipment check-in/out status
   - Community service and volunteer opportunities

PLAYER GOALS: ${prefs.goals.join(', ')}
TOP PRIORITY: ${prefs.topPriority}
RECRUITING INTEREST: ${prefs.recruitingInterest}
${prefs.preferredCollege ? `DREAM SCHOOL: ${prefs.preferredCollege}` : ''}

PERSONALITY & TONE:
${prefs.agentTone === 'coach' ? '- Talk like a coach — direct, demanding, push the player to be better. "You need to get that squat up. No excuses."' : ''}
${prefs.agentTone === 'buddy' ? '- Talk like a supportive teammate — encouraging, casual, positive energy. "Dude, your squat is climbing. Keep grinding."' : ''}
${prefs.agentTone === 'all_business' ? '- Keep it strictly informational — facts, numbers, schedules. No fluff, no motivational talk.' : ''}
- Use the actual program data — reference real combine numbers, real maxes, real schedule
- Keep responses concise and actionable on mobile
- When drafting recruiting emails, be professional and highlight the player's real stats
- For workout questions, calculate actual weights from their maxes and the program percentages
- Lean into the player's top priority — proactively surface ${prefs.topPriority}-related info

IMPORTANT:
- You have access to tools that query real program data. Always use them for current info.
- Never make up stats or schedule information — use the tools.
- If you don't have data for something, say so and suggest who to ask (coach name).
`;
}
```

### Agent Tools (Claude Tool Use via Cloud Functions)

Each tool is a Firestore query executed by the Cloud Function when Claude calls it:

```typescript
const agentTools = [
  {
    name: "get_todays_workout",
    description: "Get the player's workout for today based on the current training phase",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "get_max_history",
    description: "Get the player's lift max history over time (clean, squat, bench, incline)",
    input_schema: {
      type: "object",
      properties: {
        lift: { type: "string", enum: ["clean", "squat", "bench", "incline", "all"] }
      }
    }
  },
  {
    name: "get_combine_results",
    description: "Get the player's combine/athletic testing results",
    input_schema: {
      type: "object",
      properties: {
        combine: { type: "string", enum: ["spring", "summer", "latest"] }
      }
    }
  },
  {
    name: "get_schedule",
    description: "Get upcoming games with opponent, date, time, location",
    input_schema: {
      type: "object",
      properties: {
        level: { type: "string", enum: ["varsity", "jv", "freshman", "all"] },
        upcoming_only: { type: "boolean" }
      }
    }
  },
  {
    name: "get_calendar_events",
    description: "Get upcoming calendar events (practices, meetings, deadlines)",
    input_schema: {
      type: "object",
      properties: {
        days_ahead: { type: "number", description: "Number of days to look ahead" }
      }
    }
  },
  {
    name: "get_depth_chart",
    description: "Get the current depth chart for offense, defense, or special teams",
    input_schema: {
      type: "object",
      properties: {
        side: { type: "string", enum: ["offense", "defense", "special_teams"] }
      }
    }
  },
  {
    name: "get_my_game_stats",
    description: "Get the player's game-by-game stats for the season",
    input_schema: {
      type: "object",
      properties: {
        game: { type: "string", description: "Opponent name or 'season' for full season" }
      }
    }
  },
  {
    name: "get_season_awards",
    description: "Get player of the game and team awards for the season",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "get_recruiting_profile",
    description: "Get the player's recruiting profile, college interests, and outreach history",
    input_schema: { type: "object", properties: {} }
  },
  {
    name: "draft_recruiting_email",
    description: "Draft a recruiting outreach email to a college coach using the player's real stats",
    input_schema: {
      type: "object",
      properties: {
        college: { type: "string" },
        coachName: { type: "string" },
        personalNote: { type: "string", description: "Optional personal touch from the player" }
      },
      required: ["college"]
    }
  },
  {
    name: "get_ncaa_eligibility_info",
    description: "Get NCAA eligibility requirements for a specific division",
    input_schema: {
      type: "object",
      properties: {
        division: { type: "string", enum: ["D1", "D2", "D3", "NAIA"] }
      }
    }
  },
  {
    name: "get_announcements",
    description: "Get recent team announcements from coaches",
    input_schema: {
      type: "object",
      properties: {
        count: { type: "number" }
      }
    }
  },
  {
    name: "get_team_roster",
    description: "Get the roster for a specific team level",
    input_schema: {
      type: "object",
      properties: {
        level: { type: "string", enum: ["varsity", "jv", "freshman"] }
      }
    }
  },
  {
    name: "save_recruiting_interest",
    description: "Save a college to the player's recruiting interest list",
    input_schema: {
      type: "object",
      properties: {
        college: { type: "string" },
        level: { type: "string" },
        notes: { type: "string" }
      },
      required: ["college"]
    }
  }
];
```

### Example Agent Conversations

**Player asks about today's workout:**
> "What's my lift today?"
>
> Agent calls `get_todays_workout` → returns Phase: In-Season Week 6
> "Today is In-Season Week 6, Day 1. Here's your lift:
> - Power Clean: 3x3 @ 185 lbs (75% of your 245 max)
> - Back Squat: 3x5 @ 270 lbs (75% of your 360 max)
> - Incline Bench: 3x5 @ 154 lbs (75% of your 205 max)
> - Core circuit: 3 rounds
> Get after it 💪"

**Player asks about recruiting:**
> "Can you help me email the coach at UCLA?"
>
> Agent calls `get_recruiting_profile` + `draft_recruiting_email`
> "Here's a draft email for UCLA:
>
> Subject: Mission Viejo HS '27 — [Position] — Interested in UCLA Football
>
> Dear Coach [Name],
>
> My name is [Name], a junior [Position] at Mission Viejo HS (CA)...
> [Uses real stats: 40yd, maxes, season stats, All-League honors]
>
> Want me to adjust anything before you send it?"

**Player checks progress:**
> "How much has my squat gone up this year?"
>
> Agent calls `get_max_history` with lift="squat"
> "Your squat progression this year:
> - December: 350 lbs
> - February: 385 lbs (+35)
> - Spring Combine (April): 400 lbs (+15)
> - End of School (June): 425 lbs (+25)
>
> That's a 75 lb gain since December — 21% improvement. You're trending well for summer. The program has you targeting 450 by fall camp."

---

## 5. Authentication & Role-Based Access

### Login Flow
1. Coach/Admin creates player accounts (username + generated password)
2. **First login:**
   - Enter username & password
   - SMS 2FA verification → enter mobile number → receive code → verify
   - Forced password change
   - Register passkey (device biometrics — Face ID / Touch ID / fingerprint)
   - Onboarding survey (5 questions)
   - → Dashboard
3. **Returning login:**
   - Passkey authentication (Face ID / Touch ID / fingerprint) — no password needed
   - → Dashboard
4. **Fallback:** If passkey unavailable (new device, etc.) → username + password + SMS 2FA
5. Parent accounts follow the same first-login flow (minus the onboarding survey)
6. Coach accounts get admin features (announcements, roster edits, depth chart)

### Onboarding Survey (First Login Only — Players)
Shown after password change, before the player reaches the dashboard. Short, swipeable cards — takes ~30 seconds.

**Q1 — "What are your goals this season?"** (multi-select)
- Start on varsity
- Get stronger / hit new PRs
- Play college football
- Earn a scholarship
- Be a team leader

**Q2 — "How interested are you in recruiting right now?"** (single-select)
- High — actively reaching out to colleges
- Some — exploring options
- Not yet — focused on this season

**Q3 — "What do you want help with most?"** (single-select, sets top priority)
- Recruiting & college outreach
- Strength & conditioning
- Game prep & film
- Academics & eligibility

**Q4 — "Dream school?"** (optional text input)
- Free text or "Not sure yet"

**Q5 — "How should your assistant talk to you?"** (single-select)
- Like a coach — direct, push me hard
- Like a teammate — supportive, casual
- All business — just the facts

Responses saved to `playerPreferences/{playerId}` and editable in Settings.

### Username/Password Auth Strategy
Firebase Auth natively supports email/password but not username/password. To support username-based login:
1. Store a `usernames/` Firestore collection mapping `{ username → uid }`
2. On login, Cloud Function looks up the username → retrieves the associated uid
3. Issues a Firebase Custom Auth Token for that uid
4. Client signs in with `signInWithCustomToken()`
5. Usernames are unique, case-insensitive, and alphanumeric (e.g., "jsmith27", "coachrodriguez")
6. Coach/Admin dashboard provides bulk account creation (username + temporary password)

### 2FA & Passkey Strategy

**First Login — SMS 2FA (required):**
1. After username/password verified, prompt user to enter their mobile number
2. Cloud Function sends SMS verification code via Firebase Phone Auth
3. User enters 6-digit code → verified → phone number stored on user record
4. Phone number used for future fallback 2FA

**First Login — Passkey Registration (required):**
1. After 2FA + password change, prompt to register a passkey
2. Uses platform WebAuthn / FIDO2 APIs (Face ID on iOS, fingerprint on Android)
3. Passkey credential ID stored on user record in Firestore
4. Firebase Cloud Functions handle WebAuthn challenge/verification server-side

**Returning Login — Passkey (default):**
1. App presents passkey prompt on launch (biometric)
2. Device authenticates locally → sends signed challenge to Cloud Function
3. Cloud Function verifies → issues Custom Auth Token → signed in
4. No password or SMS needed — single tap/glance

**Fallback — New Device or Passkey Unavailable:**
1. Username + password → SMS 2FA to registered phone number
2. After verification, option to register a new passkey on the new device

### Role Permissions
| Feature | Player | Parent | Coach | Admin |
|---------|--------|--------|-------|-------|
| View schedule/calendar | ✅ | ✅ | ✅ | ✅ |
| AI Agent chat | ✅ | ❌ | ❌ | ❌ |
| View own stats/maxes | ✅ | ✅ | ✅ | ✅ |
| View all player stats | ❌ | ❌ | ✅ | ✅ |
| Edit depth chart | ❌ | ❌ | ✅ | ✅ |
| Post announcements | ❌ | ❌ | ✅ | ✅ |
| Edit roster | ❌ | ❌ | ✅ | ✅ |
| Recruiting features | ✅ | ✅ | ✅ | ✅ |
| Manage users | ❌ | ❌ | ❌ | ✅ |
| Engagement analytics | ❌ | ❌ | ❌ | ✅ |

### Admin Analytics Dashboard (Admin Role Only)

Accessible from a gear/admin icon in the app bar (visible only to admin users). Built with `fl_chart` for Flutter-native data visualizations.

**Overview Screen — Key Metrics (top row of metric tiles):**
- Daily Active Users (DAU) with 7-day trend arrow
- Weekly Active Users (WAU)
- Total Agent Conversations (today)
- Avg Session Duration

**Charts & Visualizations:**

1. **DAU Over Time** — Line chart (30-day rolling), color-coded by role (red=players, gold=parents, gray=coaches)
2. **Session Heatmap** — GitHub-style calendar heatmap showing daily activity intensity over the past 3 months
3. **Agent Usage** — Bar chart of agent conversations per day, with overlay of avg messages per conversation
4. **Top Agent Tools** — Horizontal bar chart showing which tools the AI agent uses most (get_todays_workout, draft_recruiting_email, etc.)
5. **Screen Popularity** — Ranked list with spark bars showing most-visited screens
6. **Platform Split** — Donut chart (iOS vs Android)
7. **Role Breakdown** — Stacked bar chart of active users by role over time

**Player Engagement Drill-Down** (tap any player):
- Activity streak (consecutive days active)
- Session history timeline
- Agent conversation count + top topics
- Last active timestamp
- Heatmap of their individual activity

**Filters:**
- Date range picker (last 7 / 30 / 90 days / custom)
- Filter by team level (varsity / JV / freshman / all)
- Filter by role (player / parent / coach)

**Data Pipeline:**
- `analytics_service.dart` logs session start/end, screen views, and agent interactions in real-time to `analytics/sessions/`
- Scheduled Cloud Function runs nightly to aggregate into `analytics/daily/` and `analytics/playerEngagement/`
- Dashboard reads from the pre-aggregated daily docs for fast loading

---

## 6. Push Notifications (FCM)

### Scheduled Notifications
- **Game day**: "Game day! 🏈 Diablos vs Edison tonight at 7pm — Home"
- **Practice reminder**: "Spring Practice #8 today at 3:00pm — bring cleats and helmet"
- **Workout reminder**: "Lift today at 2:45pm — In-Season Week 6, Day 1"
- **Recruiting deadline**: "NCAA early signing period opens in 2 weeks"

### Event-Driven Notifications
- Coach posts announcement → push to relevant team level
- Depth chart updated → push to affected players
- New combine/max data logged → "New PR! 🎉 Your squat went up to 400 lbs"

---

## 7. Data Seeding Plan

All 213 files from the program Google Drive will be parsed and imported:

| Data Source | Target Collection | Records |
|-------------|------------------|---------|
| Roster with sizes + Player Info spreadsheets | `players/` | ~120 players |
| Coaches Clearance spreadsheet | `coaches/` | ~15 coaches |
| 2026 Football Schedule (all levels) | `schedule/` | ~33 games |
| 2026 Football Calendar | `calendar/` | ~179 events |
| MAXES.xlsx (Dec + Feb) | `strength/maxes/` | ~80 entries |
| Spring Combine | `strength/combines/` | 72 players |
| Summer Combine | `strength/combines/` | 42 frosh + 81 varsity |
| End of School Maxes | `strength/maxes/` | 61 players |
| Player Sheets (86 players) | `strength/playerWorkouts/` | 86 sheets |
| Year Round Template (87 phases) | `strength/programs/` | 87 programs |
| Spring Depth Chart | `depthChart/` | 1 offense chart |
| Defensive HOF (19 games) | `gameStats/` | ~19 × 30 entries |
| Player of Game / Team Awards | `gameStats/awards/` | ~10 games |
| All League + Banquet Awards | `awards/` | ~30 awards |
| Fall Camp Practice Plans (15) | `practicePlans/` | 15 plans |
| Spring Practice Plans (15) | `practicePlans/` | 15 plans |
| Summer Practice Plans (20) | `practicePlans/` | 20 plans |

**Seeding approach:** TypeScript script in Cloud Functions that:
1. Reads xlsx/docx files using `xlsx` and `mammoth` npm packages
2. Maps data to Firestore document structures
3. Creates player ID cross-references
4. Batch writes to Firestore
5. Validates data integrity

---

## 8. Implementation Phases

### Phase 1 — Foundation (Weeks 1-2)
- [ ] Flutter project setup with Diablo theme, fonts, colors
- [ ] Firebase project setup (Auth, Firestore, Cloud Functions)
- [ ] Data model classes (Dart models + Firestore rules)
- [ ] Auth flow (login, role routing, onboarding)
- [ ] Bottom tab navigation shell
- [ ] Core widgets (DiabloAppBar, DiamondDivider, StatCard)

### Phase 2 — Data Layer & Seeding (Weeks 2-3)
- [ ] Firestore security rules
- [ ] Data seeding script (parse all 213 files → Firestore)
- [ ] Riverpod providers for all data streams
- [ ] Offline caching strategy (Firestore persistence)

### Phase 3 — Core Screens (Weeks 3-5)
- [ ] Dashboard/Home screen
- [ ] Schedule + Calendar screens
- [ ] Roster + Player Detail screens
- [ ] Depth Chart (interactive)
- [ ] Coaches screen
- [ ] Strength & Conditioning (workouts, maxes, combines)
- [ ] Game Stats screens

### Phase 4 — AI Agent (Weeks 5-7) ⭐
- [ ] Cloud Function: Claude API proxy with tool use
- [ ] System prompt builder with per-player context
- [ ] All 14 agent tools implemented
- [ ] Chat UI (bubbles, typing indicator, suggested prompts)
- [ ] Session persistence and history
- [ ] Recruiting email drafting flow
- [ ] Voice input integration

### Phase 5 — Operations & Notifications (Weeks 7-8)
- [ ] Push notification system (FCM)
- [ ] Announcements feed (coach → team)
- [ ] Parent Portal (read-only view)
- [ ] Team Store (WebView)
- [ ] Settings & preferences

### Phase 6 — Polish & Launch (Weeks 8-10)
- [ ] Animations and transitions
- [ ] Error handling and edge cases
- [ ] Performance optimization
- [ ] App Store / Play Store assets
- [ ] Beta testing with team
- [ ] Launch

---

## 9. Cost Estimates

| Service | Monthly Estimate |
|---------|-----------------|
| Firebase (Blaze plan) | ~$25-50 (Firestore reads/writes + Cloud Functions) |
| Claude API (Sonnet) | ~$50-150 (depends on usage — ~100 players × ~5 chats/day) |
| Firebase Cloud Messaging | Free |
| Firebase Auth | Free (under 50K MAU) |
| **Total** | **~$75-200/month** |

---

## 10. Security Considerations

- **Firestore Rules**: Players can only read their own profile, maxes, and workouts. Coaches can read/write all. Parents read-only on linked player.
- **Claude API Key**: Stored in Cloud Functions environment — never exposed to client.
- **Playbook Protection**: Offensive/defensive schemes are reference-only in the agent (no full playbook export). Agent can discuss concepts but won't dump full install documents.
- **Recruiting PII**: Player GPA, test scores, and contact info encrypted at rest. Only the player and linked parent can access.
- **Rate Limiting**: Agent capped at 50 messages/day per player to manage API costs.
