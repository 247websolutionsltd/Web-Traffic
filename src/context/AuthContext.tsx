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
    name: string | null | undefined;
    email: string | undefined;
    profilePicture: string | null | undefined;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginGoogle: () => void;
  logout: () => Promise<void>;
  pageLoad:boolean;
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

  const isAuthenticated = !!token;

  const loginGoogle = async()=>{
    setPageLoad(true);
    const response = signInWithGoogle();
    const user = {
        id: (await response).data?.user.id,
        name: (await response).data?.user.name,
        email: (await response).data?.user.email,
        profilePicture: (await response).data?.user.photo,
    }
    setUser(user);
    setPageLoad(false);
    router.replace("/(tabs)")
  }
//   useEffect(() => {
//     loadSession();
//   }, []);

//   const loadSession = async () => {
//     try {
//       const storedToken =
//         await SecureStore.getItemAsync(TOKEN_KEY);

//       const storedUser =
//         await SecureStore.getItemAsync(USER_KEY);

//       if (storedToken) {
//         setToken(storedToken);
//       }

//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     } catch (error) {
//       console.error(
//         'Failed to load authentication session:',
//         error
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (
//     newToken: string,
//     newUser: User
//   ) => {
//     await SecureStore.setItemAsync(
//       TOKEN_KEY,
//       newToken
//     );

//     await SecureStore.setItemAsync(
//       USER_KEY,
//       JSON.stringify(newUser)
//     );

//     setToken(newToken);
//     setUser(newUser);
//   };

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
        pageLoad
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