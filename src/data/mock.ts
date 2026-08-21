import { Colors } from "@/constants/theme";
import { useAuth } from "@/context/AuthContext";
import { Ads, Category, ChatThread, CurrentUser, Listing } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";


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

export const favorites = [
  "1","2","3","4","5","7"
]

// export const listings: Listing[] = [
//   {
//     id: "1",
//     title: "iPhone 14 Pro Max, 256GB, Deep Purple",
//     price: 850000,
//     currency: "NGN",
//     location: "Ikeja, Lagos",
//     categoryId: "electronics",
//     condition: "Used",
//     postedAt: "2 days ago",
//     views: 312,
//     featured: true,
//     image:"https://images.unsplash.com/photo-1749716491521-af90e3b6feb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
//     memberImage:"https://plus.unsplash.com/premium_photo-1786564024044-f20d6028d606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "Barely used, comes with box, charger and original receipt. No scratches, battery health 96%. Price is slightly negotiable for serious buyers only.",
//     seller: { id: "s1", name: "Tunde A.", memberSince: "2022", verified: true },
//   },
//   {
//     id: "2",
//     title: "3 bedroom duplex, Lekki Phase 1",
//     price: 12500000,
//     currency: "NGN",
//     location: "Lekki, Lagos",
//     categoryId: "property",
//     condition: "Used",
//     postedAt: "4 days ago",
//     views: 540,
//     image:"https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww",
//     memberImage:"https://plus.unsplash.com/premium_photo-1786564024044-f20d6028d606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "Spacious 3 bedroom duplex with a private pool, fitted kitchen and 24-hour security. Serious enquiries only, agents should not apply.",
//     imageColors: ["#D9CBB8", "#BFA98F"],
//     seller: { id: "s2", name: "Amaka O.", memberSince: "2021", verified: true },
//   },
//   {
//     id: "3",
//     title: "Samsung Galaxy S23 Ultra, 512GB",
//     price: 620000,
//     currency: "NGN",
//     location: "Ikeja, Lagos",
//     categoryId: "electronics",
//     condition: "Used",
//     postedAt: "2 days ago",
//     views: 198,
//     featured: true,
//     image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
//     memberImage:"https://plus.unsplash.com/premium_photo-1786564024044-f20d6028d606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     description: "Mint condition, still under warranty till next year. S-Pen included.",
//     imageColors: ["#DDE3EA", "#C3CCDA"],
//     seller: { id: "s1", name: "Tunde A.", memberSince: "2022", verified: true },
//   },
//   {
//     id: "4",
//     title: "HP Pavilion 15, i7, 16GB RAM",
//     price: 480000,
//     currency: "NGN",
//     location: "Yaba, Lagos",
//     categoryId: "electronics",
//     condition: "Used",
//     postedAt: "5 days ago",
//     views: 271,
//     memberImage:"https://plus.unsplash.com/premium_photo-1786564024044-f20d6028d606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     image:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
//     description: "Great for work and light gaming. 512GB SSD, barely used, includes original charger.",
//     imageColors: ["#E2DDD4", "#CFC7B7"],
//     seller: { id: "s3", name: "Chuks E.", memberSince: "2023", verified: false },
//   },
//   {
//     id: "5",
//     title: "Sony WH-1000XM5 headset",
//     price: 145000,
//     currency: "NGN",
//     location: "Surulere, Lagos",
//     category: "electronics",
//     condition: "Used",
//     createdAt: "1 week ago",
//     images:["https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"],
//     description: "Excellent noise cancelling, comes with the original case and cable.",
//     seller: ""
//   },
//   {
//     id: "6",
//     title: "Canon EOS R50 camera kit",
//     price: 710000,
//     currency: "NGN",
//     location: "Victoria Island, Lagos",
//     categoryId: "electronics",
//     condition: "New",
//     postedAt: "1 week ago",
//     views: 156,
//     soldOut: false,
//     image:"https://images.unsplash.com/photo-1749716491521-af90e3b6feb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
//     memberImage:"https://plus.unsplash.com/premium_photo-1786564024044-f20d6028d606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     description: "Brand new, sealed box. Comes with an 18-45mm kit lens and a 64GB memory card.",
//     imageColors: ["#20242B", "#111318"],
//     seller: { id: "s5", name: "Grace I.", memberSince: "2024", verified: true },
//   },
//   {
//     id: "7",
//     title: "Honda Accord 2018, full option",
//     price: 9800000,
//     currency: "NGN",
//     location: "Bloomfield, Lagos",
//     categoryId: "vehicles",
//     condition: "Used",
//     postedAt: "3 days ago",
//     views: 402,
//     featured: true,
//     image:"https://images.unsplash.com/photo-1570303278489-041bd897a873?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZGF8ZW58MHx8MHx8fDA%3D",
//     memberImage:"https://plus.unsplash.com/premium_photo-1786564024044-f20d6028d606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     description: "Clean title, accident-free, first body. Leather interior, reverse camera, alloy rims.",
//     imageColors: ["#D6C9BC", "#B7A796"],
//     seller: { id: "s6", name: "Chuks E.", memberSince: "2023", verified: false },
//   },
//   {
//     id: "8",
//     title: "MacBook Air M2, 8GB/256GB",
//     price: 980000,
//     currency: "NGN",
//     location: "Ikeja, Lagos",
//     categoryId: "electronics",
//     condition: "Used",
//     postedAt: "6 days ago",
//     views: 233,
//     soldOut: true,
//     image:"https://images.unsplash.com/photo-1749716491521-af90e3b6feb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
//     memberImage:"https://plus.unsplash.com/premium_photo-1786564024044-f20d6028d606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
//     description: "Sold — kept here for reference. Similar units available on request.",
//     imageColors: ["#E9E7E2", "#D3D1C9"],
//     seller: { id: "s4", name: "Blessing N.", memberSince: "2020", verified: true },
//   },
// ];

export const ads: Ads[] = [
  {
    id: "1",
    condition:'Live'
  },
  {
    id: "3",
    condition:'Expiring in 2 days'
  },
  {
    id: "5",
    condition:'Expired'
  },
  {
    id: "6",
    condition:'Live'
  },
  {
    id: "7",
    condition:'Expired'
  },
];

export const saved: string[]=[
  "4", "2", "8", "6"
]

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
      { 
        id: "m1", 
        fromMe: false, 
        text: "Hi, is this still available?", 
        time: "10:02", 
      },
      { 
        id: "m2", 
        fromMe: true, 
        text: "Yes it is, still in great condition.", 
        time: "10:05",
      },
      { 
        id: "m3", 
        fromMe: false, 
        text: "Is the price still negotiable?", 
        time: "10:07" 
      },
    ],
    image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww"
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
    image:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
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
    image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
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
    image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
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
  const {listings} = useAuth();
  return listings.find((l: { id: string; }) => l.id === id);
}

export function getListingsByCategory(categoryId: string): Listing[] {
  const {listings} = useAuth();
  return listings.filter((l: { categoryId: string; }) => l.categoryId === categoryId);
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

type IconName = keyof typeof Ionicons.glyphMap;
export const OPTIONMENU: { icon: IconName; label: string; onPress: () => void, color:string, background:string; }[] = [
  { icon: "create-outline", label: "Edit Listing", onPress: () => {}, background: Colors.coralTint, color: "#e7374e" },
  { icon: "star-outline", label: "Boost / feature this add", onPress: () => {}, background:Colors.goldTint, color:"#8A5A0F" },
  { icon: "checkmark-outline", label: "Mark as sold", onPress: () => {}, color:Colors.green, background:Colors.greenTint },
  { icon: "trash-outline", label: "Delete Ad", onPress: () => {}, color: "#e7374e", background: Colors.coralTint },
];

export const PROFILEMENU: { icon: IconName; label: string; onPress: () => void }[] = [
  { icon: "pricetags-outline", label: "My ads", onPress: () => {router.navigate('/myAds')} },
  { icon: "heart-outline", label: "Saved", onPress: () => {router.navigate('/saved')} },
  { icon: "card-outline", label: "My store", onPress: () => {router.navigate('/createStore')} },
  { icon: "settings-outline", label: "Settings", onPress: () => {router.navigate('/settings')} },
  { icon: "help-buoy-outline", label: "Help & support", onPress: () => {} },
];

export const SETTINGSMENU1: { icon: IconName; label: string; onPress: () => void }[] = [
  { icon: "person", label: "Edit Profile", onPress: () => {router.navigate('/edit')} },
  { icon: "lock-closed", label: "Change Password", onPress: () => {router.navigate('/setup/reset')} },
];

export const SETTINGSMENU2: { icon: IconName; label: string;}[] = [
  { icon: "person", label: "Chat Messages" },
  { icon: "lock-closed", label: "Price drops on saved ads" },
];

export const stores = [
    {
      id:"1",
      displayPic: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fHww",
      headerPic: "https://images.unsplash.com/photo-1785327831299-eddf16a18328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      name:"Apple",
      ads: ["2","6"],
      star:"4.8",
      location:"Lagos",
      joined:"2021",
      followers:"1.5m",
      verified:true,
    },
    {
      id:"2",
      displayPic: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbmRvd3N8ZW58MHx8MHx8fDA%3D",
      headerPic: "https://images.unsplash.com/photo-1785327831299-eddf16a18328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      name:"Microsoft",
      ads: ["1","3"],
      star:"4.0",
      location:"Lagos",
      joined:"2021",
      followers:"1.2m",
      verified:true
    },
    {
      id:"3",
      displayPic: "https://images.unsplash.com/photo-1660477946008-8cd03548bdba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvbnl8ZW58MHx8MHx8fDA%3D",
      headerPic: "https://images.unsplash.com/photo-1785327831299-eddf16a18328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      name:"Sony",
      ads: ["1", "2", "3", "4", "5", "6", "7", "8"],
      star:"4.3",
      location:"Lagos",
      joined:"2024",
      followers:"1.7m",
      verified:true
    },
    {
      id:"4",
      displayPic: "https://images.unsplash.com/photo-1708376368427-ede2b537d494?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFydmVsfGVufDB8fDB8fHww",
      headerPic: "https://images.unsplash.com/photo-1785327831299-eddf16a18328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      name:"Marvel",
      ads: ["8"],
      star:"4.1",
      location:"Lagos",
      joined:"2023",
      followers:"1.9m",
      verified:true
    },
    {
      id:"5",
      displayPic: "https://images.unsplash.com/photo-1785142893942-dd29da7e38a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      headerPic: "https://images.unsplash.com/photo-1785327831299-eddf16a18328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      name:"Vix Fashion",
      ads: ["7"],
      star:"3.9",
      location:"Lagos",
      joined:"2022",
      followers:"900k",
      verified:true
    },
  ]

  export const categoriesData = [
    {
      image:"https://images.unsplash.com/photo-1593344484962-796055d4a3a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
      category:"Electronics",
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      category:"Shoes",
    },
    {
      image:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D",
      category:"Bags",
    },
    {
      image:"https://images.unsplash.com/photo-1653681498612-37ec55093e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwZ2VhcnxlbnwwfHwwfHx8MA%3D%3D",
      category:"Sports Gear",
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      category:"Property",
    },
    {
      image:"https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnN8ZW58MHx8MHx8fDA%3D",
      category:"Vehicles",
    },
  ]