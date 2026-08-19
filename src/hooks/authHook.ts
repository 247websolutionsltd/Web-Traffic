import { useAuth } from "@/context/AuthContext";
import { pickProfileImage } from "@/utils/imagePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { uploadApi } from "./axios";

export default function useAuthentication(){
    const { setPageLoad, setUser } = useAuth();
    const createUser = async (data: any) => {
        try {
        setPageLoad(true)
        const response = await fetch("http://192.168.1.6:500/api/auth/register", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Tell the server you're sending JSON
            },
            body: JSON.stringify(data), // Convert JavaScript object to JSON string
        });
        const newUser = await response.json();
        if (response.status === 409){
            Alert.alert("User already exists");
        }else if(response.status === 201){
            console.log("registration sucessful");
            setUser(newUser.user);
            AsyncStorage.setItem("token", newUser.token);
            router.replace("/setup");
        }else Alert.alert("An error occured");
        setPageLoad(false);
        return newUser;
        } catch (error) {
        console.error(error);
        setPageLoad(false);
        }
    };

    const logInUser = async (data: any) => {
        try {
        setPageLoad(true)
        const response = await fetch("http://192.168.1.6:500/api/auth/login", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Tell the server you're sending JSON
            },
            body: JSON.stringify(data), // Convert JavaScript object to JSON string
        });
        const newUser = await response.json();
        if(response.status === 200){
            setUser(newUser.user);
            AsyncStorage.setItem("token", newUser.token);
            router.replace('/(tabs)');
        }else {
            Alert.alert(newUser.message)
        };
        setPageLoad(false);
        return newUser;
        } catch (error) {
        console.error(error);
        setPageLoad(false);
        }
    };

  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState<string | undefined>(undefined);
  const BASE_URL = "http://192.168.1.6:500";

  // Get this from your auth state / Redux / Context
  const token = AsyncStorage.getItem("token");

  const changeProfileImage = async () => {
    try {
      const asset = await pickProfileImage();

      if (!asset) {
        return;
      }
      // Show selected image immediately
      setImage(asset.uri);

      setUploading(true);

      const formData = new FormData();

        formData.append("profileImage", {
        uri: asset.uri,
        name: asset.fileName || `profile-${Date.now()}.jpg`,
        type: asset.mimeType || "image/jpeg",
        } as any);

        console.log("ABOUT TO SEND REQUEST");
        console.log(
        "URL:",
        `${BASE_URL}/api/users/profile-image`
        );
        console.log(JSON.stringify(formData))
        const data = await uploadApi.post('/api/users/profile-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
        transformRequest: (data) => data, // Crucial workaround step
        });
        console.log(data.data);
        setUploading(false);
        setImage(data.data.profileImage)

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

    return{
        createUser,
        logInUser,
        image,
        uploading,
        changeProfileImage
    }
}