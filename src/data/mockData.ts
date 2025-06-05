import { Itinerary } from '../types';

export const mockItinerary: Itinerary = {
  id: 'itinerary-1',
  days: [
    {
      id: 'day-1',
      title: 'Day 1',
      activities: [
        {
          id: 'activity-1',
          name: 'India Gate',
          description: 'India Gate is a war memorial located in New Delhi, along the Rajpath. It is dedicated to the 82,000 soldiers, both Indian and British.',
          rating: 4.6,
          reviewCount: 281124,
          imageUrl: '/images/india-gate.jpg',
        },
        {
          id: 'activity-2',
          name: 'Red Fort',
          description: 'The Red Fort is a historical fort in the old Delhi area, on the banks of Yamuna.',
          rating: 4.5,
          reviewCount: 168729,
          imageUrl: '/images/red-fort.jpg',
        },
        {
          id: 'activity-3',
          name: 'Qutub Minar',
          description: 'Qutub Minar is a minaret or a victory tower located in the Qutub complex, a UNESCO World Heritage Site in Delhi\'s Mehrauli area.',
          rating: 4.5,
          reviewCount: 151556,
          imageUrl: '/images/qutub-minar.jpg',
        },
        {
          id: 'activity-4',
          name: 'Lotus Temple',
          description: 'Located in the national capital of New Delhi, the Lotus Temple is an edifice dedicated to the Baha\'i faith.',
          rating: 4.5,
          reviewCount: 67772,
          imageUrl: '/images/lotus-temple.jpg',
        },
        {
          id: 'activity-5',
          name: 'Humayun\'s tomb',
          description: 'Humayun\'s tomb is the final resting place of the Mughal Emperor Humayun.',
          rating: 4.5,
          reviewCount: 46024,
          imageUrl: '/images/humayun-tomb.jpg',
        },
      ],
    },
    // {
    //   id: 'day-2',
    //   title: 'Day 2',
    //   activities: [
    //     {
    //       id: 'activity-6',
    //       name: 'Akshardham Temple',
    //       description: 'Akshardham is a Hindu temple complex that displays millennia of traditional Hindu and Indian culture, spirituality, and architecture.',
    //       rating: 4.7,
    //       reviewCount: 98765,
    //       imageUrl: '/images/akshardham.jpg',
    //     },
    //     {
    //       id: 'activity-7',
    //       name: 'Chandni Chowk',
    //       description: 'One of the oldest and busiest markets in Old Delhi, known for its street food and shopping.',
    //       rating: 4.3,
    //       reviewCount: 112455,
    //       imageUrl: '/images/chandni-chowk.jpg',
    //     },
    //     {
    //       id: 'activity-8',
    //       name: 'Jantar Mantar',
    //       description: 'A collection of astronomical instruments built by Maharaja Jai Singh II of Jaipur in 1724.',
    //       rating: 4.2,
    //       reviewCount: 45678,
    //       imageUrl: '/images/jantar-mantar.jpg',
    //     },
    //   ],
    // },
  ],
};
