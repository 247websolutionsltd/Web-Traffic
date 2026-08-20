import { useState } from "react";

export default function useData(){
    const [ adTitle, setAdTitle ] = useState("hi");
    const [activeFilter, setActiveFilter] = useState("");
    const [ description, setDescription, ] = useState("");
    const [ category, setCategory ] = useState("");
    return{
        adTitle,
        setAdTitle,
        activeFilter,
        setActiveFilter,
        description,
        setDescription,
        setCategory
    }
}