import { useState } from "react";

export default function useHook() {
  const [isLoading, setIsLoading] = useState(false);
  const showTitle = (title:string, length=25)=>{
    if(title.length < length) return title
    else return title.slice(0,length) + "..."
  }
  const savings = (oldPrice: string, newPrice: string)=>{
    const oldNum = Number(oldPrice);
    const newNum = Number(newPrice);
    return Math.round(((newNum - oldNum) / newNum) * 100)
  }
  
  return {
    isLoading,
    setIsLoading,
    showTitle,
    savings
  };
}