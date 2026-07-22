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
      </Stack>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}