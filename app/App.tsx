import {
  setIsIntroDone,
  setIsLoggedIn,
  setIsShowLogin,
} from "@/app/redux/slice/navigationSlice";
import { RootState } from "@/app/redux/store";
import Start from "@/app/screen/introduction/Start";
import Login from "@/app/screen/login/Login";
import IntroductionStack from "@/app/stacks/IntroductionStack";
import LoggedTabs from "@/app/tabs";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { isLoggedIn, isIntroDone, isShowLogin } = useSelector(
    (state: RootState) => state.navigation,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIntro = async () => {
      const intro = (await AsyncStorage.getItem("introDone")) === "true";
      const hasVisitBefore = await AsyncStorage.getItem("hasVisitBefore");
      if (intro) {
        await AsyncStorage.setItem("hasVisitBefore", "true");
        dispatch(setIsIntroDone(true));
      }
      if (!hasVisitBefore) {
        dispatch(setIsShowLogin(true));
      }
    };
    void checkIntro();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setIsLoggedIn(true));
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isIntroDone) {
    return <IntroductionStack />;
  }

  if (isLoggedIn) {
    return <LoggedTabs />;
  } else if (isShowLogin) {
    return <Login />;
  }

  return <Start />;
};

export default App;
