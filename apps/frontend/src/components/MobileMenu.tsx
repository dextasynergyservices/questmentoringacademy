"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
      {/* Close button */}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-[#a6a6a6] hover:text-[#081a42]"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
      </div>

      <ul className="space-y-4 mt-4 text-xl uppercase">
        <li>
          <Link href="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={onClose}>
            About Us
          </Link>
        </li>

        <li>
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleDropdown("centre")}
          >
            Centre
            <i className="bi bi-chevron-down"></i>
          </button>
          {openDropdown === "centre" && (
            <ul className="pl-4 space-y-2">
              <li>
                <Link href="/centre" onClick={onClose}>
                  The Quest Centre
                </Link>
              </li>
              <li>
                <Link href="/apply" onClick={onClose}>
                  Quest Mentoring & Coaching Centre
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <button
            className="flex items-center justify-between w-full text-left"
            onClick={() => toggleDropdown("programs")}
          >
            Programs
            <i className="bi bi-chevron-down"></i>
          </button>
          {openDropdown === "programs" && (
            <ul className="pl-4 space-y-2">
              <li>
                <Link href="/apply" onClick={onClose}>
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="#" onClick={onClose}>
                  Online Courses
                </Link>
              </li>
              <li>
                <Link href="#" onClick={onClose}>
                  Professional Development
                </Link>
              </li>
              <li>
                <Link href="#" onClick={onClose}>
                  Management & Consulting
                </Link>
              </li>
              <li>
                <Link href="#" onClick={onClose}>
                  Professional Certifications
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/apply" onClick={onClose}>
            Apply
          </Link>
        </li>
        <li>
          <Link href="/news" onClick={onClose}>
            News
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={onClose}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social */}
      <div className="mt-8 flex justify-center space-x-4 text-[#a6a6a6]">
        <a href="#">
          <i className="fab fa-pinterest"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
