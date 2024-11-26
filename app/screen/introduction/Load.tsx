import { IntroStackParamList, PropsNavigation } from "@/app/types/types";
import { Animated, Image, StyleSheet, View } from "react-native";
import splash from "../../../assets/images/splash.png";

export default function Load({
  navigation,
}: PropsNavigation<IntroStackParamList>) {
  const fadeAnim = new Animated.Value(1);

  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 1500,
    useNativeDriver: false,
  }).start(() => {
    navigation.navigate("Departments");
  });

  return (
    <Animated.View style={[style.container, { left: fadeAnim }]}>
      <View style={style.containerImg}>
        <Image source={splash} style={style.img}></Image>
      </View>
    </Animated.View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    width: "100%",
  },

  containerImg: {
    position: "relative",
    left: -1,
  },

  img: {
    width: "101%",
    height: "100%",
    resizeMode: "cover",
  },
});
