'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import './NavBar.css'


export const NavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname == '/';
  const [navBar, setNavBar] = useState(false);
  const [openHamburgerNav, setOpenHamburgerNav] = useState(false);

  const links = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'Values', href: isHomePage ? '#values' : '/#values' },
    { name: 'About', href: '/about' },
    { name: 'History', href: '/history' },
  ];

  const toggleHamburgerNav = () => {
    setOpenHamburgerNav(!openHamburgerNav)

    if(!openHamburgerNav) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  useEffect(() => {
    const addBackground = () => {
      if(window.scrollY >= 100) {
        setNavBar(true)
      }
      else {
        setNavBar(false)
      }
    }

    window.addEventListener('scroll', addBackground)

    return () => {
      window.removeEventListener('scroll', addBackground)
    }
  }, [])

  return (
      <nav className={navBar ? 'navbar active' : 'navbar'}>
          <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            {/* FBCFI Edmonton or FBCFI Logo */}
              <Link href="/" className="text-xl nav-text">
                FBCFI Edmonton
              </Link>

            {/* Nav Links */}
              <ul className="gap-4 text-base tracking-[6] hidden lg:flex">
                {links.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link href={link.href} className="nav-text">{link.name}</Link>
                    </li>
                  )
                })}
              </ul>
              <Link 
                className='hidden lg:flex nav-button cursor-pointer border-2 text-xl px-4 py-1 rounded-full transition-colors duration-300'
                href="https://www.facebook.com/FBCFIEdmonton" 
                target='_blank' 
                >
                Get Involved
              </Link>

              <div className='block lg:hidden z-100' onClick={toggleHamburgerNav}>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
              </div>
          </div>

          {/* Mobile Menu */}
          <div className={openHamburgerNav ? 'mobile-menu' : 'hidden'}>
            <ul className='text-center p-5 text-3xl flex flex-col gap-7'>
              {links.map((link) => {
                return (
                  <li key={link.name} className='p-3 border-b border-gray-300 w-50 mx-auto'>
                    <Link href={link.href} className="nav-text md:text-5xl" onClick={toggleHamburgerNav}>{link.name}</Link>
                  </li>
                )
              })}
              <li className='mx-auto mt-10'>
                <Link 
                  className='nav-button cursor-pointer border-2 px-6 py-2 rounded-full transition-colors duration-300 text-3xl md:text-5xl'
                  href="https://www.facebook.com/FBCFIEdmonton" 
                  target='_blank' 
                  onClick={toggleHamburgerNav}
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
      </nav>
  )
}