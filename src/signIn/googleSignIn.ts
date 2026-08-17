import { GoogleSignin } from '@react-native-google-signin/google-signin';


export async function signInWithGoogle() {
  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    await GoogleSignin.signOut();
    const response = await GoogleSignin.signIn();

    return response;
  } catch (error) {
    console.error('Google login failed:', error);
    throw error;
  }
}