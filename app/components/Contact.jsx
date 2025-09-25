import React from "react";
import logo from "../../assets/logo.webp";
import Image from "next/image";

export const Contact = () => {
  return (
    <footer className='pt-15 bg-white'>
      <h2 className='font-semibold text-center text-4xl md:text-6xl text-green-800'>
        Come And Be Blessed
      </h2>
      <div className='max-w-7xl mx-auto justify-center px-5 py-5 grid md:grid-cols-2'>
        <Image
          src={logo}
          width={300}
          height={300}
          alt='FBCFI Logo'
          className='mx-auto'
        />

        {/* Contact & Links */}
        <div className='py-0 sm:py-10 text-black h-full mx-auto grid sm:grid-cols-2 gap-y-10 gap-x-0 sm:gap-x-20 sm:gap-y-0'>
          <div>
            <h3 className='font-semibold text-xl pb-3'>Contact</h3>
            <address className='text-black text-xl'>
              0000 123rd Street NW <br />
              Edmonton, Alberta <br />
              123-1234-1234
            </address>
          </div>
          <div>
            <h3 className='font-semibold text-xl pb-3'>Social Media</h3>
            <ul className='text-xl'>
              <li>
                <a
                  href='https://www.facebook.com/FBCFIEdmonton'
                  target='_blank'>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/@fbcfiedmonton5323'
                  target='_blank'>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='w-full bg-black mt-3'>
        <p className='text-center px-2 italic text-sm sm:text-base'>
          Very truly I tell you, whoever believes in me will do the works I have
          been doing, and they will do even greater things than these, because I
          am going to the Father. - John 14:12
        </p>
      </div>
    </footer>
  );
};
