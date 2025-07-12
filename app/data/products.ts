export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  /**
   * More detailed information about the product that is displayed on the detail
   * page. This should provide shoppers with extra context and selling points.
   */
  details: string;
  /** Category name used on the detail page */
  category: string;
  /** Product rating from 0 to 5 */
  rating: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Stylish Shoes",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=60",
    description:
      "Comfortable and stylish shoes perfect for any occasion.",
    details:
      "These shoes are crafted from premium leather and feature a cushioned sole for all-day comfort.",
    category: "Footwear",
    rating: 4.5,

  },
  {
    id: 2,
    name: "Elegant Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1518544804389-9f7ac5d513c8?auto=format&fit=crop&w=800&q=60",
    description:
      "A sleek watch that adds a touch of sophistication to your outfit.",
    details:
      "Features a stainless steel case, genuine leather strap and water resistance up to 50 meters.",
    category: "Accessories",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Comfy Headphones",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=800&q=60",
    description:
      "Experience high-quality sound with these over-ear headphones.",
    details:
      "Wireless headphones offering noise isolation, Bluetooth connectivity and a 20-hour battery life.",
    category: "Electronics",
    rating: 4.2,
  },
];
