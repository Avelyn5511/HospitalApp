import Login from "@/app/screen/login/Login";
import IntroductionStack from "@/app/stacks/IntroductionStack";
import LoggedTabs from "@/app/tabs";
import { useGlobalContext } from "@/Context/GlobalProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const App = () => {
  const [introDone, setIntroDone] = useState<boolean | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const { isLoading, isLoggedIn } = useGlobalContext();

  useEffect(() => {
    const checkedLoggedIn = async (): Promise<void> => {
      try {
        const introStatus = await AsyncStorage.getItem("introDone");
        const loginStatus = await AsyncStorage.getItem("LoggedIn");

        setIntroDone(introStatus === "true");
        setLoggedIn(loginStatus === "true");
      } catch (err) {
        console.log(err);
        setIntroDone(false);
        setLoggedIn(false);
      }
    };

    checkedLoggedIn().then((r) => console.log(r));
  }, []);

  const handleIntroDone = async () => {
    await AsyncStorage.setItem("introDone", "true");
    setIntroDone(true);
  };

  const handleLoginSuccess = async () => {
    await AsyncStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  if (introDone === null || loggedIn === null) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!introDone) {
    // @ts-ignore
    return <IntroductionStack onFinish={handleIntroDone} />;
  }

  if (!loggedIn) {
    // @ts-ignore
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  if (!isLoading && !isLoggedIn) return <LoggedTabs />;

  return <LoggedTabs />;
};

export default App;
