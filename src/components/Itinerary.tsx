import React, { useState, memo, useCallback } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import DayItinerary from './DayItinerary';
import { Itinerary as ItineraryType } from '../types';
import { mockItinerary } from '../data/mockData';

const Itinerary: React.FC = memo(() => {
  const [itinerary, setItinerary] = useState<ItineraryType>(mockItinerary);

  const handleDragStart = useCallback((start: any) => {
    // Only add a body class to indicate dragging state
    document.body.classList.add('is-dragging');
    // Don't manipulate the DOM elements directly - this causes positioning issues
  }, []);
  
  const handleDragUpdate = useCallback((update: any) => {
    // No direct DOM manipulation during drag - let react-beautiful-dnd handle it
    // This allows smooth cursor tracking
  }, []);
  
  const handleDragEnd = useCallback((result: DropResult) => {
    // Clean up any classes added during drag
    document.body.classList.remove('is-dragging');
    const elements = document.querySelectorAll('.dragging-item');
    elements.forEach(el => el.classList.remove('dragging-item'));
    
    const { destination, source } = result;

    // If there's no destination or if the item was dropped back in the same position
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
    
    // Find the day from which the activity is being moved
    const sourceDay = itinerary.days.find(day => day.id === source.droppableId);
    if (!sourceDay) return;

    // Create a new array of activities for the source day
    const newSourceActivities = Array.from(sourceDay.activities);
    
    // Remove the activity from its original position
    const [movedActivity] = newSourceActivities.splice(source.index, 1);

    // If the destination is in the same day
    if (destination.droppableId === source.droppableId) {
      // Insert the activity at the new position
      newSourceActivities.splice(destination.index, 0, movedActivity);
      
      // Update the itinerary state
      const newDays = itinerary.days.map(day => {
        if (day.id === source.droppableId) {
          return {
            ...day,
            activities: newSourceActivities,
          };
        }
        return day;
      });

      setItinerary({
        ...itinerary,
        days: newDays,
      });
    } else {
      // If the destination is a different day
      // Find the destination day
      const destinationDay = itinerary.days.find(day => day.id === destination.droppableId);
      if (!destinationDay) return;

      // Create a new array of activities for the destination day
      const newDestinationActivities = Array.from(destinationDay.activities);
      
      // Insert the activity at the new position in the destination day
      newDestinationActivities.splice(destination.index, 0, movedActivity);

      // Update the itinerary state
      const newDays = itinerary.days.map(day => {
        if (day.id === source.droppableId) {
          return {
            ...day,
            activities: newSourceActivities,
          };
        }
        if (day.id === destination.droppableId) {
          return {
            ...day,
            activities: newDestinationActivities,
          };
        }
        return day;
      });

      setItinerary({
        ...itinerary,
        days: newDays,
      });
    }
  }, [itinerary]);

  return (
    <div className="container py-4">
      <header className="d-flex align-items-center mb-4 py-4">
        <h1 className="fs-4 fw-bold text-danger m-0">
          YZZ TRAVEL
        </h1>
      </header>
      
      <div className="mb-4">
        <h2 className="fs-2 fw-bold text-dark mb-1">Itinerary</h2>
        <p className="text-secondary fw-medium">Day</p>
      </div>
      
      <DragDropContext 
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
      >
        <div className="d-flex flex-column ">
          {itinerary.days.map(day => (
            <DayItinerary key={day.id} day={day} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
});

export default Itinerary;