# YZZ Travel - Interactive Travel Itinerary Builder

![YZZ Travel](https://img.shields.io/badge/YZZ%20Travel-Itinerary%20Builder-0d6efd)
![React](https://img.shields.io/badge/React-17.0.2-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4.2-3178C6)
![react-beautiful-dnd](https://img.shields.io/badge/react--beautiful--dnd-13.1.1-00A3E0)

YZZ Travel is an interactive travel itinerary builder that allows users to organize their travel activities by dragging and dropping them between different days. The application provides a smooth, intuitive user experience for planning trips, with responsive design for both desktop and mobile interfaces.

## Features

- **Drag and Drop Interface**: Seamlessly move activities between different days of your itinerary
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **Interactive Cards**: Activity cards with images, ratings, and descriptions
- **Mobile-Friendly UI**: Special mobile menu with three dots for actions
- **Visual Feedback**: Enhanced styling during drag operations for better user experience
- **Smooth Animations**: Carefully tuned transitions for natural feeling interactions

## Technology Stack

- **Frontend**: React with TypeScript
- **Drag & Drop**: react-beautiful-dnd
- **Styling**: Bootstrap 5 with custom CSS
- **State Management**: React Hooks (useState, useCallback)
- **Asset Management**: SVGs and dynamic image loading

## Responsive Experience

The application is fully responsive with different UI patterns for mobile and desktop:

- **Desktop**: Full view with all action buttons visible
- **Mobile**: Streamlined view with a three-dots menu for actions
- **Touch Support**: Enhanced touch handling for mobile drag and drop operations

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/L16-code/yzz-travel-react-dnd.git
cd yzz-travel
```

2. Install dependencies:
```bash
npm install
# or with yarn
yarn install
```

3. Start the development server:
```bash
npm start
# or with yarn
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

## Project Structure

```
src/
├── components/         # React components
│   ├── ActivityCard.tsx  # Draggable activity card
│   ├── DayItinerary.tsx  # Container for a single day
│   └── Itinerary.tsx     # Main component with drag-drop context
├── data/              # Mock data
│   └── mockData.ts      # Sample itinerary data
├── styles/            # CSS styles
│   └── drag-drop.css    # Styles for drag and drop functionality
├── types/             # TypeScript type definitions
│   └── index.ts         # Activity and itinerary types
└── App.tsx            # Main application component
```

## Key Components

### ActivityCard

A draggable card component that displays activity details with different layouts for desktop and mobile views.

Features:
- Image display with fallback
- Rating and review information
- Responsive layout
- Action buttons (desktop) or three-dots menu (mobile)
- Custom drag styles for improved user experience

### DayItinerary

A container component that represents a single day in the itinerary and serves as a droppable zone for activities.

Features:
- Visual feedback when an item is being dragged over
- Proper placeholder styling during drag operations
- List of activity cards with proper spacing

### Itinerary

The main component that manages the drag and drop context and handles state changes when activities are moved.

Features:
- DragDropContext provider from react-beautiful-dnd
- Drag event handlers (start, update, end)
- State management for the itinerary data
- Reordering logic for activities within and between days

## Drag and Drop Implementation

The drag and drop functionality is implemented using `react-beautiful-dnd` with careful attention to user experience details:

- **Hardware Acceleration**: Using `will-change: transform` for smoother animations
- **Natural Resistance**: Slight resistance (95% of movement) during drag for more natural feel
- **Visual Feedback**: Shadow effects and opacity changes during drag operations
- **Mobile Optimizations**: Touch event handling and mobile-specific styles
- **Drop Animation**: Carefully tuned animation timing for quick but satisfying drops

### Mobile-Specific Considerations

The mobile implementation includes special handling for touch events and a custom menu system:

- Preventing scroll interference during drag operations
- Using appropriate touch-action properties for iOS Safari compatibility
- Dropdown menu for actions to keep the UI clean on small screens
- Text truncation to handle smaller screen sizes

## State Management

The application uses React's built-in state management with useState and useCallback hooks. The itinerary data follows this structure:

```typescript
interface Itinerary {
  days: {
    id: string;
    date: string;
    activities: Activity[];
  }[];
}

interface Activity {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  // other properties...
}
```

## Available Scripts

- `npm start`: Run the development server
- `npm test`: Launch the test runner
- `npm run build`: Build the app for production
- `npm run eject`: Eject from Create React App

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) - For the drag and drop functionality
- [Bootstrap](https://getbootstrap.com/) - For responsive design components
- [Unsplash](https://unsplash.com) - For placeholder activity images

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
