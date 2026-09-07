export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'coffee' | 'main-dish' | 'drinks' | 'desserts';
  description?: string;
  longDescription?: string;
  rating?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'starter' | 'main-dish' | 'desserts' | 'drinks';
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  commentsCount: number;
  image: string;
  excerpt: string;
  content?: string[];
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}
