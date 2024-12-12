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
  AppointmentDoctor: undefined;
  Tabs: undefined;
  Home: undefined;
  BurgerMenu: undefined;
  Login: undefined;
};

export type PropsNavigation<T extends object> = {
  navigation: NavigationProp<T>;
};
