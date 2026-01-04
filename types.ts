import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface MaterialItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  address: string;
  phone: string;
  phoneDisplay: string;
  email: string;
}
