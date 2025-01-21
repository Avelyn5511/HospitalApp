import {
  setIsIntroDone,
  setIsLoggedIn,
  setIsShowLogin,
} from "@/app/redux/slice/navigationSlice";
import { clearUser, setUser } from "@/app/redux/slice/userSlice";
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
import {setDoctors} from "@/app/redux/slice/doctorSlice";
import {fetchDoctorsData, fetchUserData} from "@/firebase/utils";

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
        Promise.all([fetchUserData(user.uid), fetchDoctorsData()])
            .then(([userData, doctors]) => {
              if (userData) {
                dispatch(setUser(userData));
              }
              if (doctors) {
                dispatch(setDoctors(doctors));
              }
              dispatch(setIsLoggedIn(true));
              dispatch(setIsShowLogin(false));
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
          });
        console.log(user);
      } else {
        dispatch(setIsShowLogin(true));
        dispatch(setIsLoggedIn(false));
        dispatch(clearUser());
      }
    });


    return () => unsubscribe();
  }, [dispatch]);

  if (!isIntroDone) {
    return <IntroductionStack />;
  }
  console.log(isLoggedIn, isShowLogin);
  if (isShowLogin) {
    return <Login />;
  }

  if (isLoggedIn) {
    return <LoggedTabs />;
  }

  return <Start />;
};

export default App;
