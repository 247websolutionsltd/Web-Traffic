import { uploadApi } from '@/hooks/axios';
import { signInWithGoogle } from '@/signIn/googleSignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";
import { router } from 'expo-router';
import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from 'react';
import { Alert } from 'react-native';


type User = {
    id: string | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    email: string | undefined;
    profileImage: string | null | undefined;
    phone: string | null | undefined;
    role: string | undefined;
    ads: string | null | undefined;
    saved: string[] | null | undefined;
    store: any;
    stores: string[] | null | undefined;
};



type Form = {
  title: string;
  description: string;
  price: string;
  category: string;
  images: any[];
  quantity: string;
  condition: string;
  city: string;
  state: string;
  country: string;
};

type StoreForm = {
  name: string;
  image: any;
  handle: string;
  description: string;
  city: string;
  state: string;
  category: string;
}

type AuthContextType = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginGoogle: () => void;
  logout: () => Promise<void>;
  pageLoad:boolean;
  setPageLoad:any;
  setUser:any;
  categories:any;
  setCategory:any;
  listings:any;
  setListings:any;
  storeList:any;
  setStoreList:any;
  loading: boolean;
  setLoading: any;
  handleSubmit: ()=>void;
  updateField: (field: "title" | "description" | "price" | "category" | "images" | "quantity" | "condition" | "city" | "state" | "country", value: string) =>void;
  form:Form;
  readyImage: ()=>void;
  readyStoreImage: ()=>void;
  removeImage: (index: number)=>void;
  createListing: ()=>void;
  tempListing:any;
  storeForm: StoreForm;
  updateStoreField: (field: "name" | "image" | "handle" | "description" | "city" | "state" | "category", value: string) =>void;
  setStoreForm: any;
  createStore:()=>void;
  store:any;
  setStore:any;
  handleAdd:()=>void;
  clearForm:()=>void;
  clearStoreForm:()=>void;
  conversation: any;
  setConversation:any;
  sendLoad:boolean;
  setSendLoad:any;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoad, setPageLoad] = useState(false);
  const [categories, setCategory] = useState();
  const [listings, setListings] = useState();
  const [tempListing, setTempListing] = useState();
  const [storeList, setStoreList] = useState();
  const [store, setStore] = useState();
  const [conversation, setConversation] = useState<any>();
  const [sendLoad, setSendLoad] = useState(false);

  const isAuthenticated = !!token;

  const loginGoogle = async()=>{
    setPageLoad(true);
    const response = await signInWithGoogle();
    setPageLoad(false);
    const user = {
        id: response.user.id,
        firstName: response.user.firstName,
        lastName: response.user.lastName,
        email: response.user.email,
        profileImage: response.user.profileImage,
        phone: response.user.phone,
        role: response.user.role,
        ads: response.user.ads,
        saved: response.user.saved,
        store: response.user.store,
        stores: response.user.stores,
    }
    setUser(user);
    router.replace("/(tabs)")
    setPageLoad(false);
  }

  const logout = async () => {
    // await SecureStore.deleteItemAsync(TOKEN_KEY);
    // await SecureStore.deleteItemAsync(USER_KEY);
    setToken(null);
    setUser(null);
  };

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    images: [] as any[],
    quantity: "",
    condition: "",
    city: "",
    state: "",
    country: "Nigeria",
  });

  const clearForm = ()=>{
    setForm({
      title: "",
      description: "",
      price: "",
      category: "",
      images: [] as any[],
      quantity: "",
      condition: "",
      city: "",
      state: "",
      country: "Nigeria",
    })
  }

  const [storeForm, setStoreForm] = useState({
    name: "",
    image: {} as any,
    handle: "",
    description: "",
    city: "",
    state: "",
    category: "",
  });

  const clearStoreForm = ()=>{
    setStoreForm({
      name: "",
      image: {} as any,
      handle: "",
      description: "",
      city: "",
      state: "",
      category: "",
    })
  }

  const updateStoreField = (
    field: keyof typeof storeForm,
    value: string
  ) => {
    setStoreForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const readyStoreImage = async () => {
    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: true,
        quality: 0.8,
      });

    if (result.canceled) {
      return;
    }

    setStoreForm((prev) => {
    return {
      ...prev,
      image: result.assets[0],
    };
  });
  };

  const [loading, setLoading] = useState(false);

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
  if (!form.title.trim()) {
    Alert.alert("Error", "Store name is required");
    return;
  }

  try {
    setLoading(true);

    const token = await AsyncStorage.getItem("token");

    if (!token) {
      throw new Error("You are not logged in");
    }

   const data = await uploadApi.post('/api/listings"',
      form,
      {headers: { Authorization: `Bearer ${token}` }
    });


    // if (!response.ok) {
    //   throw new Error(
    //     data.message || "Failed to create store"
    //   );
    // }


    Alert.alert(
      "Success",
      "Your store has been created"
    );

  } catch (error: any) {
    console.error("CREATE STORE ERROR:", error);

    Alert.alert(
      "Error",
      error.message || "Something went wrong"
    );

  } finally {
    setLoading(false);
  }
};

const readyImage = async () => {
  const MAX_IMAGES = 5;
  const result =
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      quality: 0.8,
    });

  if (result.canceled) {
    return;
  }

  setForm((prev) => {
    const selectedImages = result.assets.map(
      (asset) => asset.uri
    );

    const combined = [
      ...prev.images,
      ...selectedImages,
    ];

    return {
      ...prev,
      images: combined.slice(0, MAX_IMAGES),
    };
  });
};

const removeImage = (index: number) => {
  setForm((prev) => ({
    ...prev,
    images: prev.images.filter(
      (_, i) => i !== index
    ),
  }));
};

const createListing = async () => {
  setLoading(true);
  const formData = new FormData();
  const token = await AsyncStorage.getItem("token");
  // Regular fields
  formData.append("title", form.title);
  formData.append("description", form.description);
  formData.append("category", form.category);
  formData.append("condition", form.condition.toLowerCase());
  formData.append("price", form.price);
  formData.append("quantity", form.quantity);
  formData.append("city", form.city);
  formData.append("state", form.state);
  formData.append("country", form.country);
  formData.append("store", user?.store?._id)

  // Images
 form.images.forEach((asset: any, index: number) => {
  formData.append("images", {
    uri: asset,
    name: asset.fileName || `listing-${Date.now()}-${index}.jpg`,
    type: asset.mimeType || "image/jpeg",
  } as any);
  });
  try{
    const data = await uploadApi.post("/api/listings",
      formData,
      {headers: { Authorization: `Bearer ${token}` }
    });
    setTempListing(data.data);
    router.push('/live');
  }catch(error){
    console.error("Error Message:", error)
    router.back()
  }finally{
    setLoading(false)
  }
  
  // if (!response.ok) {
  //   throw new Error(
  //     data.message || "Failed to create listing"
  //   );
  // }

};


const createStore = async () => {
  const formData = new FormData();
  const token = await AsyncStorage.getItem("token");
  // Regular fields
  formData.append("name", storeForm.name);
  formData.append("description", storeForm.description);
  formData.append("category", storeForm.category);
  formData.append("handle", storeForm.handle);
  formData.append("city", storeForm.city);
  formData.append("state", storeForm.state);
  formData.append("country", "Nigeria");

  // Images
  const asset = storeForm.image
 formData.append("image", {
    uri: asset.uri,
    name: asset.fileName || `store-${Date.now()}.jpg`,
    type: asset.mimeType || "image/jpeg",
  } as any);
  try{
    const data = await uploadApi.post("/api/stores",
      formData,
      {headers: { Authorization: `Bearer ${token}` }
    });
    setTempListing(data.data)
  }catch(error:any){
    console.error("Error Message:", error.message)
  }finally{
    router.push('/(tabs)')
  }
  
  // if (!response.ok) {
  //   throw new Error(
  //     data.message || "Failed to create listing"
  //   );
  // }

};

const handleAdd = ()=>{
  if(user?.store){
    router.push("/create")
  }else{
    router.push("/createStore")
  }
}

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated,
        loginGoogle,
        logout,
        pageLoad,
        setPageLoad,
        setUser,
        categories,
        setCategory,
        listings,
        setListings,
        storeList,
        setStoreList,
        loading,
        handleSubmit,
        updateField,
        form,
        readyImage,
        removeImage,
        createListing,
        tempListing,
        storeForm,
        setStoreForm,
        readyStoreImage,
        updateStoreField,
        createStore,
        store,
        setStore,
        setLoading,
        handleAdd,
        clearForm,
        clearStoreForm,
        conversation,
        setConversation,
        sendLoad,
        setSendLoad
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside an AuthProvider'
    );
  }

  return context;
}