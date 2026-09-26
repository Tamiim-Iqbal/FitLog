'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/fitlog-resources/assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    {
      name: 'Workouts',
      href: '/',
    },
    {
      name: 'My Plan',
      href: '/my-plan',
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#0c0d10]">

      {/* Navbar */}
      <div className="navbar mx-auto w-10/12">

        {/* Mobile Hamburger + Logo */}
        <div className="navbar-start">

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-2 block rounded-full p-2 text-2xl text-white transition-colors hover:bg-[#15171d] lg:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full px-2 py-1 transition-colors hover:bg-[#15171d]"
          >
            <Image
              src={Logo}
              alt="Fitlog Logo"
              className="h-8 w-auto"
              width={32}
              height={32}
            />

            <span className="text-lg font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal flex items-center gap-2 px-1 text-sm">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-3xl px-4 py-2 font-semibold transition-colors font-[family-name:var(--font-inter)] ${
                      isActive
                        ? 'bg-[#1a2312] text-[#c2f800]'
                        : 'text-gray-200 hover:bg-[#15171d] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-2xl px-3 py-2 transition-colors hover:bg-[#15171d] font-[family-name:var(--font-inter)]"
          >
            <span className="text-sm font-semibold text-white">
              Plan
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-400 px-2 text-xs font-bold text-neutral-900">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-2xl px-3 py-2 transition-colors hover:bg-[#15171d] font-[family-name:var(--font-inter)]"
          >
            <span className="text-sm font-semibold text-white">
              Saved
            </span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-neutral-600 px-2 text-xs font-bold text-neutral-200">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Full Width Divider */}
      <div className="h-px w-full bg-[#24272d]" />

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-neutral-800 bg-neutral-950 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium">

            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-3xl px-4 py-2 font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#1a2312] text-[#c2f800]'
                        : 'text-gray-200 hover:bg-[#15171d] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;