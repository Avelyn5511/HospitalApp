import { HomeTabStacks, PropsNavigation } from "@/app/types/types";
import JamesDoctor from "@/assets/images/clinic-home/JamesDoctor.png";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Doctors {
  profession: string;
  firstName: string;
  specialization: string;
  image: ImageSourcePropType;
  inLogin: boolean;
}

const doctors: Doctors[] = [
  {
    profession: "Врач",
    firstName: "Джеймс",
    specialization: "Ортопед",
    image: JamesDoctor,
    inLogin: false,
  },
  {
    profession: "Врач",
    firstName: "Романова",
    specialization: "Кардиохирург",
    image: require("../../../../../../assets/images/clinic-home/RomanovaDoctor.png"),
    inLogin: true,
  },
  {
    profession: "Врач",
    firstName: "Быков",
    specialization: "Терапевт",
    image: require("../../../../../../assets/images/clinic-home/valentin2.jpg"),
    inLogin: true,
  },
];

interface FilterOption {
  specialization: string;
  iconDoctor: ImageSourcePropType;
}
const filterOptions: FilterOption[] = [
  {
    specialization: "Кардиохирург",
    iconDoctor: require("../../../../../../assets/images/clinic-home/HeartDoctor.png"),
  },
];

const Appointment = ({ navigation }: PropsNavigation<HomeTabStacks>) => {
  const [searchDoctor, setSearchDoctor] = useState<string>("");
  const [filteredDoctors, setFilteredDoctors] = useState<Doctors[]>(doctors);
  const [specDoctor, setSpecDoctor] = useState<string | null>(null);

  useEffect(() => {
    if (searchDoctor.length > 0) {
      const filteredDoctors = doctors.filter(
        (doctor) =>
          doctor.profession
            .toLowerCase()
            .includes(searchDoctor.toLowerCase()) ||
          doctor.firstName.toLowerCase().includes(searchDoctor.toLowerCase()) ||
          doctor.specialization
            .toLowerCase()
            .includes(searchDoctor.toLowerCase()),
      );
      setFilteredDoctors(filteredDoctors);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [searchDoctor]);

  const showAllDoctors = () => {
    setFilteredDoctors(doctors);
    setSearchDoctor("");
    setSpecDoctor(null);
  };

  const handleFilterClick = (specialization: string) => {
    if (specDoctor === specialization) {
      setSpecDoctor(null);
    } else {
      setSpecDoctor(specialization);
    }
    setFilteredDoctors(
      doctors.filter((doctor) => doctor.specialization === specialization),
    );
    setSearchDoctor("");
  };

  const goToSelectDate = (): void => {
    navigation.navigate("SelectDate");
  };

  return (
    <SafeAreaView className="bg-white w-[100%] h-[875]">
      <View className="mt-[12] ml-[21] flex flex-row justify-between">
        <Image
          source={require("../../../../../../assets/images/clinic-home/IconProfile.png")}
        />
        <Text className="text-[18px]  w-[160] h-[24] mt-[19] text-[#324F5E] font-assistant">
          Запись на прием
        </Text>
      </View>
      <TextInput
        value={searchDoctor}
        onChangeText={setSearchDoctor}
        className="bg-white px-[15] py-[8] mt-[106] left-[21] text-[12px] font-nunitoBold max-w-[272] rounded-[50px] shadow-custom text-custom-blue"
        placeholder="Попробуйте 'Ортопед'"
        placeholderTextColor={"rgba(0, 137, 255, 0.30)"}
      />
      <View className="h-[39] mt-[19] ml-[29] flex flex-row">
        <TouchableOpacity
          onPress={showAllDoctors}
          className="bg-[#0062FF] mr-2 w-[38] h-[38] flex items-center justify-center rounded-[10]"
        >
          <Text className="text-[14px] font-semibold font-assistant text-white">
            Все
          </Text>
        </TouchableOpacity>
        {filterOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleFilterClick(option.specialization)}
            className={`w-[113] h-[39] flex flex-row items-center justify-start rounded-md px-2 ${
              specDoctor === option.specialization ? "bg-[#0062FF]" : "bg-none"
            }`}
          >
            {option.iconDoctor && (
              <View className="rounded-[50%] bg-custom-bg-icon w-5 h-5 flex items-center justify-center">
                <Image source={option.iconDoctor} className="w-[14] h-[14]" />
              </View>
            )}
            <Text
              className={`text-[11px] font-semibold font-assistant text-[#33333] flex flex-row items-center justify-center ${
                specDoctor === option.specialization
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              {option.specialization}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="mt-4">
        {filteredDoctors.map(
          ({ profession, firstName, specialization, image }, index) => (
            <TouchableOpacity onPress={goToSelectDate}>
              <View
                key={index}
                className="w-[305] h-[70] rounded-[10px] border flex flex-row items-center  mb-4 ml-[21]"
              >
                <View className="w-[61] h-[43] flex-row flex justify-center items-center">
                  <Image
                    source={image}
                    className="rounded-full w-[50%] h-[75%] border-amber-300 border"
                  />
                </View>

                <View className="w-[117]">
                  <Text className="font-assistant text-[16px] text-[#324F5E]">
                    {profession}
                  </Text>
                  <Text className="font-assistant text-[16px] text-[#324F5E]">
                    {firstName}
                  </Text>
                  <Text className="font-assistant text-[12px] text-[#96A7AF]">
                    {specialization}
                  </Text>
                </View>
                {/* <TouchableOpacity className="ml-[80] gap-x-[2px] flex flex-row items-center justify-center w-9 h-9 bg-blue-50 rounded-full"> */}
                {/*   <View className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> */}
                {/*   <View className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> */}
                {/*   <View className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> */}
                {/* </TouchableOpacity> */}
              </View>
            </TouchableOpacity>
          ),
        )}
      </View>

      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default Appointment;
