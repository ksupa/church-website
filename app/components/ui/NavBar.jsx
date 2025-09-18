'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import './NavBar.css'


export const NavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname == '/';
  const [navBar, setNavBar] = useState(false);

  const addBackground = () => {
    if(window.scrollY >= 100) {
      setNavBar(true)
    }
    else {
      setNavBar(false)
    }
  }

  window.addEventListener('scroll', addBackground)

  return (
      <nav className={navBar ? 'navbar active' : 'navbar'}>
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            {/* FBCFI Edmonton or FBCFI Logo */}
              <Link href="/" className="text-white text-xl hover:text-green-800">
                FBCFI Edmonton
              </Link>

            {/* Nav Links */}
              <ul className="flex gap-4 text-white text-base tracking-[6]">
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
                className='cursor-pointer border-2 hover:border-green-800 border-white bg-transparent hover:bg-green-800 text-white hover:text-white text-xl px-4 py-1 rounded-full'
                href="https://www.facebook.com/FBCFIEdmonton" 
                target='_blank' 
                >
                Service
              </Link>
          </div>
      </nav>
  )
}