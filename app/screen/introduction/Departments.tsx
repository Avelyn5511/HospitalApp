import { IntroStackParamList, PropsNavigation } from "@/app/types/types";
import {
  Animated,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Departments({
  navigation,
}: PropsNavigation<IntroStackParamList>) {
  const leftDepartments = [
    {
      text: "Урология",
      icon: require("../../../assets/images/clinic-departments/image 8.png"),
    },
    {
      text: "Флебология",
      icon: require("../../../assets/images/clinic-departments/image 9.png"),
    },
    {
      text: "Диетология",
      icon: require("../../../assets/images/clinic-departments/image 10.png"),
    },
    {
      text: "Неврология",
      icon: require("../../../assets/images/clinic-departments/image 11.png"),
    },
    {
      text: "Онкология",
      icon: require("../../../assets/images/clinic-departments/image 12.png"),
    },
    {
      text: "Дерматология",
      icon: require("../../../assets/images/clinic-departments/image 13.png"),
    },
    {
      text: "Косметология",
      icon: require("../../../assets/images/clinic-departments/image 14.png"),
    },
    {
      text: "Проктология",
      icon: require("../../../assets/images/clinic-departments/image 15.png"),
    },
    {
      text: "Эндоскопия",
      icon: require("../../../assets/images/clinic-departments/image 16.png"),
    },
    {
      text: "Терапия",
      icon: require("../../../assets/images/clinic-departments/image 17.png"),
    },
    {
      text: "Кардиология",
      icon: require("../../../assets/images/clinic-departments/image 18.png"),
    },
    {
      text: "Узи",
      icon: require("../../../assets/images/clinic-departments/image 19.png"),
    },
    {
      text: "Физиотерапия",
      icon: require("../../../assets/images/clinic-departments/image 20.png"),
    },
  ];

  const rightDepartments = [
    {
      text: "Детский массаж",
      icon: require("../../../assets/images/clinic-departments/image 21.png"),
    },
    {
      text: "Гинеколо гия",
      icon: require("../../../assets/images/clinic-departments/image 22.png"),
    },
    {
      text: "Гастроэнтерология",
      icon: require("../../../assets/images/clinic-departments/image 23.png"),
    },
    {
      text: "Педиатрия",
      icon: require("../../../assets/images/clinic-departments/image 24.png"),
    },
    {
      text: "Хирургия",
      icon: require("../../../assets/images/clinic-departments/image 25.png"),
    },
    {
      text: "Эндокринология",
      icon: require("../../../assets/images/clinic-departments/image 26.png"),
    },
    {
      text: "Лаборато рия",
      icon: require("../../../assets/images/clinic-departments/image 27.png"),
    },
  ];

  const fadeAnim = new Animated.Value(1);

  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 2000,
    useNativeDriver: false,
  }).start(() => {
    navigation.navigate("Start");
  });

  return (
    <Animated.View style={[style.departments, { left: fadeAnim }]}>
      <Text className="text-xl  font-extrabold mt-[44px] ml-[22px]">
        Отделения клиники
      </Text>
      <ScrollView contentContainerStyle={style.container}>
        <View style={style.leftColumns} className="font-palatino">
          {leftDepartments.map(({ text, icon }, index) => (
            <View key={index} style={style.leftItem}>
              <Image source={icon} />
              <Text style={style.leftItemText}>{text}</Text>
            </View>
          ))}
        </View>
        <View style={style.rightColumns}>
          {rightDepartments.map(({ text, icon }, index) => (
            <View key={index} style={style.rightItem}>
              <Image source={icon} />
              <Text style={style.rightItemText}>{text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar barStyle="dark-content" />
    </Animated.View>
  );
}

const style = StyleSheet.create({
  departments: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    width: 375,
    height: 812,
  },

  leftColumns: {
    display: "flex",
    flexDirection: "column",
    width: 187,
    height: 700,
    marginLeft: 22,
    marginTop: 12,
    alignItems: "flex-start",
    alignContent: "space-between",
    justifyContent: "space-between",
  },

  rightColumns: {
    display: "flex",
    flexDirection: "column",
    marginRight: 27,
    marginTop: 12,
    width: 141,
    height: 390,
    alignContent: "space-between",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  leftItem: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },

  rightItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },

  leftItemText: {
    fontSize: 16,
    color: "#000",
    width: 130,
    height: 37,
    fontWeight: 700,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10,
  },

  rightItemText: {
    width: 93,
    height: 37,
    fontSize: 16,
    color: "#000",
    fontWeight: 700,
    fontStyle: "normal",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10,
  },
});
