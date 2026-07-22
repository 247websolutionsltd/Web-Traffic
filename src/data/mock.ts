import { Category, ChatThread, CurrentUser, Listing } from "@/types";

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", icon: "phone-portrait-outline", tint: "#FDEBEE", count: 248 },
  { id: "property", name: "Property", icon: "home-outline", tint: "#FCF2E1", count: 132 },
  { id: "vehicles", name: "Vehicles", icon: "car-outline", tint: "#E7F6EE", count: 96 },
  { id: "jobs", name: "Jobs", icon: "briefcase-outline", tint: "#EDEBFB", count: 54 },
  { id: "fashion", name: "Fashion", icon: "shirt-outline", tint: "#FDEBEE", count: 71 },
  { id: "home", name: "Home appliances", icon: "cube-outline", tint: "#FCF2E1", count: 63 },
  { id: "hobby", name: "Hobby & sport", icon: "football-outline", tint: "#E7F6EE", count: 40 },
  { id: "other", name: "Others", icon: "grid-outline", tint: "#EDEBFB", count: 18 },
];

export const listings: Listing[] = [
  {
    id: "1",
    title: "iPhone 14 Pro Max, 256GB, Deep Purple",
    price: 850000,
    currency: "NGN",
    location: "Ikeja, Lagos",
    categoryId: "electronics",
    condition: "Used",
    postedAt: "2 days ago",
    views: 312,
    featured: true,
    description:
      "Barely used, comes with box, charger and original receipt. No scratches, battery health 96%. Price is slightly negotiable for serious buyers only.",
    imageColors: ["#E7E4DE", "#D8D4CB"],
    seller: { id: "s1", name: "Tunde A.", memberSince: "2022", verified: true },
  },
  {
    id: "2",
    title: "3 bedroom duplex, Lekki Phase 1",
    price: 12500000,
    currency: "NGN",
    location: "Lekki, Lagos",
    categoryId: "property",
    condition: "Used",
    postedAt: "4 days ago",
    views: 540,
    description:
      "Spacious 3 bedroom duplex with a private pool, fitted kitchen and 24-hour security. Serious enquiries only, agents should not apply.",
    imageColors: ["#D9CBB8", "#BFA98F"],
    seller: { id: "s2", name: "Amaka O.", memberSince: "2021", verified: true },
  },
  {
    id: "3",
    title: "Samsung Galaxy S23 Ultra, 512GB",
    price: 620000,
    currency: "NGN",
    location: "Ikeja, Lagos",
    categoryId: "electronics",
    condition: "Used",
    postedAt: "2 days ago",
    views: 198,
    description: "Mint condition, still under warranty till next year. S-Pen included.",
    imageColors: ["#DDE3EA", "#C3CCDA"],
    seller: { id: "s1", name: "Tunde A.", memberSince: "2022", verified: true },
  },
  {
    id: "4",
    title: "HP Pavilion 15, i7, 16GB RAM",
    price: 480000,
    currency: "NGN",
    location: "Yaba, Lagos",
    categoryId: "electronics",
    condition: "Used",
    postedAt: "5 days ago",
    views: 271,
    description: "Great for work and light gaming. 512GB SSD, barely used, includes original charger.",
    imageColors: ["#E2DDD4", "#CFC7B7"],
    seller: { id: "s3", name: "Chuks E.", memberSince: "2023", verified: false },
  },
  {
    id: "5",
    title: "Sony WH-1000XM5 headset",
    price: 145000,
    currency: "NGN",
    location: "Surulere, Lagos",
    categoryId: "electronics",
    condition: "Used",
    postedAt: "1 week ago",
    views: 88,
    description: "Excellent noise cancelling, comes with the original case and cable.",
    imageColors: ["#D6D2CE", "#B8B2AC"],
    seller: { id: "s4", name: "Blessing N.", memberSince: "2020", verified: true },
  },
  {
    id: "6",
    title: "Canon EOS R50 camera kit",
    price: 710000,
    currency: "NGN",
    location: "Victoria Island, Lagos",
    categoryId: "electronics",
    condition: "New",
    postedAt: "1 week ago",
    views: 156,
    soldOut: false,
    description: "Brand new, sealed box. Comes with an 18-45mm kit lens and a 64GB memory card.",
    imageColors: ["#20242B", "#111318"],
    seller: { id: "s5", name: "Grace I.", memberSince: "2024", verified: true },
  },
  {
    id: "7",
    title: "Honda Accord 2018, full option",
    price: 9800000,
    currency: "NGN",
    location: "Bloomfield, Lagos",
    categoryId: "vehicles",
    condition: "Used",
    postedAt: "3 days ago",
    views: 402,
    featured: true,
    description: "Clean title, accident-free, first body. Leather interior, reverse camera, alloy rims.",
    imageColors: ["#D6C9BC", "#B7A796"],
    seller: { id: "s6", name: "Chuks E.", memberSince: "2023", verified: false },
  },
  {
    id: "8",
    title: "MacBook Air M2, 8GB/256GB",
    price: 980000,
    currency: "NGN",
    location: "Ikeja, Lagos",
    categoryId: "electronics",
    condition: "Used",
    postedAt: "6 days ago",
    views: 233,
    soldOut: true,
    description: "Sold — kept here for reference. Similar units available on request.",
    imageColors: ["#E9E7E2", "#D3D1C9"],
    seller: { id: "s4", name: "Blessing N.", memberSince: "2020", verified: true },
  },
];

export const chatThreads: ChatThread[] = [
  {
    id: "c1",
    listingTitle: "iPhone 14 Pro Max",
    personName: "Tunde A.",
    lastMessage: "Is the price still negotiable?",
    time: "2m",
    unread: 2,
    type: "selling",
    messages: [
      { id: "m1", fromMe: false, text: "Hi, is this still available?", time: "10:02" },
      { id: "m2", fromMe: true, text: "Yes it is, still in great condition.", time: "10:05" },
      { id: "m3", fromMe: false, text: "Is the price still negotiable?", time: "10:07" },
    ],
  },
  {
    id: "c2",
    listingTitle: "Duplex, Lekki",
    personName: "Amaka O.",
    lastMessage: "Sure, I can do 2pm tomorrow",
    time: "1h",
    unread: 0,
    type: "buying",
    messages: [
      { id: "m1", fromMe: false, text: "Can we schedule a viewing?", time: "09:10" },
      { id: "m2", fromMe: true, text: "Sure, I can do 2pm tomorrow", time: "09:20" },
    ],
  },
  {
    id: "c3",
    listingTitle: "Honda Accord 2018",
    personName: "Chuks E.",
    lastMessage: "Thanks, will check it out",
    time: "Yesterday",
    unread: 0,
    type: "buying",
    messages: [
      { id: "m1", fromMe: true, text: "The car is available for inspection this weekend.", time: "Mon" },
      { id: "m2", fromMe: false, text: "Thanks, will check it out", time: "Mon" },
    ],
  },
  {
    id: "c4",
    listingTitle: "MacBook Air M2",
    personName: "Blessing N.",
    lastMessage: "Deal closed",
    time: "Mon",
    unread: 0,
    type: "selling",
    messages: [{ id: "m1", fromMe: false, text: "Deal closed, thank you!", time: "Mon" }],
  },
  
];

export const currentUser: CurrentUser = {
  name: "Tunde Adebayo",
  phone: "+234 802 123 4567",
  location: "Ikeja, Lagos",
  memberSince: "2022",
  activeAds: 14,
  rating: 4.9,
  sold: 32,
  plan: "Free",
};

export function getListingById(id: string): Listing | undefined {
  return listings.find((l) => l.id === id);
}

export function getListingsByCategory(categoryId: string): Listing[] {
  return listings.filter((l) => l.categoryId === categoryId);
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}
