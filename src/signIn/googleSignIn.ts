import { GoogleSignin } from '@react-native-google-signin/google-signin';

const base = process.env.EXPO_PUBLIC_BASE_URL;

export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    await GoogleSignin.signOut();
    const response = await GoogleSignin.signIn();
    const idToken = response.data?.idToken;
    console.log(response);
    const backendResponse = await fetch(
      ` https://webtraffic-backend-1.onrender.com/api/auth/google`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken,
        }),
      }
    );
    const data = await backendResponse.json();
    return data;
  } catch (error) {
    console.error('Google login failed:', error);
    throw error;
  }
}