import { Ionicons } from "@expo/vector-icons";

export type Condition = "New" | "Used" | "Refurbished";

export interface Category {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  tint: string;
  count: number;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  currency: "NGN";
  location: string;
  categoryId: string;
  condition: Condition;
  postedAt: string;
  views: number;
  featured?: boolean;
  soldOut?: boolean;
  description: string;
  imageColors: [string, string];
  seller: {
    id: string;
    name: string;
    memberSince: string;
    verified: boolean;
  };
}

export interface ChatMessage {
  id: string;
  fromMe: boolean;
  text: string;
  time: string;
}

export interface ChatThread {
  id: string;
  listingTitle: string;
  personName: string;
  lastMessage: string;
  time: string;
  unread: number;
  type: "buying" | "selling";
  messages: ChatMessage[];
}

export interface CurrentUser {
  name: string;
  phone: string;
  location: string;
  memberSince: string;
  activeAds: number;
  rating: number;
  sold: number;
  plan: "Free" | "Gold" | "Business";
}
