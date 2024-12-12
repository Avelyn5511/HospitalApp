import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BurgerMenu = () => {
  return (
    <View>
      <SafeAreaView className="bg-white w-[100%] h-[100%]">
        <View className="flex-row  flex  justify-center">
          <Text className=" w-[180] text-center shadow-custom-sd h-[30] text-[30px] mt-[76] font-inter font-bold">
            Настройки
          </Text>
        </View>
        <View className="flex flex-col mt-10 ml-[15] ">
          <View>
            <Text className="font-inter text-[16px] font-semibold ml-2">
              Аккаунт
            </Text>
          </View>
          <View className="w-[342] h-[162] bg-custom-bg-burger mt-[21] flex flex-col  pl-3 gap-[8] rounded-[6px]">
            <TouchableOpacity className="flex flex-row items-center mt-3">
              <Image
                source={require("../../../../../assets/images/burger/profile.png")}
              />
              <Text className="text-[16px] font-inter font-semibold pl-9">
                Редактировать профиль
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require("../../../../../assets/images/burger/security.png")}
              />
              <Text className="text-[16px] font-inter font-semibold pl-9">
                Безопасность
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require("../../../../../assets/images/burger/notification.png")}
              />
              <Text className="text-[16px] font-inter font-semibold pl-9">
                Уведомления
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require("../../../../../assets/images/burger/lock.png")}
              />
              <Text className="text-[16px] font-inter font-semibold pl-9">
                Конфиденциальность
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="font-inter text-[16px] font-semibold ml-2 mt-[62]">
            Действия
          </Text>
          <View className="w-[342] h-[120] bg-custom-bg-burger mt-[21] flex flex-col  pl-3 gap-[9] rounded-[6px]">
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require("../../../../../assets/images/burger/flag.png")}
              />
              <Text className="text-[16px] font-inter font-semibold pl-9">
                Сообщить об ошибке
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require("../../../../../assets/images/burger/question.png")}
              />
              <Text className="text-[16px] font-inter font-semibold pl-9">
                Помощь и поддержка
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center">
              <Image
                source={require("../../../../../assets/images/burger/exit.png")}
              />
              <Text className="text-[16px] font-inter font-semibold pl-9">
                Выход
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BurgerMenu;
