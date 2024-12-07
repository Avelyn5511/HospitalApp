import Start from "@/app/screen/introduction/Start";
import Login from "@/app/screen/login/Login";
import IntroductionStack from "@/app/stacks/IntroductionStack";
import LoggedTabs from "@/app/tabs";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);
  const [introDone, setIntroDone] = useState<boolean | null>(false);
  const [showLogin, setShowLogin] = useState<boolean | null>(false);

  useEffect(() => {
    const checkIntro = async () => {
      const intro = (await AsyncStorage.getItem("introDone")) === "true";
      const hasVisitBefore = await AsyncStorage.getItem("hasVisitBefore");
      if (intro) {
        await AsyncStorage.setItem("hasVisitBefore", "true");
        setIntroDone(true);
      }
      if (!hasVisitBefore) {
        setShowLogin(true);
      }
    };
    void checkIntro();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!introDone) {
    return <IntroductionStack setIntroDone={setIntroDone} />;
  }

  if (isLoggedIn) {
    return <LoggedTabs />;
  } else if (showLogin) {
    return <Login />;
  }

  return <Start setShowLogin={setShowLogin} />;
};

export default App;
