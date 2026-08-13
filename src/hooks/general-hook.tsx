import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from "react";
import { Appearance } from "react-native";

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
  const priceFormat = (price:number)=>{
    const stringPrice = price.toString().split('');
    const length = stringPrice.length
    for(let x=length; x>0; x--){
      if (x !== length && (length - x) % 3 === 0){
       stringPrice.splice(x, 0, ',');
      }
    }
    return stringPrice.join('');
  }
  const linter = (sentence:string, max=22)=> {
    let result = sentence
    if (sentence.length >= max){
      result = result.split("").splice(0,max).join("") + "...";
    }
    return result;
  }

  const toggleTheme = ()=>{
    const scheme = useColorScheme();
    Appearance.setColorScheme(scheme==='dark' ? 'light' : 'dark');
  }
  
  return {
    isLoading,
    setIsLoading,
    showTitle,
    savings,
    priceFormat,
    linter,
    toggleTheme
  };
}