import GlobalProvider from "@/Context/GlobalProvider";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import "react-native-reanimated";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    PalatinoLinotype: require("../assets/fonts/PalatinoLinotype.ttf"),
    OpenSans: require("../assets/fonts/OpenSans.ttf"),
    Nunito: require("../assets/fonts/Nunito.ttf"),
    OleoScript: require("../assets/fonts/OleoScript.ttf"),
    NunitoBold: require("../assets/fonts/NunitoBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
}

SplashScreen.preventAutoHideAsync();
