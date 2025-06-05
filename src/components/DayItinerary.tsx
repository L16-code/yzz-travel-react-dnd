import React, { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ActivityCard from './ActivityCard';
import { ItineraryDay } from '../types';
import '../styles/drag-drop.css';

interface DayItineraryProps {
  day: ItineraryDay;
}

const DayItinerary: React.FC<DayItineraryProps> = memo(({ day }) => {
  // No need to extract day number as it's handled in the Itinerary component now
  
  return (
    <div className="card mb-4 border-0">
      {/* Day header removed as it's now handled in the Itinerary component */}
      
      <Droppable droppableId={day.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`p-0 min-vh-25 ${snapshot.isDraggingOver ? 'bg-light' : 'bg-white'} transition droppable-container`}
            style={{
              minHeight: '100px', 
              position: 'relative',
              transition: 'background-color 0.2s ease',
              padding: snapshot.isDraggingOver ? '10px 0' : '0',
            }}
          >
            {day.activities.map((activity, index) => (
              <ActivityCard 
                key={activity.id} 
                activity={activity} 
                index={index} 
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
});

export default DayItinerary;
