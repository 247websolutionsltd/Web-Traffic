import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function useHook() {
  const {user} = useAuth();
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

  const getInitials = (firstName=user?.firstName, lastName=user?.lastName)=>{
    const firstInitials = firstName?.split("")[0] || ""
    const lastInitials = lastName?.split("")[0] || ""
    return(firstInitials+lastInitials)
  }

  const timeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    const seconds = Math.floor(
      (now.getTime() - date.getTime()) / 1000
    );

    if (seconds < 60) {
      return "just now";
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
      return `${minutes} ${
        minutes === 1 ? "minute" : "minutes"
      } ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours} ${
        hours === 1 ? "hour" : "hours"
      } ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 7) {
      return `${days} ${
        days === 1 ? "day" : "days"
      } ago`;
    }

    const weeks = Math.floor(days / 7);

    if (weeks < 4) {
      return `${weeks} ${
        weeks === 1 ? "week" : "weeks"
      } ago`;
    }

    const months = Math.floor(days / 30);

    if (months < 12) {
      return `${months} ${
        months === 1 ? "month" : "months"
      } ago`;
    }

    const years = Math.floor(days / 365);

    return `${years} ${
      years === 1 ? "year" : "years"
    } ago`;
  };

  const timeAgoShort = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    const seconds = Math.floor(
      (now.getTime() - date.getTime()) / 1000
    );

    if (seconds < 60) {
      return "just now";
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
      return `${minutes} ${
        minutes === 1 ? "min" : "mins"
      } ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours} ${
        hours === 1 ? "hr" : "hrs"
      } ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 7) {
      return `${days} ${
        days === 1 ? "day" : "days"
      } ago`;
    }

    const weeks = Math.floor(days / 7);

    if (weeks < 4) {
      return `${weeks} ${
        weeks === 1 ? "wk" : "wks"
      } ago`;
    }

    const months = Math.floor(days / 30);

    if (months < 12) {
      return `${months} ${
        months === 1 ? "mth" : "mths"
      } ago`;
    }

    const years = Math.floor(days / 365);

    return `${years} ${
      years === 1 ? "yr" : "yrs"
    } ago`;
  };

  
  
  return {
    isLoading,
    setIsLoading,
    showTitle,
    savings,
    priceFormat,
    linter,
    getInitials,
    timeAgo,
    timeAgoShort
  };
}