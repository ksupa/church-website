"use client";

import React from "react";
import { Hero } from "../components/Hero";
import aboutBanner from "../../assets/about-img.webp";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { leaders } from "../data/leaders";
import { pastors } from "../data/pastors";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const verseRef = useRef(null);

  useGSAP(
    () => {
      gsap.from("#verse-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: "#verse-text",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: verseRef }
  );

  return (
    <>
      <Hero image={aboutBanner} title='About Us' subTitle='Coming Soon' />

      <div className='bg-gray-100'>
        <div ref={verseRef} className='p-15 md:p-20'>
          <p
            id='verse-text'
            className='text-xl md:text-3xl text-center text-gray-700 font-semibold'>
            &quot;Whatever you do, work at it with all your heart, as working
            for the Lord, not for human masters,&quot;
            <br /> - Colossions 3:23
          </p>
        </div>

        {/* Divider */}
        <div className='bg-gray-100 pb-3'>
          <div className='max-w-5xl mx-auto px-20 '>
            <hr className='border-t-2 border-gray-300' />
          </div>
        </div>

        {/* Pastors & Leaders */}
        <section className='text-black mx-auto max-w-375 py-10'>
          <h2 className='text-center font-semibold text-3xl md:text-4xl lg:text-6xl pb-5 text-green-900'>
            Pastors
          </h2>
          <div className='grid md:grid-cols-2 pb-5'>
            {pastors.map((pastor, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col items-center text-center p-10'>
                  <img
                    src={pastor.photo}
                    alt={pastor.name}
                    className='w-75 h-75 object-cover rounded mb-4'
                  />
                  <h3 className='text-xl md:text-3xl'>{pastor.name}</h3>
                  <p className='text-lg md:text-xl'>{pastor.role}</p>
                  <p>{pastor.bio}</p>
                </div>
              );
            })}
          </div>

          <h2 className='text-center font-semibold text-3xl md:text-4xl lg:text-6xl pb-5 text-green-900'>
            Leaders
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {leaders.map((leader, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-col items-center text-center p-10'>
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className='w-75 h-75 object-cover rounded mb-4'
                  />
                  <h3 className='text-xl md:text-3xl'>{leader.name}</h3>
                  <p className='text-lg md:text-xl'>{leader.role}</p>
                  <p>{leader.bio}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
