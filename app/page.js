import Image from "next/image";
import banner from "../assets/banner.webp";

export default function Home() {
  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center">
        <Image
          src={banner}
          alt="FBCFI Edmonton church"
          fill
          className="object-cover"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Hero Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 heading-text">
            FBCFI Edmonton
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl max-w-2xl mx-auto">
            "Then you will know the truth, and the truth will set you free."<br /> 
            John 8:32
          </p>
        </div>
      </section>

      <section id="about" className="py-15 bg-gray-100">
        <div className="max-w-7xl mx-auto pb-10 grid grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl pb-10 text-green-800 heading-text">Our Mission</h2>
            <p className="text-black text-lg md:text-xl">
              FBCFI is mandated to organize preachings, teachings, crusades, Gospel concerts and various ministries to plant churches and train leaders and workers to serve and build the Kingdom of God.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pb-10 grid grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl pb-10 text-green-800 heading-text">Our Vision</h2>
            <p className="text-black text-lg md:text-xl">
              FBCFI envision to proclaim, promote and advocate the full Gospel of Jesus Christ throughout the Philippines and Overseas by whatever means, form or manner in accordance with teh Word of God and leading of the Holy Spirit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}