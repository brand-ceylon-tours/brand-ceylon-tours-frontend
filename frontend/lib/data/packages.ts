export interface TourismPackage {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  region: string;
}

export const tourismPackages: TourismPackage[] = [
  {
    id: '1',
    title: 'Cultural Triangle Explorer',
    description: 'Discover the ancient wonders of Sri Lanka\'s Cultural Triangle, including Sigiriya Rock Fortress, Dambulla Cave Temple, and the ancient city of Anuradhapura.',
    duration: '5 Days / 4 Nights',
    price: 'From $450',
    image: '/images/cultural-triangle.jpg',
    highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Anuradhapura Ancient City', 'Polonnaruwa'],
    region: 'Central Province'
  },
  {
    id: '2',
    title: 'Tea Country & Hill Stations',
    description: 'Experience the cool climate and stunning landscapes of Sri Lanka\'s hill country, visit tea plantations, and enjoy scenic train rides through the mountains.',
    duration: '4 Days / 3 Nights',
    price: 'From $380',
    image: '/images/tea-country.jpg',
    highlights: ['Kandy', 'Nuwara Eliya', 'Tea Plantation Tours', 'Scenic Train Rides'],
    region: 'Central Highlands'
  },
  {
    id: '3',
    title: 'Wildlife Safari Adventure',
    description: 'Embark on an unforgettable wildlife safari in Yala National Park, home to leopards, elephants, and diverse bird species.',
    duration: '3 Days / 2 Nights',
    price: 'From $320',
    image: '/images/wildlife-safari.jpg',
    highlights: ['Yala National Park', 'Wildlife Safari', 'Bird Watching', 'Leopard Spotting'],
    region: 'Southern Province'
  },
  {
    id: '4',
    title: 'Beach Paradise - South Coast',
    description: 'Relax on pristine beaches, enjoy water sports, and explore coastal towns along Sri Lanka\'s beautiful southern coastline.',
    duration: '6 Days / 5 Nights',
    price: 'From $550',
    image: '/images/beach-paradise.jpg',
    highlights: ['Galle Fort', 'Mirissa Beach', 'Whale Watching', 'Water Sports'],
    region: 'Southern Province'
  },
  {
    id: '5',
    title: 'Spice Garden & Ayurveda Retreat',
    description: 'Immerse yourself in traditional Ayurveda treatments, visit spice gardens, and rejuvenate your mind and body.',
    duration: '4 Days / 3 Nights',
    price: 'From $400',
    image: '/images/ayurveda-retreat.jpg',
    highlights: ['Ayurveda Treatments', 'Spice Garden Tours', 'Yoga Sessions', 'Traditional Medicine'],
    region: 'Western Province'
  },
  {
    id: '6',
    title: 'Complete Island Tour',
    description: 'The ultimate Sri Lanka experience covering all major attractions from cultural sites to beaches, wildlife, and hill country.',
    duration: '10 Days / 9 Nights',
    price: 'From $1,200',
    image: '/images/complete-tour.jpg',
    highlights: ['All Major Attractions', 'Cultural Sites', 'Wildlife Safari', 'Beach Relaxation', 'Hill Country'],
    region: 'Island Wide'
  }
];

