import React from "react";
import { Hero } from "../components/Hero";
import aboutBanner from "../../assets/about-img.webp";

export default function AboutPage() {
  return (
    <Hero 
      image={aboutBanner} 
      title="About Us" 
      subTitle='Coming Soon'
    />
  );
}