import Notification from "@/app/screen/logged/Notification";
import AppointmentDoctor from "@/app/screen/logged/screenNotification/AppointmentDoctor";
import CourseTreatment from "@/app/screen/logged/screenNotification/CourseTreatment";
import Exercise from "@/app/screen/logged/screenNotification/Exercise";
import StateBloodPressure from "@/app/screen/logged/screenNotification/StateBloodPressure";
import StateHealth from "@/app/screen/logged/screenNotification/StateHealth";
import StateLevelBloody from "@/app/screen/logged/screenNotification/StateLevelBloody";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Notification"
      >
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="AppointmentDoctor" component={AppointmentDoctor} />
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
  );
};

export default NotificationStack;
