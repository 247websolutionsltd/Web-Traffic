import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboard" />
        <Stack.Screen name="setup" />
        <Stack.Screen name="category" />
        <Stack.Screen name="detail" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="myAds" />
        <Stack.Screen name="saved" />
        <Stack.Screen name="[store]" />
        <Stack.Screen name="myStore" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="stores" />
        <Stack.Screen name="store" />
        <Stack.Screen name="createStore" />
        <Stack.Screen name="featured" />
        <Stack.Screen name="boost" />
        <Stack.Screen name="live" />
        <Stack.Screen
         name="chat" 
         options={{ 
          presentation: 'modal',
          animation: 'slide_from_right',
        }} 
         />
        <Stack.Screen
         name="create" 
         options={{ 
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }} 
         />
      </Stack>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}