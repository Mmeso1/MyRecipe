import { Stack } from 'expo-router';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Playwrite-US-Trad': require('../assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf'),
    Raleway: require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
    Lato: require('../assets/fonts/Lato-Black.ttf'),
    Papyrus: require('../assets/fonts/papyrus.ttf'),
    'Hiragano-Sans-GB': require('../assets/fonts/hiragino-sans-gb-w3.otf'),
  });

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}
