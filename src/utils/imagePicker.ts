import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const pickProfileImage = async () => {
  const permission =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    Alert.alert(
      "Permission required",
      "Please allow access to your photos."
    );

    return null;
  }

  const result =
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

  if (result.canceled) {
    return null;
  }

  return result.assets[0];
};