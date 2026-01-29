"use client";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Back to Top */}
        <div className="mb-6">
          <a
            href="#header"
            className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            Back to Top
          </a>
        </div>

        {/* Secondary Navigation */}
        <nav className="flex justify-center items-center gap-6 text-xs uppercase tracking-[0.15em]">
          <a
            href="https://www.bitcoinassociation.ch/privacy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.bitcoinassociation.ch/terms"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms and Conditions
          </a>
        </nav>
      </div>
    </footer>
  );
}
