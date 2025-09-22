import React from 'react'
import Image from 'next/image'

export const Hero = ({ image, title, subTitle = '' }) => {
  return (
      <section id='home' className="relative h-screen flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Hero Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 ">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl max-w-2xl mx-auto">
            {subTitle}
          </p>
        </div>
      </section>
  )
}
