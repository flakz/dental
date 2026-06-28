// ponytail: service catalog. Edit this single file to add/rename/reorder services.

export interface Service {
  slug: string;
  name: string;
  short: string;       // 1-line for cards
  description: string; // 1-2 sentence summary for detail
  bullets: string[];   // what's included
  icon: string;        // lucide icon name
  startingPrice: string;
  category: 'care' | 'training' | 'transport' | 'farewell';
}

export const services: Service[] = [
  {
    slug: 'boarding',
    name: 'Home Pet Boarding',
    short: 'A real family home while you travel, never a kennel.',
    description:
      'Your pet stays in a verified host family\u2019s home. Same routines, same cuddles, plenty of walks and updates every day.',
    bullets: [
      'Verified host families and kennels',
            'Same feeding & walk routine',
      'Cage-free, supervised 24x7',
      'Real-time chat with the host',
    ],
    icon: 'Home',
    startingPrice: '₹499 / night',
    category: 'care',
  },
  {
    slug: 'grooming',
    name: 'Doorstep Pet Grooming',
    short: 'Bath, trim, nails, ears. Done at your home, stress-free.',
    description:
      'A certified groomer arrives at your door with a full mobile setup. Your pet stays calm, your home stays clean, and you get a fresh-smelling companion back in under 90 minutes.',
    bullets: [
      'Bath with hypoallergenic shampoo',
      'Breed-specific haircut or de-shed',
      'Nail trim, ear cleaning, paw balm',
      'Sanitary trim and pawdicure',
      'Tick & flea check',
    ],
    icon: 'Scissors',
    startingPrice: '₹999',
    category: 'care',
  },
  {
    slug: 'sitting',
    name: 'Pet Sitting',
    short: 'A trusted sitter at your home while you\u2019re away.',
    description:
      'A trained pet sitter visits your home on your schedule. Feeding, walks, playtime, mail, and a reassuring presence so your pet never has to leave familiar smells.',
    bullets: [
      'Visits from 30 min to overnight',
      'Walks, play & feeding per routine',
      'Mail, plants & light home care',
      'Photo updates after every visit',
      'Background-verified sitters',
    ],
    icon: 'Heart',
    startingPrice: '₹399 / visit',
    category: 'care',
  },
  {
    slug: 'training',
    name: 'Doorstep Dog Training',
    short: 'Certified trainers fix behaviour in your own space.',
    description:
      'One-on-one sessions in the environment your dog actually lives in. From basic commands to leash manners to anxiety, we tailor the plan to your dog\u2019s breed, age and energy.',
    bullets: [
      '1-on-1 sessions at your home',
      'Obedience, leash, socialisation',
      'Puppy, adolescent & adult plans',
      'Behaviour fix: biting, jumping, barking',
      'Trainer notes after every session',
    ],
    icon: 'GraduationCap',
    startingPrice: '₹1,499 / session',
    category: 'training',
  },
  {
    slug: 'walking',
    name: 'Dog Walking',
    short: 'Scheduled walks by trained, GPS-tracked walkers.',
    description:
      'Daily or one-time walks by verified walkers who know how to handle reactive, pull-y, or senior dogs. Each walk is GPS-tracked with a live report card at the end.',
    bullets: [
      '30-min or 60-min walks',
      'Live GPS route tracking',
      'Photo + report card after walk',
      'Same walker on request',
      'Senior & reactive-dog friendly',
    ],
    icon: 'Footprints',
    startingPrice: '₹299 / walk',
    category: 'care',
  },
  {
    slug: 'fresh-food',
    name: 'Dog Fresh Food',
    short: 'Vet-balanced home-cooked meals, delivered weekly.',
    description:
      'Human-grade, vet-formulated meals cooked fresh and portioned for your dog\u2019s breed, age and weight. No fillers, no mystery meat, just real food your dog will actually eat.',
    bullets: [
      'Vet-formulated recipes',
      'Portioned to your dog\u2019s profile',
      'Fresh, never frozen',
      'Subscribe weekly, pause anytime',
      'Free delivery across the city',
    ],
    icon: 'Utensils',
    startingPrice: '₹199 / meal',
    category: 'care',
  },
  {
    slug: 'taxi',
    name: 'Pet Taxi',
    short: 'Safe, AC cab for vet visits, airport drops, moves.',
    description:
      'A trained driver and a secured carrier pick up your pet, drive them safely to the vet, groomer, airport or new home, with live tracking and waiting time included.',
    bullets: [
      'AC, GPS-tracked vehicles',
      'Safe carriers & seatbelts',
      'Vet, airport, intercity moves',
      'Waiting time included',
      'Trained pet handlers',
    ],
    icon: 'Car',
    startingPrice: '₹499 / trip',
    category: 'transport',
  },
  {
    slug: 'funeral',
    name: 'Pet Funeral & Cremation',
    short: 'A dignified, gentle goodbye. Handled with care.',
    description:
      'When the time comes, we help you say goodbye with dignity. Home pickup, individual or communal cremation, and a keepsake urn, carried out with the respect your companion deserves.',
    bullets: [
      'Discreet home pickup',
      'Individual or communal cremation',
      'Wooden or ceramic keepsake urn',
      'Memorial paw print on request',
      'Compassionate, 24x7 support',
    ],
    icon: 'HandHeart',
    startingPrice: '₹4,999',
    category: 'farewell',
  },
];

export const categoryLabels: Record<Service['category'], string> = {
  care: 'Daily care',
  training: 'Training',
  transport: 'Transport',
  farewell: 'End of life',
};

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
