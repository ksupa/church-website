'use client'

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { milestones } from '../../data/milestones';

export const Timeline = () => {
  return (
    <div className='py-30 bg-gray-100'>

      <h2 className="font-semibold text-center text-5xl lg:text-6xl text-[#3D5A80] pb-10">Timeline</h2>
      <VerticalTimeline lineColor='#3D5A80'>
        {milestones.map((milestone) => {
          return (
            <VerticalTimelineElement
                key={milestone.id}
                date={milestone.date}
                className="vertical-timeline-element"
                dateClassName='text-black'
                contentStyle={{ background: '#3D5A80', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid  #3D5A80' }}
                iconStyle={{ background: '#3D5A80' }}>
                <h3 className="vertical-timeline-element-title text-2xl font-bold">{milestone.title}</h3>
                <p className="text-lg">{milestone.description}</p>
                  <img src={milestone.image ? milestone.image : 'https://placehold.co/600x400.png'} alt={milestone.title} className='mt-5 rounded-lg' />
                </VerticalTimelineElement> )
          })}
      </VerticalTimeline>
    </div>
  )
}
