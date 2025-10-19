import React from 'react';
import AnimatedElement from './AnimatedElement';

export interface TimelineItemData {
  id: string;
  year: string;
  title: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const { year, title } = item;
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex items-center relative mb-24 w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Center dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full z-10">
        <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${
        isEven 
          ? 'md:pr-16 md:text-right' 
          : 'md:pl-16 md:text-left'
      }`}>
        <AnimatedElement 
          animation={isEven ? "slide-in-left" : "slide-in-right"} 
          className="group"
        >
          <span className="inline-block text-blue-400 text-lg font-semibold mb-2">
            {year}
          </span>
          <h3 className="text-2xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">{title}</h3>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default TimelineItem;