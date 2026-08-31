import { useAuth } from "@/context/AuthContext";
import { pickProfileImage } from "@/utils/imagePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { uploadApi } from "./axios";

export default function useAuthentication(){
    const { setPageLoad, setUser, setCategory, setListings, setStoreList, setStore, setLoading, loading } = useAuth();
    const createUser = async (data: any) => {
        setLoading(true);
        try {
            setPageLoad(true)
            const response = await uploadApi.post('/api/auth/register', data);
            const newUser = await response.data;
            setUser(newUser.user);
            AsyncStorage.setItem("token", newUser.token);
            setPageLoad(false)
            router.replace("/setup");
        } catch (error) {
            Alert.alert("User already exists");
            setPageLoad(false);
        }finally{
          setLoading(false);
        }
    };

    const logInUser = async (data: any) => {
        setLoading(true);
        try {
            const response = await uploadApi.post('/api/auth/login', data);
            const newUser = await response.data;
            if(response.status === 200){
                setUser(newUser.user);
                await AsyncStorage.setItem("token", newUser.token);
                router.replace('/(tabs)');
            }else {
                Alert.alert(newUser.message)
            };
        } catch (error:any) {
            console.error(error.response.message);
            Alert.alert("Invalid credentials");
        }finally{
          setLoading(false);
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
      return true;
    }catch(e){
      console.log(e);
      return false
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setUser(null); 
      router.navigate('/index');
      router.dismissAll();
      

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

    }catch (error){
      console.error(error)
    }
  }

  const getCategory = async () => {
    try {
      const data = await uploadApi.get('/api/categories');
      setCategory(data.data);
      return data

    }catch (error){
      console.error(error)
    }
  }

  // const addListing = async () => {
  //   const token = await AsyncStorage.getItem("token");
  //   try {
  //     const data = await uploadApi.post('/api/listings',
  //       {
  //         title: "Iphone 16",
  //         description: "Very good phone",
  //         price: 8000,
  //         category: "Electronics",
  //         images:[
  //           "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww",
  //           "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fHww",
  //           "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXBob25lfGVufDB8fDB8fHww"
  //         ],
  //         quantity: 1,
  //         condition: "used",
  //         location: {
  //           city:"Ikeja",
  //           state:"Lagos",
  //           country:"Nigeria"
  //         },
  //       },
  //       {headers: { Authorization: `Bearer ${token}` }
  //     });

  //   }catch (error){
  //     console.error(error)
  //   }
  // }

  const getListings = async () => {
    try {
      const data = await uploadApi.get('/api/listings');
      setListings(data.data);
      return data.data

    }catch (error){
      console.error(error)
    }
  }

  const getStoreList = async () => {
    try {
      const data = await uploadApi.get('/api/stores');
      setStoreList(data.data.stores)
      return data.data.stores;

    }catch (error){
      console.error(error)
    }
  }

  const toggleFavorite = async (
    listingId: string,
  ) => {
    const token = await AsyncStorage.getItem("token");
    try{
      const data = await uploadApi.post(`api/favorites/${listingId}`,
        {listingId},
        {headers: { Authorization: `Bearer ${token}` }
      });
      getCurrentUser(token);
      return data
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };
  

  const clearAllFavorites = async () => {
    const token = await AsyncStorage.getItem("token");
    try{
       const data = await uploadApi.delete(`api/favorites`, {headers: { Authorization: `Bearer ${token}` }});
       getCurrentUser(token);
       return data;
    }catch (error:any){
      console.error("Error:", error)
    }
  };

  const getMyStore = async (token:string|null) => {
    console.log(token)
    try{
      const data = await uploadApi.get('/api/stores/my-store', {headers: { Authorization: `Bearer ${token}` }});
      setStore(data.data);
      console.log(data.data)
      return data.data
    }catch(error:any){
      console.error(error.response.data.message)
    }
  };

  const getListing = async (
    listingId: string,
  ) => {
    try{
      const data = await uploadApi.get(`/api/listings/${listingId}`);
      return data.data.listing
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };

  const getSellerListings = async (
    sellerId: string,
  ) => {
    try{
      const data = await uploadApi.get(`/api/listings/seller/${sellerId}`);
      return data.data
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };

  const getStoreListings = async (
    storeId: string,
  ) => {
    try{
      const data = await uploadApi.get(`/api/listings/store/${storeId}`);
      return data.data
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };

  const startChat = async (listingId: string, sellerId: string) => {
    const token = await AsyncStorage.getItem("token");
    try {
      const data = await uploadApi.post(`api/messages/conversations`,
        {listingId, sellerId},
        {headers: { Authorization: `Bearer ${token}` }
      });

      console.log(
        "CONVERSATION:",
        data.data.conversation
      );

      // Navigate to chat screen
      router.push(
        `/chat/${data.data.conversation._id}`
      );

    } catch (error) {
      console.error(
        "START CHAT ERROR:",
        error
      );
    }
  };
  
  const getStoreById = async (
    storeId: string,
  ) => {
    try{
      const data = await uploadApi.get(`/api/stores/${storeId}`);
      return data.data.store
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };

  const getMyConversations = async (token:string|null)=>{
    try{
      const data = await uploadApi.get(`/api/messages/conversations`, {headers: { Authorization: `Bearer ${token}` }});
      return data.data
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };

  const followStore = async (storeId:string)=>{
    const token = await AsyncStorage.getItem("token");
    try{
      const data = await uploadApi.post(`api/stores/${storeId}/follow`,
        {storeId},
        {headers: { Authorization: `Bearer ${token}` }
      });
      return data.data
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };

  const unfollowStore = async (storeId:string)=>{
    const token = await AsyncStorage.getItem("token");
    try{
      const data = await uploadApi.delete(`api/stores/${storeId}/unfollow`,
        {headers: { Authorization: `Bearer ${token}` }
      });
      return data.data
    }catch(error:any){
      console.error("Error:", error.response.data)
    } 
  };

  const deleteAccount = async () => {
    const token = await AsyncStorage.getItem("token");
    try{
       const data = await uploadApi.delete(`api/auth/account`, {headers: { Authorization: `Bearer ${token}` }});
       console.log(data.data);
       return data;
    }catch (error:any){
      console.error("Error:", error)
    }
  };

 const requestAccountDeletion = async () => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await fetch(
      `https://webtraffic-backend-1.onrender.com/api/auth/delete-account/request`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const text = await response.text();

    console.log("RESPONSE:", text);
    console.log("STATUS:", response.status);

    if (response.status !== 200) {
      throw new Error("There is an error");
    }
    

    Alert.alert(
      "Check your email",
      "We've sent a confirmation link to your email. Click the link to permanently delete your account."
    );

  } catch (error:any) {
    console.error(error);

    Alert.alert(
      "Error",
      error.message || "Unable to send confirmation email"
    );
  }
};

    return{
        createUser,
        logInUser,
        uploading,
        changeProfileImage,
        getCurrentUser,
        logout,
        addCategory,
        getCategory,
        getListings,
        getStoreList,
        toggleFavorite,
        clearAllFavorites,
        getMyStore,
        getListing,
        getSellerListings,
        startChat,
        getStoreById,
        getStoreListings,
        getMyConversations,
        followStore,
        unfollowStore,
        deleteAccount,
        requestAccountDeletion
    }
}