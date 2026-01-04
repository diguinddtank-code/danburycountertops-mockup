import { Ruler, Scissors, Hammer, CheckCircle } from 'lucide-react';
import { NavLink, MaterialItem, ProcessStep, ContactInfo } from './types';

export const BUSINESS_INFO: ContactInfo = {
  address: "208 White St Unit D, Danbury, CT 06810",
  phone: "+12036165290",
  phoneDisplay: "+1 (203) 616-5290",
  email: "info@danburycountertops.com"
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Materials', href: '#materials' },
  { name: 'Process', href: '#process' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'calacatta-pyreness',
    title: 'Calacatta Pyreness',
    description: 'Exquisite white marble with distinctive grey veining.',
    imageUrl: 'https://images.unsplash.com/photo-1595515106967-1b035a9bd050?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'carraca-white-dolimite',
    title: 'Carraca White Dolimite',
    description: 'A pure, resilient dolomite with soft grey accents.',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'organic-white',
    title: 'Organic White',
    description: 'Clean, modern, and perfectly consistent surface.',
    imageUrl: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'venetian-gold',
    title: 'Venetian Gold',
    description: 'Warm, golden tones that bring earthiness to any space.',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'calacatta-tuscani',
    title: 'Calacatta Tuscani',
    description: 'Bold patterning for a dramatic centerpiece.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'carraca-gold',
    title: 'Carraca Gold',
    description: 'The classic look of Carrara with a hint of warm gold.',
    imageUrl: 'https://images.unsplash.com/photo-1599690947515-5853b0ac7c27?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'statuario-venato',
    title: 'Statuario Venato',
    description: 'High-contrast grey veins on a bright white background.',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'calacatta-venetian',
    title: 'Calacatta Venetian',
    description: 'A perfect blend of luxury and natural movement.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'calacatta-rhino',
    title: 'Calacatta Rhino',
    description: 'Strong, thick veining for a powerful statement.',
    imageUrl: 'https://images.unsplash.com/photo-1601001815894-4bb6c88a1bdf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'explosion-white',
    title: 'Explosion White',
    description: 'Dynamic patterns that resemble abstract art.',
    imageUrl: 'https://images.unsplash.com/photo-1574937227419-7f415309605d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'calacatta-nero',
    title: 'Calacatta Nero',
    description: 'Dramatic black marble with striking white lightning veins.',
    imageUrl: 'https://images.unsplash.com/photo-1615800001859-99570df44671?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'venato-gold',
    title: 'Venato Gold',
    description: 'Elegant golden tracery throughout the stone.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'calacatta-black',
    title: 'Calacatta Black',
    description: 'Deep charcoal background with high-contrast features.',
    imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'armani-grey',
    title: 'Armani Grey',
    description: 'Sophisticated, understated grey for modern interiors.',
    imageUrl: 'https://images.unsplash.com/photo-1620626012761-d9574ca72350?q=80&w=800&auto=format&fit=crop'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We discuss your vision, select materials, and provide a transparent estimate.',
    icon: CheckCircle
  },
  {
    id: 2,
    title: 'Laser Templating',
    description: 'Advanced digital measurements ensure a perfect fit down to the millimeter.',
    icon: Ruler
  },
  {
    id: 3,
    title: 'Precision Cutting',
    description: 'Our fabrication facility cuts and polishes your stone with artisanal care.',
    icon: Scissors
  },
  {
    id: 4,
    title: 'Installation',
    description: 'Professional installation by our expert team, usually completed in one day.',
    icon: Hammer
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Danbury, CT",
    text: "Absolutely stunning work. The granite installation was flawless, and the team was incredibly professional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Romano",
    location: "Ridgefield, CT",
    text: "Best stone fabricators in Connecticut. They matched the veins perfectly on our waterfall island.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena G.",
    location: "Bethel, CT",
    text: "From the laser templating to the final install, everything was precise. My kitchen looks like a magazine.",
    rating: 5
  },
  {
    id: 4,
    name: "James Thorne",
    location: "Brookfield, CT",
    text: "Fair pricing for such high-end luxury work. The team left my house spotless.",
    rating: 5
  },
  {
    id: 5,
    name: "Patricia Wu",
    location: "Newtown, CT",
    text: "We love our new Quartz countertops. The turnaround time was faster than expected!",
    rating: 5
  }
];