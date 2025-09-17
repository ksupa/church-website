import React from 'react'
import Image from 'next/image'

export const Card = ({ image, title, description }) => {
  return (
    <div>
      <div className='bg-white rounded shadow-lg overflow-hidden p-2'>
        <Image 
          src={image}
          width={600}
          height={400}
          alt='Event Image'
        />
        <div>
          <h3 className='text-3xl text-black mt-3'>{title}</h3>
          <p className='mt-3 text-black'>{description}</p>
        </div>
      </div>
    </div>
  )
}
