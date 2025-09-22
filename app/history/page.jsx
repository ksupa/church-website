import React from 'react';
import { Hero } from '../components/Hero';
import historyBanner from '../../assets/history-img.webp';

export default function HistoryPage() {
  return (
    <Hero 
      image={historyBanner} 
      title="Our History" 
      subTitle='Coming Soon'
    />
  )
}
