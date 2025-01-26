import Avatar from "@/app/screen/logged/home/common/Avatar";
import { CircleWithImage } from "@/app/screen/logged/home/common/CircleWithImage";
import { HomeTabStacks, PropsNavigation } from "@/app/types/types";
import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const IconsMark = () => (
  <Svg width="16" height="22" viewBox="0 0 16 22" fill="none">
    <Path
      d="M8 2.5C10.2 2.5 12 4.3 12 6.5C12 8.6 9.9 12 8 14.4C6.1 11.9 4 8.6 4 6.5C4 4.3 5.8 2.5 8 2.5ZM8 0.5C4.7 0.5 2 3.2 2 6.5C2 11 8 17.5 8 17.5C8 17.5 14 10.9 14 6.5C14 3.2 11.3 0.5 8 0.5ZM8 4.5C6.9 4.5 6 5.4 6 6.5C6 7.6 6.9 8.5 8 8.5C9.1 8.5 10 7.6 10 6.5C10 5.4 9.1 4.5 8 4.5ZM16 17.5C16 19.7 12.4 21.5 8 21.5C3.6 21.5 0 19.7 0 17.5C0 16.2 1.2 15.1 3.1 14.3L3.7 15.2C2.7 15.7 2 16.3 2 17C2 18.4 4.7 19.5 8 19.5C11.3 19.5 14 18.4 14 17C14 16.3 13.3 15.7 12.2 15.2L12.8 14.3C14.8 15.1 16 16.2 16 17.5Z"
      fill="#565D6A"
    />
  </Svg>
);

const IconsCalendar = () => (
  <Svg width="12" height="13" viewBox="0 0 12 14" fill="none">
    <Path
      d="M4 6V7.33333H2.66667V6H4ZM6.66667 6V7.33333H5.33333V6H6.66667ZM9.33333 6V7.33333H8V6H9.33333ZM10.6667 1.33333C11.0203 1.33333 11.3594 1.47381 11.6095 1.72386C11.8595 1.97391 12 2.31304 12 2.66667V12C12 12.3536 11.8595 12.6928 11.6095 12.9428C11.3594 13.1929 11.0203 13.3333 10.6667 13.3333H1.33333C0.593333 13.3333 0 12.7333 0 12V2.66667C0 2.31304 0.140476 1.97391 0.390524 1.72386C0.640573 1.47381 0.979711 1.33333 1.33333 1.33333H2V0H3.33333V1.33333H8.66667V0H10V1.33333H10.6667ZM10.6667 12V4.66667H1.33333V12H10.6667ZM4 8.66667V10H2.66667V8.66667H4ZM6.66667 8.66667V10H5.33333V8.66667H6.66667ZM9.33333 8.66667V10H8V8.66667H9.33333Z"
      fill="#565D6A"
    />
  </Svg>
);

const IconsWatch = () => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <Path
      d="M6.66667 12C9.6 12 12 9.6 12 6.66667C12 3.73333 9.6 1.33333 6.66667 1.33333C3.73333 1.33333 1.33333 3.73333 1.33333 6.66667C1.33333 9.6 3.73333 12 6.66667 12ZM6.66667 0C10.3333 0 13.3333 3 13.3333 6.66667C13.3333 10.3333 10.3333 13.3333 6.66667 13.3333C3 13.3333 0 10.3333 0 6.66667C0 3 3 0 6.66667 0ZM7 7.2L3.8 9.06667L3.33333 8.13333L6 6.6V3.33333H7V7.2Z"
      fill="#565D6A"
    />
  </Svg>
);

export default function Home({ navigation }: PropsNavigation<HomeTabStacks>) {
  const today = new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // навигация
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
    navigation.navigate("Appointment");
  };

  const goToCourseTreatment = (): void => {
    navigation.navigate("CourseTreatment");
  };

  const goToExercise = (): void => {
    navigation.navigate("Exercise");
  };

  const goToBurgerMenu = (): void => {
    navigation.navigate("BurgerMenu");
  };

  return (
    <SafeAreaView className="bg-white w-[100%] pl-4 h-[100%]">
      <View className="flex flex-col justify-between">
        {/* ///Первый блок */}
        <View className="flex flex-row justify-between items-center">
          <Avatar />
          <TouchableOpacity
            onPress={goToBurgerMenu}
            className=" absolute right-0 mr-[36px]"
          >
            <View className="space-y-3">
              <View className="w-[20] h-[2] bg-teal-400 rounded-full mb-[6] ml-1" />
              <View className="w-[20] h-[2] bg-teal-400 rounded-full mb-[6] " />
              <View className="w-[20] h-[2] bg-teal-400 rounded-full ml-1" />
            </View>
          </TouchableOpacity>
        </View>
        <Text className="font-inter-semibold mt-8 mb-2 text-base text-primaryBlack">
          Ваша клиника
        </Text>
        <View className="p-4 w-auto border bg-white border-white rounded-[16px] shadow-customGray flex flex-col gap-2">
          <View className="flex flex-row p-2  items-center gap-2 border border-[#F0F0F0] rounded-[8px]">
            <Text className="px-3 py-3.5 bg-[#00AFB9] rounded-[8px] text-lg font-inter-semibold text-white border-[1.5px] border-[#CDCFD4]">
              {/* В дальнейшем будет лого */}
              Лого
            </Text>
            <View className="mr-2">
              <Text className="font-inter-semibold text-base text-primaryBlack">
                Наименование
              </Text>
              <Text className="w-[203] max-h-[75] font-inter-regular text-xs text-primaryDarkGray leading-normal tracking-[1.2]">
                {" "}
                Наша цель – предоставить высококачественные медицинские услуги в
                области диагностики и лечения заболеваний.
              </Text>
            </View>
            <View className="p-2">
              <IconsMark />
            </View>
          </View>
          <View className="flex flex-row gap-2">
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-2">
                <IconsCalendar />
                <Text className="font-inter-regular text-[10px] text-primaryBlack ">
                  {today}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex flex-row items-center gap-2">
                <IconsWatch />
                <Text className="font-inter-regular text-[10px] text-primaryBlack ">
                  время работы
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* ///Первый блок */}

        {/* ///Второй блок */}
        <Text className="font-inter-semibold mt-8 mb-2 text-base text-primaryBlack">
          Функционал
        </Text>
        <View className="flex flex-row ">
          <TouchableOpacity onPress={goToAppointmentDoctor}>
            <CircleWithImage
              size={60}
              textIcon="Запись на прием к врачу"
              bgType="purple"
              iconType="medicalTool"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <CircleWithImage
              size={60}
              textIcon="Медицинские данные"
              bgType="orange"
              iconType="medicalRecord"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <CircleWithImage
              size={60}
              textIcon="Результаты анализов"
              bgType="blue"
              iconType="dna"
            />
          </TouchableOpacity>
          <TouchableOpacity className="">
            <CircleWithImage
              size={60}
              textIcon="Врачи"
              bgType="green"
              iconType="hospital"
              textStyle="pb-[30]"
            />
          </TouchableOpacity>
        </View>
        {/* ///Второй блок */}

        {/* ///Третий Блок */}

        <Text className="font-inter-semibold mt-9 mb-2 text-base text-primaryBlack">
          Обновления и новости
        </Text>

        <View className="p-4 border mt-2 bg-white border-white rounded-[16px] shadow-customGray flex justify-center items-center">
          <Image
            className="rounded-[16] w-[326] h-[146] "
            source={require("../../../../assets/images/ClinicHomeIcons/AllMedicalImg.png")}
          />
          <Text className="text-[#1987FB] text-xl font-overPass-bold w-[120] left-[42]  leading-[1.1] absolute">
            Все о медецине и работе клинике
          </Text>
        </View>
        {/* ///Третий Блок */}
      </View>

      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
