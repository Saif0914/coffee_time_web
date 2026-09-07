import { Product, MenuItem, BlogPost, Testimonial } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'coffee-1',
    name: 'Coffee Capuccino',
    price: 5.90,
    image: 'images/menu-1.jpg',
    category: 'coffee',
    description: 'A small river named Duden flows by their place and supplies',
    longDescription: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
  },
  {
    id: 'coffee-2',
    name: 'Creamy Latte Coffee',
    price: 4.90,
    image: 'images/menu-2.jpg',
    category: 'coffee',
    description: 'A small river named Duden flows by their place and supplies',
    longDescription: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. On her way she met a copy.'
  },
  {
    id: 'coffee-3',
    name: 'Americano Coffee',
    price: 5.90,
    image: 'images/menu-3.jpg',
    category: 'coffee',
    description: 'A small river named Duden flows by their place and supplies',
    longDescription: 'Freshly pulled espresso topped with hot mountain spring water for a rich, aromatic aroma.'
  },
  {
    id: 'coffee-4',
    name: 'Espresso Romano',
    price: 5.90,
    image: 'images/menu-4.jpg',
    category: 'coffee',
    description: 'A small river named Duden flows by their place and supplies',
    longDescription: 'Single origin bold roast served with a delicate lemon rind twist to elevate the crema.'
  },
  // Main dishes
  {
    id: 'dish-1',
    name: 'Grilled Ribs Beef',
    price: 15.70,
    image: 'images/dish-2.jpg',
    category: 'main-dish',
    description: 'Far far away, behind the word mountains, far from the countries',
    longDescription: 'Tender slow-smoked beef ribs glazed with our signature espresso barbecue glaze.'
  },
  {
    id: 'dish-2',
    name: 'Grilled Beef Steak',
    price: 20.00,
    image: 'images/dish-1.jpg',
    category: 'main-dish',
    description: 'Far far away, behind the word mountains, far from the countries',
    longDescription: 'Prime cut grilled steak seasoned with garden herbs and served with rosemary potatoes.'
  },
  {
    id: 'dish-3',
    name: 'Chicken Curry Special',
    price: 18.50,
    image: 'images/dish-4.jpg',
    category: 'main-dish',
    description: 'Far far away, behind the word mountains, far from the countries',
    longDescription: 'Creamy simmered chicken breast in yellow mild curry with jasmine rice.'
  },
  {
    id: 'dish-4',
    name: 'Sea Trout Delight',
    price: 49.91,
    image: 'images/dish-5.jpg',
    category: 'main-dish',
    description: 'Far far away, behind the word mountains, far from the countries',
    longDescription: 'Pan-seared ocean trout with lemon caper reduction and steamed seasonal greens.'
  },
  // Drinks
  {
    id: 'drink-1',
    name: 'Cold Brew Iced Coffee',
    price: 4.50,
    image: 'images/drink-1.jpg',
    category: 'drinks',
    description: 'Steeped for 24 hours in cold filtered spring water',
    longDescription: 'Silky smooth slow cold brewed roast served over crystal clear ice.'
  },
  {
    id: 'drink-2',
    name: 'Iced Matcha Green Tea',
    price: 5.00,
    image: 'images/drink-2.jpg',
    category: 'drinks',
    description: 'Ceremonial grade matcha whisked with oat milk and honey',
    longDescription: 'Refreshing antioxidant boost paired with wholesome oat milk.'
  },
  {
    id: 'drink-3',
    name: 'Berry Fruit Smoothie',
    price: 6.20,
    image: 'images/drink-3.jpg',
    category: 'drinks',
    description: 'Blend of strawberries, blueberries, raspberries and yogurt',
    longDescription: 'Vibrant chilled smoothie packed with freshly harvested farm berries.'
  },
  {
    id: 'drink-4',
    name: 'Citrus Mint Refresher',
    price: 4.00,
    image: 'images/drink-4.jpg',
    category: 'drinks',
    description: 'Fresh squeezed lime, crushed mint leaves and sparkling soda',
    longDescription: 'Crisp, sparkling and rejuvenating mocktail served with crushed mint.'
  },
  // Desserts
  {
    id: 'dessert-1',
    name: 'Tiramisu Classico',
    price: 7.50,
    image: 'images/dessert-1.jpg',
    category: 'desserts',
    description: 'Espresso soaked ladyfingers layered with mascarpone cream',
    longDescription: 'Authentic Italian recipe dusted with bittersweet Dutch cocoa.'
  },
  {
    id: 'dessert-2',
    name: 'Chocolate Lava Cake',
    price: 8.00,
    image: 'images/dessert-2.jpg',
    category: 'desserts',
    description: 'Warm chocolate gateau with a molten ganache center',
    longDescription: 'Rich dark chocolate cake served warm with vanilla bean gelato.'
  },
  {
    id: 'dessert-3',
    name: 'Caramel Cheesecake',
    price: 6.80,
    image: 'images/dessert-3.jpg',
    category: 'desserts',
    description: 'New York style cheesecake drizzled with salted caramel',
    longDescription: 'Velvety cream cheese baked on a crisp graham cracker crust.'
  },
  {
    id: 'dessert-4',
    name: 'Strawberry Pavlova',
    price: 7.20,
    image: 'images/dessert-4.jpg',
    category: 'desserts',
    description: 'Crisp meringue nest filled with whipped cream and berries',
    longDescription: 'Airy crisp meringue shell paired with Chantilly cream and glaze.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Starter
  {
    id: 'm-s-1',
    name: 'Cornish - Mackerel',
    price: 20.00,
    image: 'images/dish-1.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'starter'
  },
  {
    id: 'm-s-2',
    name: 'Roasted Steak',
    price: 29.00,
    image: 'images/dish-2.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'starter'
  },
  {
    id: 'm-s-3',
    name: 'Seasonal Soup',
    price: 20.00,
    image: 'images/dish-3.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'starter'
  },
  {
    id: 'm-s-4',
    name: 'Chicken Curry',
    price: 20.00,
    image: 'images/dish-4.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'starter'
  },
  // Main Dish
  {
    id: 'm-m-1',
    name: 'Sea Trout',
    price: 49.91,
    image: 'images/dish-5.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'main-dish'
  },
  {
    id: 'm-m-2',
    name: 'Roasted Beef',
    price: 20.00,
    image: 'images/dish-6.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'main-dish'
  },
  {
    id: 'm-m-3',
    name: 'Butter Fried Chicken',
    price: 20.00,
    image: 'images/dish-7.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'main-dish'
  },
  {
    id: 'm-m-4',
    name: 'Chiken Filet',
    price: 20.00,
    image: 'images/dish-8.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'main-dish'
  },
  // Desserts
  {
    id: 'm-d-1',
    name: 'Cornish - Mackerel',
    price: 20.00,
    image: 'images/dessert-1.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'desserts'
  },
  {
    id: 'm-d-2',
    name: 'Roasted Steak',
    price: 29.00,
    image: 'images/dessert-2.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'desserts'
  },
  {
    id: 'm-d-3',
    name: 'Seasonal Soup',
    price: 20.00,
    image: 'images/dessert-3.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'desserts'
  },
  {
    id: 'm-d-4',
    name: 'Chicken Curry',
    price: 20.00,
    image: 'images/dessert-4.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'desserts'
  },
  // Drinks
  {
    id: 'm-dr-1',
    name: 'Sea Trout Coffee Blend',
    price: 49.91,
    image: 'images/drink-5.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'drinks'
  },
  {
    id: 'm-dr-2',
    name: 'Roasted Beef Cold Brew',
    price: 20.00,
    image: 'images/drink-6.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'drinks'
  },
  {
    id: 'm-dr-3',
    name: 'Butter Fried Herbal Tea',
    price: 20.00,
    image: 'images/drink-7.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'drinks'
  },
  {
    id: 'm-dr-4',
    name: 'Chiken Filet Espresso',
    price: 20.00,
    image: 'images/drink-8.jpg',
    description: 'A small river named Duden flows by their place and supplies',
    category: 'drinks'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Coffee Testing Day',
    date: 'Sept 28, 2018',
    author: 'Admin',
    commentsCount: 3,
    image: 'images/image_1.jpg',
    excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    id: '2',
    title: 'Coffee Roasting Art',
    date: 'Sept 28, 2018',
    author: 'Admin',
    commentsCount: 3,
    image: 'images/image_2.jpg',
    excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    id: '3',
    title: 'Espresso Machine Mastery',
    date: 'Sept 28, 2018',
    author: 'Admin',
    commentsCount: 3,
    image: 'images/image_3.jpg',
    excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    id: '4',
    title: 'Beans from Highland Valleys',
    date: 'Sept 28, 2018',
    author: 'Admin',
    commentsCount: 3,
    image: 'images/image_4.jpg',
    excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    id: '5',
    title: 'Cold Brew Brewing Secrets',
    date: 'Sept 28, 2018',
    author: 'Admin',
    commentsCount: 3,
    image: 'images/image_5.jpg',
    excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    id: '6',
    title: 'Coffee Pairing with Gourmet Desserts',
    date: 'Sept 28, 2018',
    author: 'Admin',
    commentsCount: 3,
    image: 'images/image_6.jpg',
    excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Louise Kelly',
    role: 'Illustrator Designer',
    quote: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    image: 'images/person_2.jpg'
  },
  {
    id: 't-2',
    name: 'Mark Scott',
    role: 'Food Critic',
    quote: 'The aroma when you step into Coffee Blend is incomparable. From roast consistency to table service, they have perfected every single element of the specialty coffee experience.',
    image: 'images/person_3.jpg'
  },
  {
    id: 't-3',
    name: 'Roger Adams',
    role: 'Coffee Sommelier',
    quote: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'images/person_4.jpg'
  }
];
