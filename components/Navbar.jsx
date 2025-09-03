"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaHome,
  FaThLarge,
  FaCalendarAlt,
  FaClipboardList,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full font-sans bg-white shadow-sm px-6 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="Logo" width={160} height={70} />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#311b41] hover:text-xl"
        >
          <FaHome /> Home
        </Link>

        <Link
          href="/products"
          className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#311b41] hover:text-xl"
        >
          <FaThLarge /> Products
        </Link>

        <Link
          href="/subscriptions"
          className="flex items-center gap-2  text-gray-600 font-medium hover:text-[#311b41] hover:text-xl"
        >
          <FaCalendarAlt /> Subscriptions
        </Link>

        <Link
          href="/deliveries"
          className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#311b41] hover:text-xl"
        >
          <FaClipboardList /> Deliveries
        </Link>
      </div>

      {/* User Dropdown (Desktop) */}
      <div className="hidden md:block relative">
        <button
          onClick={() => setUserOpen(!userOpen)}
          className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#311b41] hover:text-xl"
        >
          <FaUser /> Guest <FiChevronDown />
        </button>

        {userOpen && (
          <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg border p-2">
            <Link
              href="/login"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Delivery History
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Transactions and Invoices
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Account
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Support
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-[#311b41] font-semibold hover:bg-gray-100 rounded-md"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 hover:text-[#311b41] text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-lg md:hidden z-20">
          <div className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#311b41]"
            >
              <FaHome /> Home
            </Link>

            <Link
              href="/products"
              className="flex items-center gap-2 text-gray-600 hover:text-[#311b41]"
            >
              <FaThLarge /> Products
            </Link>

            <Link
              href="/subscriptions"
              className="flex items-center gap-2 text-gray-600 hover:text-[#311b41]"
            >
              <FaCalendarAlt /> Subscriptions
            </Link>

            <Link
              href="/deliveries"
              className="flex items-center gap-2 text-gray-600 hover:text-[#311b41]"
            >
              <FaClipboardList /> Deliveries
            </Link>

            {/* User Section in Mobile */}
            <div className="border-t pt-3">
              <button
                onClick={() => setUserOpen(!userOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-[#311b41] w-full"
              >
                <FaUser /> Guest <FiChevronDown />
              </button>

              {userOpen && (
                <div className="mt-2 w-full bg-gray-50 rounded-lg border p-2">
                 <Link
              href="/login"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Delivery History
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Transactions and Invoices
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Account
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Support
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-[#311b41] font-semibold hover:bg-gray-100 rounded-md"
            >
              Login
            </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
