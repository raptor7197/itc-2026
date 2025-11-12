import React from 'react';
import AnimatedElement from './AnimatedElement';
import TimelineItem, { TimelineItemData } from './TimelineItem';

interface TimelineProps {
  items: TimelineItemData[];
  title?: string;
  subtitle?: string;
}

const Timeline: React.FC<TimelineProps> = ({ 
  items, 

}) => {
  return (
    <div className="relative pt-24 ">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Timeline */}
        <div className="relative">
          {/* Continuous timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 transform md:-translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="relative">
            {items.map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;