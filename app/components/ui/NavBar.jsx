'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


export const NavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname == '/';

  return (
      <nav className="bg-transparent fixed w-full z-10 heading-text font-semibold">
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-md md:text-xl">
            {/* FBCFI Edmonton or FBCFI Logo */}
              <Link href="/" className="text-white hover:text-green-800">
                FBCFI Edmonton
              </Link>

            {/* Nav Links */}
              <ul className="flex gap-4 text-white">
                  <li>
                      <Link href={isHomePage ? "#home" : "/"} className="hover:text-green-800">Home</Link>
                  </li>
                  <li>
                      <Link href={isHomePage ? "#values" : "/#values"} className="hover:text-green-800">Values</Link>
                  </li>
                  <li>
                      <Link href="/about" className="hover:text-green-800">About</Link>
                  </li>
              </ul>
              <Link 
                className='cursor-pointer border-2 hover:border-green-800 border-white bg-transparent hover:bg-green-800 text-white hover:text-white px-4 py-1 rounded-full'
                href="https://www.facebook.com/FBCFIEdmonton" 
                target='_blank' 
                >
                Service
              </Link>
          </div>
      </nav>
  )
}