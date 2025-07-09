"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import styles from "./Header.module.css";
import "../../app/styles/responsive.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header className={`${styles.header} flex items-center justify-between`}>
        <div
          className={`${styles.headerContent} flex items-center justify-between relative left-1/10`}
        >
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image
                src="/questnewlogo.png"
                alt="Logo"
                width={100}
                height={100}
                className={`${styles.logo_m} relative right-32`}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav
            className={`${styles.mainNavContainer} relative left-0 bottom-10`}
          >
            <ul className={`${styles.mainNav} flex items-center`}>
              <li className={styles.mainNavItem}>
                <Link href="/" className={`${styles.mainNavLink}`}>
                  Home
                </Link>
              </li>
              <li className={styles.mainNavItem}>
                <Link href="#" className={`${styles.mainNavLink}`}>
                  About Us
                </Link>
              </li>

              <li className={`${styles.mainNavItem} dropdown relative`}>
                <button
                  className={`${styles.mainNavLink} flex items-center gap-1`}
                >
                  Centre <FiChevronDown size={14} />
                </button>
                <ul className={`${styles.dropdownMenu}`}>
                  <li className={styles.dropdownItem}>
                    <Link href="#">The Quest Centre</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="/apply">Quest Mentoring & Coaching Centre</Link>
                  </li>
                </ul>
              </li>

              <li className={`${styles.mainNavItem} dropdown relative`}>
                <button
                  className={`${styles.mainNavLink} flex items-center gap-1`}
                >
                  Programs <FiChevronDown size={14} />
                </button>
                <ul className={`${styles.dropdownMenu}`}>
                  <li className={styles.dropdownItem}>
                    <Link href="/apply">Training Programs</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="#">Online Courses</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="#">Professional Development</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="#">Management & Consulting</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="#">Professional Certifications</Link>
                  </li>
                </ul>
              </li>

              <li className={styles.mainNavItem}>
                <Link href="/apply" className={styles.mainNavLink}>
                  Apply
                </Link>
              </li>
              <li className={styles.mainNavItem}>
                <Link href="#" className={styles.mainNavLink}>
                  News
                </Link>
              </li>
              <li className={styles.mainNavItem}>
                <Link href="/contact" className={styles.mainNavLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Side phone bar */}
        {/* <div className={`${styles.headerSide} hidden md:flex items-center`}>
          <Image
            src="/images/phone-call.svg"
            alt="Phone"
            width={29}
            height={29}
          />
          <span className={styles.headerSideText}>+234 803 664 9286</span>
        </div> */}

        {/* Hamburger Icon */}
        <button
          className={`${styles.hamburgerContainer}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <FiX size={52} className={styles.hamburgerIcon} />
          ) : (
            <FiMenu size={52} className={styles.hamburgerIcon} />
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 bg-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } ${styles.menuContainer}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <FiX size={28} />
          </button>
        </div>

        <div className="p-6">
          <ul className="flex flex-col gap-4 uppercase text-lg">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>

            <li>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleMobileDropdown("centre")}
              >
                Centre <FiChevronDown />
              </button>
              {mobileDropdown === "centre" && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link href="#" onClick={() => setMenuOpen(false)}>
                      The Quest Centre
                    </Link>
                  </li>
                  <li>
                    <Link href="/apply" onClick={() => setMenuOpen(false)}>
                      Quest Mentoring & Coaching Centre
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleMobileDropdown("programs")}
              >
                Programs <FiChevronDown />
              </button>
              {mobileDropdown === "programs" && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <Link href="/apply" onClick={() => setMenuOpen(false)}>
                      Training Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setMenuOpen(false)}>
                      Online Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setMenuOpen(false)}>
                      Professional Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setMenuOpen(false)}>
                      Management & Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => setMenuOpen(false)}>
                      Professional Certifications
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/apply" onClick={() => setMenuOpen(false)}>
                Apply
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                News
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
