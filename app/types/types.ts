import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/core";

export type IntroStackParamList = {
  Load: undefined;
  Start: undefined;
  Departments: undefined;
  Conditions: undefined;
  App: undefined;
  Notification: undefined;
};

export type HomeTabStacks = {
  Notification: undefined;
  StateHealth: undefined;
  StateLevelBloody: undefined;
  StateBloodPressure: undefined;
  Exercise: undefined;
  CourseTreatment: undefined;
  Appointment: undefined;
  Tabs: undefined;
  Home: undefined;
  BurgerMenu: undefined;
  Login: undefined;
  SelectDate: undefined;
  AppointmentStack: undefined;
  Profile: undefined;
  Message: undefined;
  ButtonTabs: undefined;
};

type PropsNavigationTab<T extends keyof HomeTabStacks> = {
  navigation: BottomTabNavigationProp<HomeTabStacks, T>;
};

export type User = StandardRole & {
  appointments: string[];
};

export type Doctor = StandardRole & {
  specialization: string;
};

export type StandardRole = {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  email: string;
};

export type PropsNavigation<T extends object> = {
  navigation: NavigationProp<T>;
};
