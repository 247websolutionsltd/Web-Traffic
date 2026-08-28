import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";

export default function useButton(){
    const {setLoading, loading} = useAuth();
    const login1 = ()=>{
        setLoading(false)
        router.navigate('/auth/logIn');
        console.log(loading)
    }

    const register1 = ()=>{
        setLoading(true);
        router.navigate('/auth/register');
        setLoading(false);
    }

    return {
        login1,
        register1
    }
}