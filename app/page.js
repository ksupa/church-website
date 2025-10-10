"use client";

import Image from "next/image";
import banner from "../assets/banner-img.webp";
import missionImg from "../assets/mission-img.webp";
import visionImg from "../assets/vision-img.webp";
import Link from "next/link";
import { Card } from "./components/ui/Card";
import { Hero } from "./components/Hero";
import { events } from "./data/events";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const verseRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

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

  // Mission animation (text from left, image from right)
  useGSAP(
    () => {
      gsap.from("#mission-text", {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from("#mission-img", {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: missionRef }
  );

  // Vision animation (text from right, image from left)
  useGSAP(
    () => {
      gsap.from("#vision-text", {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from("#vision-img", {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: visionRef }
  );

  return (
    <>
      <Hero
        image={banner}
        subTitle1='Come as you are'
        title="You're Welcome Here"
        subTitle2='Grow in faith and community'
      />

      <div ref={verseRef} className='bg-gray-100 p-15 md:p-20'>
        <p
          id='verse-text'
          className='text-xl md:text-3xl text-center text-gray-700 font-semibold'>
          &quot;Then you will know the truth, and the truth will set you
          free.&quot;
          <br /> - John 8:32
        </p>
      </div>

      <div className='bg-gray-100 pb-3'>
        <div className='max-w-5xl mx-auto px-20 '>
          <hr className='border-t-2 border-gray-300' />
        </div>
      </div>

      {/* Values */}
      <section id='values' className='py-10 bg-gray-100 overflow-x-hidden'>
        <div className='max-w-375 mx-auto pb-10 mb-10'>
          <div
            ref={missionRef}
            className='px-5 grid lg:grid-cols-2 gap-4 mb-10 lg:mb-5 h-full'>
            <div id='mission-text' className='content-center'>
              <h2 className='font-semibold text-3xl md:text-4xl lg:text-6xl pb-5 text-green-900 '>
                Our Mission
              </h2>
              <p className='text-black text-lg md:text-xl'>
                FBCFI is mandated to organize preachings, teachings, crusades,
                Gospel concerts and various ministries to plant churches and
                train leaders and workers to serve and build the Kingdom of God.
              </p>
            </div>
            <Image
              id='mission-img'
              src={missionImg}
              alt='Woman at church with her hand raised.'
              className='mt-10 rounded-lg shadow-lg'
              width={800}
              height={800}
            />
          </div>
          <div
            ref={visionRef}
            className='px-5 grid lg:grid-cols-2 gap-4 h-full justify-between'>
            <div id='vision-text' className='content-center lg:order-2'>
              <h2 className='font-semibold text-end text-3xl md:text-4xl lg:text-6xl pb-5 text-green-900 '>
                Our Vision
              </h2>
              <p className='text-black text-lg md:text-xl text-end'>
                FBCFI envision to proclaim, promote and advocate the full Gospel
                of Jesus Christ throughout the Philippines and Overseas by
                whatever means, form or manner in accordance with the Word of
                God and leading of the Holy Spirit.
              </p>
            </div>
            <Image
              id='vision-img'
              src={visionImg}
              width={800}
              height={800}
              alt='Pastora with her hand out to a crowd of people in a church.'
              className='mt-10 rounded-lg shadow-lg lg:order-1'
            />
          </div>
        </div>

        <Link
          className='cursor-pointer border-2 border-green-800 bg-transparent hover:bg-green-800 text-xl text-green-800 hover:text-white font-semibold text-center py-5 w-50 md:w-100 rounded-full mx-auto block transition-colors duration-300'
          href='https://freebelieversinchrist.org/our-values'
          target='_blank'>
          Learn More
        </Link>
      </section>

      {/* Events */}
      <section className='bg-gray-100 py-10 px-5'>
        <h2 className='font-semibold text-center text-5xl lg:text-6xl text-green-800'>
          Events
        </h2>
        <div className='max-w-400 mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {events.map((event, index) => {
            return (
              <Card
                key={index}
                image={event.image}
                title={event.title}
                date={event.date}
                description={event.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
