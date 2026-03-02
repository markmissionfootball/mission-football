"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const socialAccounts = [
  {
    platform: "Instagram",
    handle: "@mvhsfootball",
    url: "https://www.instagram.com/mvhsfootball/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: "from-purple-600 via-pink-500 to-orange-400",
  },
  {
    platform: "Facebook",
    handle: "MVHSFootball",
    url: "https://www.facebook.com/MVHSFootball/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "from-blue-600 to-blue-700",
  },
  {
    platform: "X",
    handle: "@missionfootball",
    url: "https://x.com/missionfootball",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "from-gray-800 to-black",
  },
  {
    platform: "TikTok",
    handle: "@mvhsfootball",
    url: "https://www.tiktok.com/@mvhsfootball",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    color: "from-gray-900 to-black",
  },
  {
    platform: "Threads",
    handle: "@mvhsfootball",
    url: "https://www.threads.com/@mvhsfootball",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.083-1.14 3.39-1.174a6.8 6.8 0 011.33.108c-.032-.56-.098-1.074-.236-1.461-.386-1.082-1.318-1.614-2.847-1.628l-.084-.002c-1.048 0-1.987.375-2.484.996l-1.564-1.24C7.418 5.292 8.81 4.68 10.504 4.68l.112.002c2.454.037 4.138 1.225 4.73 3.338.257.916.376 1.975.357 3.15-.004.184-.01.37-.02.556.965.486 1.753 1.156 2.29 1.974.755 1.147 1.04 2.56.832 4.104-.327 2.425-1.674 4.342-3.896 5.543C13.508 23.89 11.693 24 10.395 24h-.002l1.793 0zm-1.016-8.583c-.064 0-.13.002-.195.005-.9.038-1.634.293-2.12.738-.478.44-.695 1.003-.66 1.682.043.774.504 1.338 1.333 1.876.564.365 1.263.546 2.085.503 1.058-.058 1.878-.461 2.437-1.199.407-.537.693-1.258.86-2.129-.523-.178-1.09-.31-1.681-.375a6.51 6.51 0 00-.708-.041c-.449 0-.897.043-1.351-.06z" />
      </svg>
    ),
    color: "from-gray-800 to-black",
  },
];

export default function Social() {
  const xTimelineRef = useRef<HTMLDivElement>(null);
  const fbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load X/Twitter embedded timeline widget
    const xScript = document.createElement("script");
    xScript.src = "https://platform.twitter.com/widgets.js";
    xScript.async = true;
    xScript.charset = "utf-8";
    document.body.appendChild(xScript);

    // Load Facebook SDK
    const fbScript = document.createElement("script");
    fbScript.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossOrigin = "anonymous";
    document.body.appendChild(fbScript);

    return () => {
      document.body.removeChild(xScript);
      document.body.removeChild(fbScript);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#e8e4de]">
      {/* Hero banner */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://missionfootball.com/wp-content/uploads/2025/08/24_MVHS_Football_Team_Varsity-scaled.jpg"
          alt="Mission Viejo Diablos Social Media"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,35,44,0.7)] to-[rgb(30,35,43)]" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-0 text-gray-400 mb-4">
            <span className="w-[60px] h-[1px] bg-current" />
            <span className="w-4 h-4 border border-current rotate-45" />
            <span className="w-[60px] h-[1px] bg-current" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-wider text-[#d12132]">
            Social Media
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 uppercase tracking-wider">
            Follow Diablos Football
          </p>
        </div>
      </section>

      {/* Social Account Links */}
      <section className="bg-diablo-dark">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {socialAccounts.map((account) => (
              <a
                key={account.platform}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-[#2a2a2a] rounded-sm p-5 hover:bg-[#333] transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${account.color} flex items-center justify-center text-white`}
                >
                  {account.icon}
                </div>
                <div className="text-center">
                  <p className="text-white text-sm font-bold">
                    {account.platform}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {account.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Live Feeds */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-diablo-red text-2xl md:text-3xl font-light uppercase tracking-wider mb-2 border-l-4 border-diablo-red pl-4">
          Latest Posts
        </h2>
        <div className="flex items-center gap-0 text-gray-400 mt-4 mb-10">
          <span className="w-[40px] h-[1px] bg-current" />
          <span className="w-3 h-3 border border-current rotate-45" />
          <span className="w-[40px] h-[1px] bg-current" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Instagram Embed */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm">
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/mvhsfootball/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-diablo-red text-xs font-bold uppercase tracking-wider hover:text-red-700"
              >
                Follow →
              </a>
            </div>
            <div className="bg-white rounded-sm p-4 min-h-[500px]">
              <iframe
                src="https://www.instagram.com/mvhsfootball/embed"
                className="w-full border-0"
                height="480"
                scrolling="no"
                allowTransparency
                title="Mission Viejo Football Instagram"
              />
            </div>
          </div>

          {/* X/Twitter Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm">
                X / Twitter
              </h3>
              <a
                href="https://x.com/missionfootball"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-diablo-red text-xs font-bold uppercase tracking-wider hover:text-red-700"
              >
                Follow →
              </a>
            </div>
            <div className="bg-white rounded-sm p-4 min-h-[500px]" ref={xTimelineRef}>
              <a
                className="twitter-timeline"
                data-height="480"
                data-theme="light"
                data-chrome="noheader nofooter noborders"
                href="https://twitter.com/missionfootball"
              >
                Loading tweets...
              </a>
            </div>
          </div>
        </div>

        {/* Facebook Page */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <h3 className="text-diablo-dark font-bold uppercase tracking-wider text-sm">
              Facebook
            </h3>
            <a
              href="https://www.facebook.com/MVHSFootball/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-diablo-red text-xs font-bold uppercase tracking-wider hover:text-red-700"
            >
              Follow →
            </a>
          </div>
          <div className="bg-white rounded-sm p-4" ref={fbRef}>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/MVHSFootball/"
              data-tabs="timeline"
              data-width=""
              data-height="500"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote
                cite="https://www.facebook.com/MVHSFootball/"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/MVHSFootball/">
                  Mission Viejo Football on Facebook
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-diablo-dark">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-diablo-red text-xl md:text-2xl font-light uppercase tracking-wider mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Follow us on social media for the latest highlights, game updates,
            recruiting news, and behind-the-scenes content from Diablos Football.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialAccounts.map((account) => (
              <a
                key={account.platform}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-diablo-red transition-colors"
                aria-label={`Follow on ${account.platform}`}
              >
                {account.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
