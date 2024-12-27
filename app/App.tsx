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
import { User } from "@/app/types/types";
import { auth, db } from "@/firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { collection, doc, getDoc, setDoc } from "@firebase/firestore";
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

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("user!");
        void fetchData(user.uid);
        console.log(user);
        dispatch(setIsLoggedIn(true));
        dispatch(setIsShowLogin(false));
        // create user in firebase
        const userDoc = doc(collection(db, "users"), user.uid);
        console.log("create user in firebase");
        await setDoc(userDoc, {
          email: user.email,
          uid: user.uid,
        });
        // test whether created
        const userDocTest = doc(collection(db, "users"), user.uid);
        const userTest = getDoc(userDocTest).then((doc) => {
          if (doc.exists()) {
            console.log("Document data:", doc.data());
          } else {
            console.log("No such document!");
          }
        });
        
        
      } else {
        console.log("вышел");
        dispatch(setIsShowLogin(true));
        dispatch(setIsLoggedIn(false));
        dispatch(clearUser());
      }
    });

    const fetchData = async (userId: string) => {
      const userDoc = doc(collection(db, "users"), userId);
      const user = await getDoc(userDoc);
      if (user.exists()) {
        dispatch(setUser(user.data() as User));
      }
    };

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
