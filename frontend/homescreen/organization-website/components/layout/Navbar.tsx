import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex h-[80px] items-center justify-between bg-[#073d29] px-4 sm:px-6">

        {/* Logo */}
        <div className="relative h-full w-[180px] bg-white sm:w-[230px] md:w-[280px]">
          <Image
            src="/images/logo2.jpg"
            alt="Sufi Humanity Aid International"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#"
            className="text-[#d8c27a] transition hover:text-[#e4d18e]"
          >
            Home
          </a>

          <a
            href="#"
            className="text-white transition hover:text-[#d8c27a]"
          >
            Our Work
          </a>

          <a
            href="#"
            className="text-white transition hover:text-[#d8c27a]"
          >
            Impact
          </a>

          <a
            href="#"
            className="text-white transition hover:text-[#d8c27a]"
          >
            Contact
          </a>

          <a
            href="#"
            className="text-white transition hover:text-[#d8c27a]"
          >
            Donate
          </a>

          <a
            href="#"
            className="rounded-md border border-[#d8c27a] px-4 py-2 font-semibold text-white transition hover:bg-[#d8c27a] hover:text-[#073d29]"
          >
            SUPPORT OUR WORK
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="text-3xl text-white lg:hidden"
        >
          ☰
        </button>

      </nav>
    </header>
  );
}