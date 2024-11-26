import { IntroStackParamList, PropsNavigation } from "@/app/types/types";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
        navigation.navigate("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.textInput}
        placeholder="CID"
        value={cid}
        onChangeText={setCid}
      ></TextInput>
      <TextInput
        style={style.textInput}
        placeholder="Password"
        value={pass}
        onChangeText={setPass}
      ></TextInput>
      <TouchableOpacity onPress={onPress}>
        <Text>Вход</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
  },

  textInput: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
