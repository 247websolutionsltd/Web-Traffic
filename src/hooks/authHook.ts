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
  const [image, setImage] = useState<string | undefined>(undefined);
  const BASE_URL = "http://192.168.1.6:500";

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