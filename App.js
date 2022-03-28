import React, { useState } from "react";
import { LogBox, StyleSheet, } from 'react-native';

import { enableScreens } from "react-native-screens";

import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import MyNavigation from "./navigacija/MyNavigation"
import exerciseReducer from "./store/reducers/exercisesReducers"

LogBox.ignoreAllLogs(true);
enableScreens();

const mainReducer = combineReducers({
  exercises: exerciseReducer,
})

const store = createStore(mainReducer)


const loadFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "raleway": require("./assets/fonts/Raleway-Regular.ttf"),
    "GreatVibes-Regular": require("./assets/fonts/GreatVibes-Regular.ttf"),
    "IMFellDWPica-Regular": require("./assets/fonts/IMFellDWPica-Regular.ttf")
  });
};

export default function App() {
  const [loadFont, setLoadFont] = useState(false);

  if (!loadFont) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoadFont(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MyNavigation />
    </Provider>

  );
}

const styles = StyleSheet.create({
  
});
