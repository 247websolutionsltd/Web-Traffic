import { Ionicons } from "@expo/vector-icons";

export type Condition = "New" | "Used" | "Refurbished";

export interface Ads {
  id: string;
  condition: string;
}
export interface Category {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  tint: string;
  count: number;
}

export interface Location {
  city:string;
  state:string;
  country:string
}

export interface Listing {
  v:number;
  _id: string;
  title: string;
  price: number;
  currency: "NGN";
  location: Location;
  category: string;
  condition: Condition;
  description: string;
  createdAt: string;
  images:string[];
  tag:string;
  seller: string;
  isActive: boolean;
  quantity: number;
  updatedAt: string;
}

export interface InfoProps{
  id: string;
  displayPic: string;
  name: string;
  ads: string[];
  star: string;
  location: string;
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
  image: string;
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
