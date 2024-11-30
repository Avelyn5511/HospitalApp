import { NavigationProp } from "@react-navigation/core";

export type IntroStackParamList = {
  Load: undefined;
  Start: undefined;
  Departments: undefined;
  Login: undefined;
  Conditions: undefined;
  App: undefined;
  Notification: undefined;
};

export type NotificationStack = {
  Notification: undefined;
  StateHealth: undefined;
  StateLevelBloody: undefined;
  StateBloodPressure: undefined;
  Exercise: undefined;
  CourseTreatment: undefined;
  AppointmentDoctor: undefined;
};

export type LoggedStackParamList = {
  Notification: undefined;
  StateHealth: undefined;
  StateLevelBloody: undefined;
  StateBloodPressure: undefined;
  Exercise: undefined;
  CourseTreatment: undefined;
  AppointmentDoctor: undefined;
};

export type PropsNavigation<T extends object> = {
  navigation: NavigationProp<T>;
};
