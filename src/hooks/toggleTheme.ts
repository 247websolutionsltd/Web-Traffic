import { Appearance, useColorScheme } from "react-native";

export default function toggleTheme (){
    const scheme = useColorScheme();
    Appearance.setColorScheme(scheme==='dark' ? 'light' : 'dark');
  }