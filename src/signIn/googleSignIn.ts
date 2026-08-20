import { GoogleSignin } from '@react-native-google-signin/google-signin';



export async function signInWithGoogle() {
  const server = process.env.SERVER
  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    await GoogleSignin.signOut();
    const response = await GoogleSignin.signIn();
    const idToken = response.data?.idToken;
    console.log(response);
    const backendResponse = await fetch(
      "http://192.168.1.3:500/api/auth/google",
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