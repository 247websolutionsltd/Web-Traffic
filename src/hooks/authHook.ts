import { useAuth } from "@/context/AuthContext";
import { pickProfileImage } from "@/utils/imagePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { uploadApi } from "./axios";

export default function useAuthentication(){
    const { setPageLoad, setUser, setCategory, setListings } = useAuth();
    const createUser = async (data: any) => {
        try {
            setPageLoad(true)
            const response = await uploadApi.post('/api/auth/register', data);
            const newUser = await response.data;
            console.log("registration sucessful");
            console.log(newUser)
            setUser(newUser.user);
            AsyncStorage.setItem("token", newUser.token);
            setPageLoad(false)
            router.replace("/setup");
        } catch (error) {
            Alert.alert("User already exists");
            setPageLoad(false);
        }
    };

    const logInUser = async (data: any) => {
        try {
            setPageLoad(true)
            const response = await uploadApi.post('/api/auth/login', data);
            const newUser = await response.data;
            if(response.status === 200){
                setUser(newUser.user);
                AsyncStorage.setItem("token", newUser.token);
                router.replace('/(tabs)');
            }else {
                Alert.alert(newUser.message)
            };
            setPageLoad(false);
        } catch (error) {
            console.error(error);
            Alert.alert("Invalid credentials");
            setPageLoad(false);
        }
    };

  const [uploading, setUploading] = useState(false);


  const changeProfileImage = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const asset = await pickProfileImage();

      if (!asset) {
        return;
      }

      setUploading(true);

      const formData = new FormData();
        formData.append("profileImage", {
        uri: asset.uri,
        name: asset.fileName || `profile-${Date.now()}.jpg`,
        type: asset.mimeType || "image/jpeg",
        } as any);
        const data = await uploadApi.post('/api/users/profile-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
        transformRequest: (data) => data,
        });
        setUploading(false);
        getCurrentUser(token);

    } catch (error: any) {
      console.error(error);

      Alert.alert(
        "Upload failed",
        error.message || "Something went wrong"
      );
      setUploading(false)

    } finally {
      setUploading(false);
    }
  };

  const getCurrentUser = async (token:string|null) => {
    try{
      const data = await uploadApi.get('/api/auth/user',{headers: { Authorization: `Bearer ${token}` }});
      setUser(data.data.user);
      return true
    }catch(e){
      console.log(e);
      return false
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setUser(null);
      router.dismissAll()

    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const addCategory = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const data = await uploadApi.post('/api/categories',
        {
          "name": "Real Estate",
          "description": "Houses, apartments and land"
        },
        {headers: { Authorization: `Bearer ${token}` }
      });
      console.log(data.data)

    }catch (error){
      console.error(error)
    }
  }

  const getCategory = async () => {
    try {
      const data = await uploadApi.get('/api/categories');
      setCategory(data.data);

    }catch (error){
      console.error(error)
    }
  }

  const addListing = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const data = await uploadApi.post('/api/listings',
        {
          title: "Iphone 16",
          description: "Very good phone",
          price: 8000,
          category: "Electronics",
          images:[
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fHww"
          ],
          quantity: 1,
          condition: "used",
          location: "Lagos",
        },
        {headers: { Authorization: `Bearer ${token}` }
      });

    }catch (error){
      console.error(error)
    }
  }

  const getListings = async () => {
    try {
      const data = await uploadApi.get('/api/listings');
      console.log(data.data.slice(0,3))
      setListings(data.data);

    }catch (error){
      console.error(error)
    }
  }


    return{
        createUser,
        logInUser,
        uploading,
        changeProfileImage,
        getCurrentUser,
        logout,
        addCategory,
        getCategory,
        addListing,
        getListings
    }
}