import Conditions from "@/app/screen/introduction/Conditions";
import Departments from "@/app/screen/introduction/Departments";
import Load from "@/app/screen/introduction/Load";
import Start from "@/app/screen/introduction/Start";
import Login from "@/app/screen/login/Login";
import { NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

type Props = {
  setIntroDone: (done: boolean) => void;
};

export default function IntroductionStack({ setIntroDone }: Props) {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Departments" component={Departments} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen
          name="Conditions"
          component={() => <Conditions setIntroDone={setIntroDone} />}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
