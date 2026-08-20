import { signInWithGoogle } from '@/signIn/googleSignIn';
import { router } from 'expo-router';
import {
  createContext,
  useContext,
  useState,
  type ReactNode
} from 'react';


type User = {
    id: string | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    email: string | undefined;
    profileImage: string | null | undefined;
    phone: string | null | undefined;
    role: string | undefined;
    ads: string | null | undefined;
    saved: string | null | undefined;
    store: string | null | undefined;
};

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

  const isAuthenticated = !!token;

  const loginGoogle = async()=>{
    setPageLoad(true);
    const response = signInWithGoogle();
    setPageLoad(false);
    const user = {
        id: (await response).user.id,
        firstName: (await response).user.firstName,
        lastName:(await response).user.lastName,
        email: (await response).user.email,
        profileImage: (await response).user.profileImage,
        phone: (await response).user.phone,
        role: (await response).user.role,
        ads: (await response).user.ads,
        saved: (await response).user.saved,
        store: (await response).user.store,
    }
    setUser(user);
    setPageLoad(false);
    router.replace("/(tabs)")
  }

  const logout = async () => {
    // await SecureStore.deleteItemAsync(TOKEN_KEY);
    // await SecureStore.deleteItemAsync(USER_KEY);
    setToken(null);
    setUser(null);
  };

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
        setListings
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