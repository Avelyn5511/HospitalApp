import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
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

export default function Login() {
  const [cid, setCid] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState<ErrorProps>({ text: null });

  const [errorInput] = useState(new Animated.Value(1));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onPress = async () => {
    if (!cid || !pass) {
      setError({ text: "Пожалуйста, введите CID и пароль" });
      animatedError();
      return;
    }

    signInWithEmailAndPassword(auth, cid + "@gmail.com", pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsSubmitting(true);
      })
      .catch((error) => {
          console.log(error, )
        setError({ text: "Неверный СID или Password" });
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
    }, 1000);
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
      <Text className="text-primaryBlue text-center text-[35px] font-nunitoBold font-bold leading-normal tracking-[1.4px] w-[276px]  ">
        Добро пожаловать!
      </Text>
      <View>
        <TextInput
          className="rounded-[50px] bg-primaryBlue shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]  w-[276px] h-[23px] text-white text-sm p-[0px_5px_0px_5px] placeholder-white font-bold mb-[18px] font-oleo"
          placeholder="CID"
          placeholderTextColor="white"
          value={cid}
          onChangeText={setCid}
        ></TextInput>
        <TextInput
          className="rounded-[50px] bg-primaryBlue shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]  w-[276px] h-[23px] text-white text-sm p-[0px_5px_0px_5px] placeholder-white font-bold font-oleo"
          placeholder="Password"
          placeholderTextColor="white"
          value={pass}
          onChangeText={setPass}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={onPress}
        className="bg-primaryBlue w-100% h-[59px] items-center
        justify-center p-[17px_44px_17px_44px] rounded-[50]"
      >
        <Text className="text-lg text-white font-extrabold">
          {isSubmitting ? "Загрузка..." : "Вход"}
        </Text>
      </TouchableOpacity>
      <Image
        className="w-[100%]"
        source={require("../../../assets/images/clinic-conditions/loginlover.png")}
      />
    </View>
  );
}
