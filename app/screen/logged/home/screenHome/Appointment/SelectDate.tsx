import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

let receptionTime = [
  {
    time: "09:00",
    available: true,
  },
  {
    time: "11:00",
    available: true,
  },
  {
    time: "12:00",
    available: true,
  },
  {
    time: "14:00",
    available: true,
  },
  {
    time: "15:00",
    available: true,
  },
  {
    time: "17:00",
    available: true,
  },
];

const SelectDate = () => {
  const [date, setDate] = useState(new Date());
  const [selectTime, setSelectTime] = useState<null | string>(null);

  const makeAppointment = () => {
    setDate(new Date());
  };

  const handleSelectTime = (time: null | string) => {
    setSelectTime(time);
  };

  console.log(date);

  return (
    <SafeAreaView className="flex justify-center items-center mt-5">
      <View className="relative rounded-[50] h-[425] w-[337] pt-3">
        <Svg
          height="100%"
          width="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <Defs>
            <LinearGradient id="gradientBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="#0089FF" />
              <Stop offset="100%" stopColor="#4CC7FF" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width="337"
            height="413"
            fill="url(#gradientBg)"
            rx="50"
          />
        </Svg>

        <DateTimePicker
          value={date}
          mode="date"
          display="inline"
          themeVariant="dark"
          accentColor="white"
        />
      </View>

      <Text className="text-[20px] font-nunito mt-5">Выбор времени</Text>
      <View className="flex flex-row w-[320] flex-wrap items-center justify-center mt-5 mb-5">
        {receptionTime.map(({ time }, index) => (
          <TouchableOpacity
            key={index}
            className={`w-[80] h-[35] flex justify-center items-center rounded-[50] relative m-2.5 ${
              selectTime === time ? "bg-primaryBlue" : "bg-transparent"
            }
        `}
            onPress={() => handleSelectTime(time)}
          >
            {selectTime !== time && (
              <Svg height="35" width="80">
                <Defs>
                  <LinearGradient
                    id={`grad-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <Stop offset="0%" stopColor="#0089FF" />
                    <Stop offset="100%" stopColor="#4CC7FF" />
                  </LinearGradient>
                </Defs>
                <Rect
                  x="0"
                  y="0"
                  width="80"
                  height="35"
                  fill={`url(#grad-${index})`}
                  rx="18"
                />
              </Svg>
            )}
            <Text className="text-white text-[12px] font-nunito font-semibold absolute">
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={makeAppointment}
        className="w-[218] h-[52] mt-2 py-2 px-[53] bg-primaryBlue rounded-[25] flex justify-center items-center"
      >
        <Text className="text-white text-[18px] font-nunitoBold ">
          Записаться
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectDate;
