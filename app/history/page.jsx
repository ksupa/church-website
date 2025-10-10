import React from "react";
import { Hero } from "../components/Hero";
import historyBanner from "../../assets/history-img.webp";
import { Timeline } from "../components/ui/Timeline";

export default function HistoryPage() {
  return (
    <>
      <Hero image={historyBanner} title='Our History' />

      {/* <Timeline /> */}
    </>
  );
}
