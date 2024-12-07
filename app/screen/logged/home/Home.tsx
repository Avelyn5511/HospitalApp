import { HomeTabStacks, PropsNavigation } from "@/app/types/types";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }: PropsNavigation<HomeTabStacks>) {
  const goToStateHealth = (): void => {
    navigation.navigate("StateBloodPressure");
  };
  const goToLevelBloody = (): void => {
    navigation.navigate("StateLevelBloody");
  };
  const goToBloodPressure = (): void => {
    navigation.navigate("StateHealth");
  };

  const goToAppointmentDoctor = (): void => {
    navigation.navigate("AppointmentDoctor");
  };

  const goToCourseTreatment = (): void => {
    navigation.navigate("CourseTreatment");
  };

  const goToExercise = (): void => {
    navigation.navigate("Exercise");
  };

  return (
    <SafeAreaView className="bg-white w-[100%] h-[100%]">
      <View className="mt-[12] ml-[21]">
        {/* в дальнейшем будет подтягиваться фото из профиля */}
        <Image
          source={require("../../../../assets/images/Clinic-notification/IconProfile.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
          marginLeft: 21,
          marginTop: 160,
          gap: 10,
          width: 358,
          height: 150,
        }}
      >
        <TouchableOpacity
          onPress={goToAppointmentDoctor}
          activeOpacity={0.6}
          className="flex w-[120] h-[140] py-[11] bg-[#73E6ED] rounded-[15]"
        >
          <Image
            source={require("../../../../assets/images/Clinic-notification/iconUser.png")}
          />
          <Text
            style={{ marginTop: 17, paddingLeft: 2 }}
            className="text-white text-[16px] font-extrabold leading-normal"
          >
            Запись на прием к врачу
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToCourseTreatment}
          activeOpacity={0.6}
          style={{ backgroundColor: "#ED7390", paddingTop: 11, paddingLeft: 4 }}
          className="flex w-[120] h-full  rounded-[15]"
        >
          <Image
            source={require("../../../../assets/images/Clinic-notification/ic_round-medication.png")}
          />
          <Text
            style={{ marginTop: 24 }}
            className="text-white text-[16px] font-extrabold"
          >
            Курс лечения
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToExercise}
          activeOpacity={0.6}
          style={{ backgroundColor: "#E59850" }}
          className="flex-1 w-[100%] h-full rounded-[15]"
        >
          <Image
            source={require("../../../../assets/images/Clinic-notification/u_calendar-alt.png")}
          />
          <Text
            style={{ marginTop: 21, paddingLeft: 2 }}
            className="text-white text-[14px] font-extrabold"
          >
            Упражнения
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-[52] ml-[21]">
        <Text className="font-bold text-[18px] leading-8 mb-[20]">
          Медицинские данные
        </Text>
        <View>
          <TouchableOpacity
            onPress={goToBloodPressure}
            className="flex flex-row gap-2.5 mb-2.5 items-center px-4"
          >
            <Image
              source={require("../../../../assets/images/Clinic-notification/heart.png")}
            />
            <Text className="font-normal text-[16px] overflow-hidden">
              Дневник самоконтроля АД
            </Text>
            <Image
              source={require("../../../../assets/images/Clinic-notification/symbol.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToLevelBloody}
            className="flex flex-row gap-[12] mb-2.5 items-center px-[12px]"
          >
            <Image
              source={require("../../../../assets/images/Clinic-notification/blood.png")}
            />
            <Text className="font-normal text-[16px] overflow-hidden">
              Уровень глюкозы в крови
            </Text>
            <Image
              source={require("../../../../assets/images/Clinic-notification/symbol.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goToStateHealth}
            className="flex flex-row gap-[8] items-center px-[10px]"
          >
            <Image
              source={require("../../../../assets/images/Clinic-notification/protect.png")}
            />
            <Text className="font-normal text-[16px] overflow-hidden">
              Дневник общего самочувствия
            </Text>
            <Image
              source={require("../../../../assets/images/Clinic-notification/symbol.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
