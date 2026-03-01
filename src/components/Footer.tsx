import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-diablo-dark text-white">
      {/* Office Hours */}
      <div className="text-center py-12 px-4">
        <h3 className="text-diablo-red italic font-bold text-lg uppercase tracking-wider mb-4">
          Office Hours
        </h3>
        <p className="text-gray-300 text-sm mb-1">
          Monday - Friday: 7:00 am to 4:00 pm
        </p>
        <p className="text-gray-300 text-sm">Saturday - Sunday: Closed</p>
      </div>

      {/* Logo + Address section */}
      <div className="text-center pb-8 px-4">
        <div className="flex justify-center mb-4">
          <Image
            src="https://missionfootball.com/wp-content/uploads/2024/09/MV_FB_LOGO_WLACES.png"
            alt="MVHS Football Logo"
            width={80}
            height={80}
          />
        </div>

        <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
          MVHS Football
        </h4>

        <h5 className="text-diablo-red italic font-bold text-sm uppercase tracking-wider mb-3">
          School Address
        </h5>

        <p className="text-gray-300 text-sm">25025 Chrisanta Dr.</p>
        <p className="text-gray-300 text-sm mb-4">
          Mission Viejo, CA 92691
        </p>

        <p className="text-gray-300 text-sm mb-8">(949) 837-7722</p>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-8">
          <a
            href="https://www.facebook.com/MVHSFootball/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-diablo-red flex items-center justify-center hover:bg-red-700 transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/MVHSFootball"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-diablo-red flex items-center justify-center hover:bg-red-700 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/mvhsfootball/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-diablo-red flex items-center justify-center hover:bg-red-700 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-diablo-red mx-4">
        <p className="text-center text-gray-400 text-xs py-6">
          Copyright &copy; {new Date().getFullYear()} MVHS Football. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
