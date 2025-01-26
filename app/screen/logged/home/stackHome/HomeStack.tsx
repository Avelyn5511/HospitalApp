import Home from "@/app/screen/logged/home/Home";
import AppointmentStack from "@/app/screen/logged/home/screenHome/Appointment/AppointmentStack";
import BurgerMenu from "@/app/screen/logged/home/screenHome/BurgerMenu";
import CourseTreatment from "@/app/screen/logged/home/screenHome/CourseTreatment";
import Exercise from "@/app/screen/logged/home/screenHome/Exercise";
import StateBloodPressure from "@/app/screen/logged/home/screenHome/StateBloodPressure";
import StateHealth from "@/app/screen/logged/home/screenHome/StateHealth";
import StateLevelBloody from "@/app/screen/logged/home/screenHome/StateLevelBloody";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Appointment" component={AppointmentStack} />
      <Stack.Screen name="CourseTreatment" component={CourseTreatment} />
      <Stack.Screen name="Exercise" component={Exercise} />

      <Stack.Screen name="StateBloodPressure" component={StateBloodPressure} />
      <Stack.Screen name="StateLevelBloody" component={StateLevelBloody} />
      <Stack.Screen name="StateHealth" component={StateHealth} />
      <Stack.Screen name="BurgerMenu" component={BurgerMenu} />
    </Stack.Navigator>
  );
};

export default HomeStack;
