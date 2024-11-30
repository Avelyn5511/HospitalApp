import { LoggedStackParamList, PropsNavigation } from "@/app/types/types";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import {
  Animated,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface ErrorProps {
  text: string | null;
}

export default function Login({
  navigation,
}: PropsNavigation<LoggedStackParamList>) {
  const [cid, setCid] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState<ErrorProps>({ text: null });

  const [errorInput] = useState(new Animated.Value(1));
  const [nextScreen] = useState(new Animated.Value(1));

  const onPress = (): void => {
    if (!cid || !pass) {
      setError({ text: "Пожалуйста, введите CID и пароль" });
      animatedError();
      return;
    }

    signInWithEmailAndPassword(auth, cid + "@gmail.ru", pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setError({ text: "Успешный вход" });

        Animated.timing(nextScreen, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate("Notification");
        });
      })
      .catch((error) => {
        if (error.code !== cid && error.code !== pass) {
          setError({ text: "Неверный CID или Пароль" });
        }
        animatedError();
      });
  };

  const animatedError = () => {
    setTimeout(() => {
      Animated.timing(errorInput, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setError({ text: null });
        errorInput.setValue(1);
      });
    }, 100);
  };

  return (
    <View className="bg-white w-full h-full flex-1 justify-between items-center">
      {error.text && (
        <Animated.View
          style={{
            opacity: errorInput,
            position: "absolute",
            top: 320,
            left: "50%",
            transform: [{ translateX: -125 }],
          }}
        >
          <Text
            className="text-white text-[20px] bg-primaryBlue w-[250] h-[100%] text-center
         px-3 py-4 font-bold"
          >
            {error.text}
          </Text>
        </Animated.View>
      )}

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
