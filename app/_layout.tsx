import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import "react-native-reanimated";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    PalatinoLinotypeRegular: require("../assets/fonts/PalatinoLinotype/palatinolinotype_roman.ttf"),
    PalatinoLinotypeBold: require("../assets/fonts/PalatinoLinotype/palatinolinotype_bold.ttf"),

    OleoScriptBold: require("../assets/fonts/OleoScript/OleoScript-Bold.ttf"),
    OleoScriptRegular: require("../assets/fonts/OleoScript/OleoScript-Regular.ttf"),

    OpenSansRegular: require("../assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("../assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    OpenSansMedium: require("../assets/fonts/OpenSans/OpenSans-Medium.ttf"),
    OpenSansLight: require("../assets/fonts/OpenSans/OpenSans-Light.ttf"),
    OpenSansExtraBold: require("../assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),
    OpenSansBold: require("../assets/fonts/OpenSans/OpenSans-Bold.ttf"),

    NunitoLight: require("../assets/fonts/Nunito/Nunito-Light.ttf"),
    NunitoExtraLight: require("../assets/fonts/Nunito/Nunito-ExtraLight.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito/Nunito-Regular.ttf"),
    NunitoMedium: require("../assets/fonts/Nunito/Nunito-Medium.ttf"),
    NunitoSemiBold: require("../assets/fonts/Nunito/Nunito-SemiBold.ttf"),
    NunitoBold: require("../assets/fonts/Nunito/Nunito-Bold.ttf"),
    NunitoExtraBold: require("../assets/fonts/Nunito/Nunito-ExtraBold.ttf"),

    AssistantLight: require("../assets/fonts/Assistant/Assistant-Light.ttf"),
    AssistantRegular: require("../assets/fonts/Assistant/Assistant-Regular.ttf"),
    AssistantExtraLight: require("../assets/fonts/Assistant/Assistant-ExtraLight.ttf"),
    AssistantMedium: require("../assets/fonts/Assistant/Assistant-Medium.ttf"),
    AssistantSemiBold: require("../assets/fonts/Assistant/Assistant-SemiBold.ttf"),
    AssistantBold: require("../assets/fonts/Assistant/Assistant-Bold.ttf"),
    AssistantExtraBold: require("../assets/fonts/Assistant/Assistant-ExtraBold.ttf"),

    InterRegular: require("../assets/fonts/Inter/Inter_18pt-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/Inter/Inter_18pt-SemiBold.ttf"),
    InterBold: require("../assets/fonts/Inter/Inter_18pt-Bold.ttf"),
    InterExtraBold: require("../assets/fonts/Inter/Inter_18pt-ExtraBold.ttf"),
    InterExtraLight: require("../assets/fonts/Inter/Inter_18pt-ExtraLight.ttf"),
    InterLight: require("../assets/fonts/Inter/Inter_18pt-Light.ttf"),
    InterMedium: require("../assets/fonts/Inter/Inter_18pt-Medium.ttf"),

    OverPassRegular: require("../assets/fonts/Overpass/Overpass-Regular.ttf"),
    OverPassBold: require("../assets/fonts/Overpass/Overpass-Bold.ttf"),
    OverPassMedium: require("../assets/fonts/Overpass/Overpass-Medium.ttf"),
    OverPassSemiBold: require("../assets/fonts/Overpass/Overpass-SemiBold.ttf"),
    OverPassExtraBold: require("../assets/fonts/Overpass/Overpass-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

SplashScreen.preventAutoHideAsync();
