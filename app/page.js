import Image from "next/image";
import banner from "../assets/banner-img.webp";
import missionImg from "../assets/mission-img.webp";
import Link from "next/link";
import { Card } from "./components/ui/Card";
import { Hero } from "./components/Hero";

const events = [
  {
    image: 'https://placehold.co/600x400/png',
    title: 'Event 1',
    description: 'Description for Event 1',
  },
  {
    image: 'https://placehold.co/600x400/png',
    title: 'Event 2',
    description: 'Description for Event 2',
  },
  {
    image: 'https://placehold.co/600x400/png',
    title: 'Event 3',
    description: 'Description for Event 3',
  }
]

export default function Home() {
  return (
    <>
      <Hero 
        image={banner}
        title="FBCFI Edmonton"
        subTitle="&quot;Then you will know the truth, and the truth will set you free.&quot; John 8:32"
      />

      {/* Values */}
      <section id="values" className="py-10 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto pb-10 mb-10 grid md:grid-cols-2 gap-10">
          <div className="px-5 flex flex-col h-full justify-between fade-in">
            <div>
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-6xl pb-5 text-green-900 ">Our Mission</h2>
              <p className="text-black text-lg md:text-xl">
                FBCFI is mandated to organize preachings, teachings, crusades, Gospel concerts and various ministries to plant churches and train leaders and workers to serve and build the Kingdom of God.
              </p>
            </div>
              <Image
                src={missionImg}
                alt="Woman at church with her hand raised"
                className="mt-10 rounded-lg shadow-lg"
                width={1200}
                height={800}
              />
          </div>
          <div className="px-5 flex flex-col h-full justify-between fade-in"> 
            <div>
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-6xl pb-5 text-green-900 ">Our Vision</h2>
              <p className="text-black text-lg md:text-xl">
                FBCFI envision to proclaim, promote and advocate the full Gospel of Jesus Christ throughout the Philippines and Overseas by whatever means, form or manner in accordance with the Word of God and leading of the Holy Spirit.
              </p>
            </div>
              <Image
                src="https://placehold.net/600x400.png"
                width={1200}
                height={800}
                alt="Placeholder image"
                className="mt-10 rounded-lg shadow-lg"
              />
          </div>
        </div>

        <Link
          className='cursor-pointer border-2 border-green-800 bg-transparent hover:bg-green-800 text-xl text-green-800 hover:text-white font-semibold text-center py-5 w-50 md:w-100 rounded-full mx-auto block transition-colors duration-300'
          href="https://freebelieversinchrist.org/our-values"
          target='_blank'
        >
          Learn More
        </Link>
      </section>

      {/* Events */}
      <section className="bg-gray-100 py-10 md:py-20">
        <h2 className="font-semibold text-center text-5xl lg:text-6xl text-green-800">Events</h2>
        <div className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-10">
          {events.map((event, index) => {
            return (
              <Card 
                key={index}
                image={event.image}
                title={event.title}
                description={event.description}
              />
            )
          })}
        </div>
      </section>
    </>
  );
}