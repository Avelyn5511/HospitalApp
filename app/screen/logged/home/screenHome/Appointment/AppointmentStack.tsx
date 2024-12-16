import Appointment from "@/app/screen/logged/home/screenHome/Appointment/Appointment";
import SelectDate from "@/app/screen/logged/home/screenHome/Appointment/SelectDate";
import { NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppointmentStack = () => {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="SelectDate" component={SelectDate} />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
};

export default AppointmentStack;
