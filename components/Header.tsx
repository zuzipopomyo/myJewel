"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white  border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top announcement bar */}
        <div className="text-black text-center py-2 text-sm border-b border-t">
          <p>Exclusive Collection Launch: Discover Timeless Elegance Today</p>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif text-gray-900">
              MyJewel
            </Link>
          </div>

          {/* Desktop Navigation - Horizontal with dropdown indicators */}
          <nav className="hidden md:flex space-x-6">
            <div className="relative group">
              <Link href="/jewelry" className="text-gray-900 hover:text-gray-600 font-medium uppercase flex items-center">
                JEWELRY <span className="ml-1 text-xs">▼</span>
              </Link>
              {/* Dropdown would go here */}
            </div>
            
            <div className="relative group">
              <Link href="/love-and-engagement" className="text-gray-900 hover:text-gray-600 font-medium uppercase flex items-center">
                LOVE & ENGAGEMENT <span className="ml-1 text-xs">▼</span>
              </Link>
              {/* Dropdown would go here */}
            </div>
            
            <div className="relative group">
              <Link href="/gifts" className="text-gray-900 hover:text-gray-600 font-medium uppercase flex items-center">
                GIFTS <span className="ml-1 text-xs">▼</span>
              </Link>
              {/* Dropdown would go here */}
            </div>
            
            <Link href="/custom-jewelry" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
              CUSTOM JEWELRY
            </Link>
            
            <Link href="/about" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
              ABOUT
            </Link>
            
            <Link href="/contact" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
              CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/jewelry" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
                JEWELRY
              </Link>
              <Link href="/love-and-engagement" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
                LOVE & ENGAGEMENT
              </Link>
              <Link href="/gifts" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
                GIFTS
              </Link>
              <Link href="/custom-jewelry" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
                CUSTOM JEWELRY
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
                ABOUT
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-gray-600 font-medium uppercase">
                CONTACT US
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}