export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
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
  },
  {
    id: 2,
    name: "Elegant Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1518544804389-9f7ac5d513c8?auto=format&fit=crop&w=800&q=60",
    description:
      "A sleek watch that adds a touch of sophistication to your outfit.",
  },
  {
    id: 3,
    name: "Comfy Headphones",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=800&q=60",
    description:
      "Experience high-quality sound with these over-ear headphones.",
  },
];
