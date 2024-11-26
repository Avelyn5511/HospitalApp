import { IntroStackParamList, PropsNavigation } from "@/app/types/types";
import doctor from "@/assets/images/сlinic-start/doctor.png";
import lower from "@/assets/images/сlinic-start/loverImg.png";
import upper from "@/assets/images/сlinic-start/upperImg.png";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import circle from "../../../assets/images/сlinic-start/ellipse.png";

export default function Start({
  navigation,
}: PropsNavigation<IntroStackParamList>) {
  const onPress = () => {
    navigation.navigate("Conditions");
  };

  return (
    <View style={style.container}>
      <Image style={style.upperImg} source={upper} />
      <Image source={doctor} />
      <Image source={circle} style={style.ellipseUp} />
      <Image source={circle} style={style.ellipseCenter} />
      <Image source={circle} style={style.ellipseDown} />
      <TouchableOpacity style={style.btn} onPress={onPress}>
        <Text style={style.textBtn}>Начать</Text>
      </TouchableOpacity>
      <Image style={style.lowerImg} source={lower} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 812,
    marginLeft: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ellipseUp: {
    position: "absolute",
    top: 177,
    left: 294,
  },

  ellipseCenter: {
    position: "absolute",
    top: 219,
    left: 294,
  },

  ellipseDown: {
    position: "absolute",
    top: 252,
    left: 276,
  },

  upperImg: {
    width: 175,
    height: 115,
    position: "absolute",
    left: 223,
    top: 0,
  },

  lowerImg: {
    width: 406,
    height: 134,
    position: "absolute",
    top: 723,
  },

  btn: {
    width: 165,
    height: 59,
    padding: 17,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#0089FF",
    position: "absolute",
    left: 105,
    top: 554,
  },

  textBtn: {
    color: "#FFF",
    fontSize: 18,
  },
});
