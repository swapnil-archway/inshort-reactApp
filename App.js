import React, { useContext } from "react";
import { View, StatusBar } from "react-native";
import Context, { NewsContext } from "./API/Context";
import Reactotron from "reactotron-react-native";
import InShortTabs from "./components/InShortTabs";
Reactotron.log("HELLO WORLD");
if (__DEV__) {
  import("./ReactotronConfig");
}
function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: darkTheme ? "#282C35" : "white",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <InShortTabs />
    </View>
  );
}

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
