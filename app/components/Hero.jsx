"use client";

import React from "react";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Hero = ({ image, title, subTitle1 = "", subTitle2 = "" }) => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#context-1, #context-2, #context-3"], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
      });
    }, comp); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center'>
      <Image src={image} alt={title} fill className='object-cover' />

      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Hero Content */}
      <div ref={comp} className='relative text-white px-4'>
        <p id='context-1' className='text-lg md:text-3xl'>
          {subTitle1}
        </p>
        <h1 id='context-2' className='text-6xl md:text-8xl font-bold '>
          {title}
        </h1>
        <p
          id='context-3'
          className='text-lg md:text-3xl text-start md:text-end'>
          {subTitle2}
        </p>
      </div>
    </section>
  );
};
