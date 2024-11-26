import IntroductionStack from "@/app/screen/stacks/IntroductionStack";
import LoggedStack from "@/app/screen/stacks/LoggedStack";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import React from "react";

const App = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in");
      return <LoggedStack />;
    }
  });

  return <IntroductionStack />;
};

export default App;
