'use client';

import { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/fitlog-resources/assets/logo.png';
import { ExerciseContext } from '../context/ExerciseContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { today, save } = useContext(ExerciseContext);

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
      <div className="navbar mx-auto w-11/12 px-0 lg:w-10/12">

        {/* Mobile Hamburger + Logo */}
        <div className="navbar-start min-w-0">

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-1 block rounded-full p-2 text-2xl leading-none text-white transition-colors hover:bg-[#15171d] lg:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-1.5 rounded-full px-1.5 py-1 transition-colors hover:bg-[#15171d]"
          >
            <Image
              src={Logo}
              alt="Fitlog Logo"
              className="h-7 w-auto sm:h-8"
              width={32}
              height={32}
            />

            <span className="truncate text-base font-bold tracking-wide text-white sm:text-lg font-[family-name:var(--font-oswald)]">
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

        {/* Right Side */}
        <div className="navbar-end gap-0.5 sm:gap-2">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-2xl px-1.5 py-2 transition-colors hover:bg-[#15171d] sm:gap-2 sm:px-3"
          >
            <span className="text-xs font-semibold text-white sm:text-sm">
              Plan
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1.5 text-[10px] font-bold text-neutral-900 sm:h-6 sm:min-w-6 sm:px-2 sm:text-xs">
              {today.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1 rounded-2xl px-1.5 py-2 transition-colors hover:bg-[#15171d] sm:gap-2 sm:px-3"
          >
            <span className="text-xs font-semibold text-white sm:text-sm">
              Saved
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-neutral-600 px-1.5 text-[10px] font-bold text-neutral-200 sm:h-6 sm:min-w-6 sm:px-2 sm:text-xs">
              {save.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Full Width Divider */}
      <div className="h-px w-full bg-[#24272d]" />

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-neutral-800 bg-neutral-950 px-4 py-3 lg:hidden">
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