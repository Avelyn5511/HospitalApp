import Home from "@/app/screen/logged/home/Home";
import AppointmentDoctor from "@/app/screen/logged/home/screenHome/AppointmentDoctor";
import CourseTreatment from "@/app/screen/logged/home/screenHome/CourseTreatment";
import Exercise from "@/app/screen/logged/home/screenHome/Exercise";
import StateBloodPressure from "@/app/screen/logged/home/screenHome/StateBloodPressure";
import StateHealth from "@/app/screen/logged/home/screenHome/StateHealth";
import StateLevelBloody from "@/app/screen/logged/home/screenHome/StateLevelBloody";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="AppointmentDoctor"
            component={AppointmentDoctor}
          />
          <Stack.Screen name="CourseTreatment" component={CourseTreatment} />
          <Stack.Screen name="Exercise" component={Exercise} />

          <Stack.Screen
            name="StateBloodPressure"
            component={StateBloodPressure}
          />
          <Stack.Screen name="StateLevelBloody" component={StateLevelBloody} />
          <Stack.Screen name="StateHealth" component={StateHealth} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default HomeStack;
