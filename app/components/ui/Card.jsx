import React from "react";
import Image from "next/image";

export const Card = ({ image, title, description, date }) => {
  return (
    <div>
      <div className='bg-white rounded shadow-lg overflow-hidden p-5 fade-in h-full'>
        <Image
          src={image}
          width={600}
          height={400}
          alt='Event Image'
          className='rounded'
        />
        <div>
          <h3 className='font-semibold text-2xl text-black mt-3'>{title}</h3>
          <p className='mt-3 font-semibold text-black'>{date}</p>
          <p className='mt-3 text-black'>{description}</p>
        </div>
      </div>
    </div>
  );
};
