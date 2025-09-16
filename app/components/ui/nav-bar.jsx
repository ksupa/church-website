import Link from 'next/link'
import React from 'react'


export const NavBar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full z-10 heading-text font-semibold">
            <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-md md:text-xl">
              {/* FBCFI Edmonton or FBCFI Logo */}
                <Link href="#home" className="text-gray-700 hover:text-green-800">
                  FBCFI Edmonton
                </Link>

                <ul className="flex gap-4 text-gray-700">
                    <li>
                        <Link href="#home" className="hover:text-green-800">Home</Link>
                    </li>
                    <li>
                        <Link href="#about" className="hover:text-green-800">About</Link>
                    </li>
                </ul>
                <button className='cursor-pointer border-2 hover:border-green-800 border-black bg-white hover:bg-green-800 text-black hover:text-white px-4 py-1 rounded-full'>
                  Service
                </button>
            </div>
        </nav>
    )
}