import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#073d29] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Logo / About */}
          <div>
            <div className="relative h-20 w-52 bg-white">
              <Image
                src="/images/logo2.jpg"
                alt="Sufi Humanity Aid International"
                fill
                className="object-contain"
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/80">
              Supporting communities, creating opportunities, and helping
              build a better future.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-[#d8c27a]">
              EXPLORE
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  Our Work
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  Campaigns
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-[#d8c27a]">
              ABOUT
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  Our Impact
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  Get Involved
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#d8c27a]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#d8c27a]">
              CONTACT
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/80">
              <p>
                Email: info@example.com
              </p>

              <p>
                Phone: +00 000 000 000
              </p>

              <p>
                Address: Your Address Here
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="transition hover:text-[#d8c27a]"
              >
                Facebook
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:text-[#d8c27a]"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <p>
            © 2026 Sufi Humanity Aid International. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-[#d8c27a]">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-[#d8c27a]">
              Terms
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
