import IntroductionStack from "@/app/stacks/IntroductionStack";
import LoggedTabs from "@/app/tabs";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoggedIn === null) {
    return <IntroductionStack />;
  }

  return isLoggedIn ? <LoggedTabs /> : <IntroductionStack />;
};

export default App;
