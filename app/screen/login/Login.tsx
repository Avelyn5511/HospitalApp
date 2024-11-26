import { IntroStackParamList, PropsNavigation } from "@/app/types/types";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({
  navigation,
}: PropsNavigation<IntroStackParamList>) {
  const [cid, setCid] = useState("");
  const [pass, setPass] = useState("");

  const onPress = () => {
    signInWithEmailAndPassword(auth, cid + "@gmail.ru", pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("пряник");
        navigation.navigate("Notification");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View className="bg-white w-[100%] h-[812px] p-0 m-0 flex-1 justify-between items-center">
      <Image
        className="w-[100%]"
        source={require("../../../assets/images/clinic-conditions/loginupper.png")}
      />
      <Text className="text-primaryBlue text-center text-[35px] font-bold leading-normal tracking-[1.4px] w-[276px]  ">
        Добро пожаловать!
      </Text>
      <View>
        <TextInput
          className="rounded-[50px] bg-primaryBlue shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]  w-[276px] h-[23px] text-white text-sm p-[0px_5px_0px_5px] placeholder-white font-bold mb-[18px]"
          placeholder="CID"
          placeholderTextColor="white"
          value={cid}
          onChangeText={setCid}
        ></TextInput>
        <TextInput
          className="rounded-[50px] bg-primaryBlue shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]  w-[276px] h-[23px] text-white text-sm p-[0px_5px_0px_5px] placeholder-white font-bold"
          placeholder="Password"
          placeholderTextColor="white"
          value={pass}
          onChangeText={setPass}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={onPress}
        className="bg-primaryBlue w-[149px] h-[59px] items-center
        justify-center p-[17px_44px_17px_44px] rounded-[50]"
      >
        <Text className="text-lg text-white font-extrabold">Вход</Text>
      </TouchableOpacity>
      <Image
        className="w-[100%]"
        source={require("../../../assets/images/clinic-conditions/loginlover.png")}
      />
    </View>
  );
}
