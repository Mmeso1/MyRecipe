import { SplashScreen, Stack } from 'expo-router';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding before the app is ready
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Playwrite-US-Trad': require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),
    Raleway: require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
    Lato: require('../assets/fonts/Lato-Black.ttf'),
    Papyrus: require('../assets/fonts/papyrus.ttf'),
    'Hiragano-Sans-GB': require('../assets/fonts/hiragino-sans-gb-w3.otf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      console.log('Fonts loaded');
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}
