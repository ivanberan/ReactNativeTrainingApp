
import React from 'react'
import { StyleSheet, View, Text, FlatList, ImageBackground } from 'react-native';
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import GridSection from '../components/GridSection';
import HeaderBtn from '../components/HeaderBtn';
import colors from '../constants/colors';

const TrainingExe = (props) => {
  const renderGrid = (data) => {
    return (
      <GridSection
        name={data.item.name}
        pic={data.item.picUrl}
        color={data.item.color}
        action={() => { props.navigation.navigate("Exercise", { exerciseId: data.item.id }) }}
      />
    )
  }
  const poses = useSelector(state => state.exercises.exercisesToDo)

  if (poses.length === 0 || !poses) {
    return (
      <ImageBackground style={stil.imgBackground}
        resizeMode='cover' source={require('../assets/flower.png')}>
        <View style={stil.element}>
          <Text style={{ fontFamily: 'IMFellDWPica-Regular', fontSize: 25, color: colors.fifth}}>No exercises planned!</Text>
        </View>
      </ImageBackground>)
  } else {
    return (
      <ImageBackground style={stil.imgBackground}
        resizeMode='cover' source={require('../assets/flower.png')}>
        <View >
          <FlatList numColumns={2} data={poses} renderItem={renderGrid} />
        </View>
      </ImageBackground>
    );
  };
}
TrainingExe.navigationOptions = (NavData) => {
  return {
    headerTitle: "Plan",
    headerStyle: {
      backgroundColor: colors.main,
    },
    headerTitleStyle: {
      fontFamily: 'IMFellDWPica-Regular',
      fontWeight: "200",
      fontSize: 25
    },
    headerTintColor: colors.text,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderBtn}>
          <Item title='Main' iconName="menu" onPress={() => { NavData.navigation.toggleDrawer() }
          } />
        </HeaderButtons>
      )
    }
  }
}


const stil = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridElement: {
    flex: 1,
    margin: 15,
    height: 150,
    borderColor: 'black',
    borderWidth: 1

  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: 'cover'
  },
  element: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
    backgroundColor: colors.fourth,
    opacity: 0.5,
    borderColor: colors.sixth,
    borderWidth: 5,
    padding: 10,
    borderRadius: 20,
  }
})
export default TrainingExe;