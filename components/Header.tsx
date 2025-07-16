"use client";

import { AppWindowIcon, Dot, HeartIcon, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import bag from "@/public/bag.svg";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white  border-gray-200">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Top announcement bar */}
        <div className="border-b px-4 py-2 text-[10px] md:text-xs">
          {/* Mobile: only announcement */}
          <p className="flex items-center justify-center text-center sm:hidden">
            <Dot />
            <span className="px-1">
              Exclusive Collection Launch: Discover Timeless Elegance Today
            </span>
            <Dot />
          </p>

          {/* Desktop: full layout */}
          <div className="hidden sm:flex items-center justify-between">
            {/* Left: BOOK APPOINTMENT */}
            <h3 className="flex items-center gap-1">
              <AppWindowIcon className="w-4 h-4" />
              BOOK APPOINTMENT
            </h3>

            {/* Center: Announcement */}
            <p className="flex items-center text-center">
              <Dot />
              <span className="px-1">
                Exclusive Collection Launch: Discover Timeless Elegance Today
              </span>
              <Dot />
            </p>

            {/* Right: Icons */}
            <div className="flex items-center gap-3">
              <User className="w-4 h-4" />
              <HeartIcon className="w-4 h-4" />
              <Image src={bag} alt="" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center border-r px-10 font-playfair text-2xl font-thin">
            <Link href="/" className="flex">
              <svg
                width="134"
                height="35"
                viewBox="0 0 134 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M131.221 0V24.876C131.221 25.884 131.425 26.568 131.833 26.928C132.265 27.288 132.973 27.468 133.957 27.468V28.224C133.549 28.2 132.925 28.176 132.085 28.152C131.269 28.104 130.441 28.08 129.601 28.08C128.785 28.08 127.957 28.104 127.117 28.152C126.277 28.176 125.653 28.2 125.245 28.224V27.468C126.229 27.468 126.925 27.288 127.333 26.928C127.765 26.568 127.981 25.884 127.981 24.876V4.32C127.981 3.24 127.789 2.448 127.405 1.944C127.021 1.416 126.301 1.152 125.245 1.152V0.395999C126.013 0.467999 126.757 0.504 127.477 0.504C128.173 0.504 128.833 0.467999 129.457 0.395999C130.105 0.3 130.693 0.168001 131.221 0Z"
                  fill="#101010"
                />
                <path
                  d="M115.674 9.18C117.786 9.18 119.43 9.828 120.606 11.124C121.806 12.396 122.406 14.388 122.406 17.1H109.698L109.662 16.416H118.95C118.998 15.24 118.902 14.16 118.662 13.176C118.422 12.168 118.038 11.364 117.51 10.764C117.006 10.164 116.346 9.864 115.53 9.864C114.426 9.864 113.442 10.416 112.578 11.52C111.738 12.624 111.234 14.376 111.066 16.776L111.174 16.92C111.126 17.28 111.09 17.676 111.066 18.108C111.042 18.54 111.03 18.972 111.03 19.404C111.03 21.036 111.294 22.44 111.822 23.616C112.35 24.792 113.034 25.692 113.874 26.316C114.738 26.916 115.626 27.216 116.538 27.216C117.258 27.216 117.942 27.108 118.59 26.892C119.238 26.652 119.838 26.268 120.39 25.74C120.942 25.212 121.422 24.504 121.83 23.616L122.55 23.904C122.286 24.696 121.854 25.464 121.254 26.208C120.654 26.952 119.898 27.564 118.986 28.044C118.074 28.5 117.018 28.728 115.818 28.728C114.09 28.728 112.602 28.332 111.354 27.54C110.13 26.748 109.182 25.656 108.51 24.264C107.862 22.848 107.538 21.228 107.538 19.404C107.538 17.292 107.874 15.48 108.546 13.968C109.218 12.432 110.166 11.256 111.39 10.44C112.614 9.6 114.042 9.18 115.674 9.18Z"
                  fill="#101010"
                />
                <path
                  d="M85.9833 9.684V10.44C85.3833 10.44 84.8553 10.488 84.3993 10.584C83.9433 10.656 83.6433 10.896 83.4993 11.304C83.3553 11.712 83.4633 12.432 83.8233 13.464L87.5673 24.192L87.3153 24.156L92.6073 9.54L93.3273 9.828L86.7393 28.404C86.6433 28.404 86.5473 28.404 86.4513 28.404C86.3553 28.404 86.2473 28.404 86.1273 28.404L80.2233 12.456C79.8393 11.496 79.4553 10.92 79.0713 10.728C78.7113 10.536 78.3993 10.44 78.1353 10.44V9.684C78.6153 9.756 79.1073 9.816 79.6113 9.864C80.1393 9.888 80.7033 9.9 81.3033 9.9C82.0473 9.9 82.8273 9.876 83.6433 9.828C84.4833 9.78 85.2633 9.732 85.9833 9.684ZM105.747 9.684V10.404C105.291 10.452 104.859 10.656 104.451 11.016C104.067 11.352 103.719 11.988 103.407 12.924L98.1873 28.404C98.0913 28.404 97.9953 28.404 97.8993 28.404C97.8033 28.404 97.6953 28.404 97.5753 28.404L91.7793 13.68L92.6073 9.54C92.7513 9.54 92.8833 9.54 93.0033 9.54C93.1473 9.54 93.2913 9.54 93.4353 9.54L99.0513 24.408L98.7633 24.624L102.327 13.788C102.591 12.972 102.687 12.336 102.615 11.88C102.567 11.4 102.327 11.052 101.895 10.836C101.487 10.596 100.851 10.452 99.9873 10.404V9.684C100.419 9.708 100.791 9.732 101.103 9.756C101.415 9.756 101.715 9.768 102.003 9.792C102.315 9.792 102.651 9.792 103.011 9.792C103.563 9.792 104.055 9.78 104.487 9.756C104.943 9.732 105.363 9.708 105.747 9.684Z"
                  fill="#101010"
                />
                <path
                  d="M69.497 9.18C71.609 9.18 73.253 9.828 74.429 11.124C75.629 12.396 76.229 14.388 76.229 17.1H63.521L63.485 16.416H72.773C72.821 15.24 72.725 14.16 72.485 13.176C72.245 12.168 71.861 11.364 71.333 10.764C70.829 10.164 70.169 9.864 69.353 9.864C68.249 9.864 67.265 10.416 66.401 11.52C65.561 12.624 65.057 14.376 64.889 16.776L64.997 16.92C64.949 17.28 64.913 17.676 64.889 18.108C64.865 18.54 64.853 18.972 64.853 19.404C64.853 21.036 65.117 22.44 65.645 23.616C66.173 24.792 66.857 25.692 67.697 26.316C68.561 26.916 69.449 27.216 70.361 27.216C71.081 27.216 71.765 27.108 72.413 26.892C73.061 26.652 73.661 26.268 74.213 25.74C74.765 25.212 75.245 24.504 75.653 23.616L76.373 23.904C76.109 24.696 75.677 25.464 75.077 26.208C74.477 26.952 73.721 27.564 72.809 28.044C71.897 28.5 70.841 28.728 69.641 28.728C67.913 28.728 66.425 28.332 65.177 27.54C63.953 26.748 63.005 25.656 62.333 24.264C61.685 22.848 61.361 21.228 61.361 19.404C61.361 17.292 61.697 15.48 62.369 13.968C63.041 12.432 63.989 11.256 65.213 10.44C66.437 9.6 67.865 9.18 69.497 9.18Z"
                  fill="#101010"
                />
                <path
                  d="M47.5156 34.992V34.308C48.5956 34.284 49.4956 34.02 50.2156 33.516C50.9596 33.012 51.5116 32.172 51.8716 30.996C52.2556 29.844 52.4476 28.296 52.4476 26.352V6.552C52.4476 5.664 52.3756 5.016 52.2316 4.608C52.0876 4.176 51.7996 3.888 51.3676 3.744C50.9596 3.576 50.3476 3.48 49.5316 3.456V2.736C50.0356 2.76 50.6956 2.784 51.5116 2.808C52.3276 2.832 53.1796 2.844 54.0676 2.844C54.9556 2.844 55.8076 2.832 56.6236 2.808C57.4636 2.784 58.1596 2.76 58.7116 2.736V3.456C57.8956 3.48 57.2716 3.576 56.8396 3.744C56.4316 3.888 56.1556 4.176 56.0116 4.608C55.8676 5.016 55.7956 5.664 55.7956 6.552V19.728C55.7956 20.712 55.7836 21.78 55.7596 22.932C55.7356 24.084 55.6756 25.2 55.5796 26.28C55.5076 27.36 55.3756 28.308 55.1836 29.124C54.7756 30.804 53.9116 32.196 52.5916 33.3C51.2956 34.428 49.6036 34.992 47.5156 34.992Z"
                  fill="#101010"
                />
                <path
                  d="M48.0112 9.684V10.404C47.5552 10.452 47.1352 10.656 46.7512 11.016C46.3672 11.376 46.0072 12.012 45.6712 12.924L39.7672 28.404H39.1552L32.5312 12.456C32.0752 11.52 31.6192 10.956 31.1632 10.764C30.7312 10.548 30.3712 10.44 30.0832 10.44V9.684C30.6112 9.756 31.1632 9.816 31.7392 9.864C32.3152 9.888 32.9392 9.9 33.6112 9.9C34.3552 9.9 35.1352 9.876 35.9512 9.828C36.7912 9.78 37.5712 9.732 38.2912 9.684V10.44C37.6912 10.44 37.1512 10.488 36.6712 10.584C36.2152 10.656 35.9272 10.908 35.8072 11.34C35.6872 11.748 35.8312 12.456 36.2392 13.464L40.6672 24.444L40.4512 24.516L44.5552 13.788C44.8672 12.996 44.9872 12.372 44.9152 11.916C44.8672 11.436 44.6272 11.076 44.1952 10.836C43.7632 10.596 43.1152 10.452 42.2512 10.404V9.684C42.6832 9.708 43.0552 9.732 43.3672 9.756C43.6792 9.756 43.9792 9.768 44.2672 9.792C44.5792 9.792 44.9152 9.792 45.2752 9.792C45.8272 9.792 46.3192 9.78 46.7512 9.756C47.2072 9.732 47.6272 9.708 48.0112 9.684ZM39.7672 28.404L38.5432 31.536C38.3032 32.136 38.0512 32.64 37.7872 33.048C37.5472 33.456 37.2832 33.792 36.9952 34.056C36.6112 34.416 36.1552 34.656 35.6272 34.776C35.0992 34.92 34.6192 34.992 34.1872 34.992C33.7312 34.992 33.3112 34.908 32.9272 34.74C32.5672 34.572 32.2792 34.32 32.0632 33.984C31.8472 33.672 31.7392 33.288 31.7392 32.832C31.7392 32.256 31.9072 31.788 32.2432 31.428C32.5792 31.092 33.0472 30.924 33.6472 30.924C34.1512 30.924 34.5832 31.068 34.9432 31.356C35.3032 31.644 35.4832 32.064 35.4832 32.616C35.4832 33.024 35.3872 33.36 35.1952 33.624C35.0032 33.888 34.7752 34.092 34.5112 34.236C34.5592 34.26 34.5952 34.272 34.6192 34.272C34.6672 34.272 34.7032 34.272 34.7272 34.272C35.3752 34.272 35.9512 34.044 36.4552 33.588C36.9592 33.156 37.4032 32.448 37.7872 31.464L39.0832 28.116L39.7672 28.404Z"
                  fill="#101010"
                />
                <path
                  d="M28.844 2.736V3.456C28.028 3.48 27.404 3.576 26.972 3.744C26.564 3.888 26.288 4.176 26.144 4.608C26 5.016 25.928 5.664 25.928 6.552V24.408C25.928 25.272 26 25.92 26.144 26.352C26.288 26.784 26.564 27.072 26.972 27.216C27.404 27.36 28.028 27.456 28.844 27.504V28.224C28.292 28.176 27.596 28.152 26.756 28.152C25.94 28.128 25.112 28.116 24.272 28.116C23.336 28.116 22.46 28.128 21.644 28.152C20.828 28.152 20.168 28.176 19.664 28.224V27.504C20.48 27.456 21.092 27.36 21.5 27.216C21.932 27.072 22.22 26.784 22.364 26.352C22.508 25.92 22.58 25.272 22.58 24.408V4.608L22.724 4.716L13.904 28.404H13.328L4.256 5.04V24.048C4.256 24.912 4.328 25.596 4.472 26.1C4.64 26.58 4.952 26.928 5.408 27.144C5.888 27.336 6.596 27.456 7.532 27.504V28.224C7.1 28.176 6.536 28.152 5.84 28.152C5.144 28.128 4.484 28.116 3.86 28.116C3.26 28.116 2.648 28.128 2.024 28.152C1.424 28.152 0.920001 28.176 0.512001 28.224V27.504C1.328 27.456 1.94 27.336 2.348 27.144C2.78 26.928 3.068 26.58 3.212 26.1C3.356 25.596 3.428 24.912 3.428 24.048V6.552C3.428 5.664 3.356 5.016 3.212 4.608C3.068 4.176 2.78 3.888 2.348 3.744C1.94 3.576 1.328 3.48 0.512001 3.456V2.736C0.920001 2.76 1.424 2.784 2.024 2.808C2.648 2.832 3.26 2.844 3.86 2.844C4.388 2.844 4.928 2.832 5.48 2.808C6.056 2.784 6.536 2.76 6.92 2.736L15.092 24.264L14.48 24.552L22.58 2.844C22.868 2.844 23.144 2.844 23.408 2.844C23.696 2.844 23.984 2.844 24.272 2.844C25.112 2.844 25.94 2.832 26.756 2.808C27.596 2.784 28.292 2.76 28.844 2.736Z"
                  fill="#101010"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation - Horizontal with dropdown indicators */}
          <nav className="hidden font-dmsans md:flex items-center space-x-8 text-[13px] text-[#434343] uppercase ">
            {/* Jewelry with dropdown */}
            <div className="relative group">
              <Link
                href="/jewelry"
                className="flex items-center space-x-1 text-[#777] transition-colors duration-200"
              >
                <span>Jewelry</span>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 4.875L7 8.125L10.25 4.875"
                    stroke="#434343"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <ul className="py-2 text-[13px] text-[#434343]">
                  <li>
                    <Link
                      href="/jewelry/rings"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Rings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jewelry/necklaces"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Necklaces
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jewelry/bracelets"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Bracelets
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative group font-dmsans text-[13px] text-[#434343]">
              <Link
                href="/loveandengagement"
                className="flex items-center space-x-1 text-[#777] transition-colors duration-200"
              >
                <span>Love and Engagement</span>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 4.875L7 8.125L10.25 4.875"
                    stroke="#434343"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="relative group">
              <Link
                href="/gifts"
                className="flex items-center space-x-1 text-[#777] transition-colors duration-200"
              >
                <span>Gifts</span>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 4.875L7 8.125L10.25 4.875"
                    stroke="#434343"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <Link
              href="/custom-jewelry"
              className="flex items-center space-x-1 text-[#777] transition-colors duration-200"
            >
              CUSTOM JEWELRY
            </Link>

            <Link
              href="/about"
              className="flex items-center space-x-1 text-[#777] transition-colors duration-200"
            >
              ABOUT
            </Link>

            <Link
              href="/contact"
              className="flex items-center space-x-1 text-[#777] transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </nav>

          <div className="border-l px-10">
            <Search />
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4 text-[13px] font-DmSam">
              <Link
                href="/jewelry"
                className="text-gray-200 hover:text-gray-600  uppercase"
              >
                JEWELRY
              </Link>
              <Link
                href="/love-and-engagement"
                className="text-gray-900 hover:text-gray-600  uppercase"
              >
                LOVE & ENGAGEMENT
              </Link>
              <Link
                href="/gifts"
                className="text-gray-900 hover:text-gray-600 uppercase"
              >
                GIFTS
              </Link>
              <Link
                href="/custom-jewelry"
                className="text-gray-900 hover:text-gray-600  uppercase"
              >
                CUSTOM JEWELRY
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-gray-600 uppercase"
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 uppercase"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
