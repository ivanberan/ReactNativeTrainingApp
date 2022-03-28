import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer"

import Exercise from "../screens/Exercise";
import FilterScreen from "../screens/FilterScreen";
import MainScreen from "../screens/MainScreen";
import TrainingExe from "../screens/TrainingExe";

import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../constants/colors"

const MyNavigation = createStackNavigator({
  Mainscreen: MainScreen,
  Exercise: {
    screen: Exercise,
  },
});

const training = createStackNavigator({
  training: TrainingExe,
  Exercise: {
    screen: Exercise,
  },
})


const MyTabNavigation = createBottomTabNavigator({
  Glavni: {
    screen: MyNavigation,
    navigationOptions: {
      title: "Poses",
      tabBarIcon: (tabInfo) => {
        return (<MaterialCommunityIcons name="yoga" size={24} color={tabInfo.tintColor} />)
      }
    }
  },
  Training: {
    screen: training,
    navigationOptions: {
      title: "Training",
      tabBarIcon: (tabInfo) => {
        return (<MaterialCommunityIcons name="archive" size={24} color={tabInfo.tintColor} />)
      }
    }
  }
}, {
  tabBarOptions: {
    activeBackgroundColor: colors.second,
    inactiveBackgroundColor: colors.fifth,
    activeTintColor: "black",
    inactiveTintColor: "white"
  }
})


const FilterStack = createStackNavigator({
  filters: FilterScreen,
})

const AppNavigation = createDrawerNavigator({
  Exercises: {
    screen: MyTabNavigation,
    navigationOptions: {
      drawerLabel: "Poses"
    }
  },
  Filters: {
    screen: FilterStack,
    navigationOptions: {
      drawerLabel: "Filters"
    }
  }
}, {
  contentOptions: {
    activeTintColor: colors.second,
    labelStyle: {
      fontSize: 20,
      fontFamily: 'IMFellDWPica-Regular',
    }
  }
})


export default createAppContainer(AppNavigation);