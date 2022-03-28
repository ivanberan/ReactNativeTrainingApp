
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, Alert } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import { setFavourite } from '../store/actions/exercisesActions';

import ExerciseWindow from '../components/ExerciseWindow';
import HeaderBtn from '../components/HeaderBtn';
import colors from '../constants/colors';
import { CAMERA } from 'expo-permissions';

const Exercise = (props) => {

  const [photo, setPhoto] = useState()

  const exerciseId = props.navigation.getParam('exerciseId')

  const poses = useSelector(state => state.exercises.exercisesFiltered)
  const ifInToDo = useSelector(state => state.exercises.exercisesToDo.some(exe => exe.id === exerciseId))
  const chosenExercise = poses.find(pose => pose.id === exerciseId)

  const dispatch = useDispatch();
  const action = setFavourite(exerciseId)

  const dispatchFunction = useCallback(() => {
    dispatch(action)
  }, [dispatch], exerciseId)

  useEffect(() => {
    props.navigation.setParams({ action: dispatchFunction })
  }, [exerciseId]
  );

  useEffect(() => {
    props.navigation.setParams({ name: chosenExercise.name, color: chosenExercise.color, TakePhoto: TakePhoto })
  }, [chosenExercise]
  );

  useEffect(() => {
    props.navigation.setParams({ ToDoStatus: ifInToDo })
  }, [ifInToDo]
  );

  const AskPermission = async () => {
    const permission = await Permissions.askAsync(Permissions.CAMERA);
    if (permission.status !== 'granted') {
      Alert.alert("No permission", "Need to grant permission to use camera", [{ text: "Ok" }]);
      return false
    } else {
      return true
    }
  }
  const TakePhoto = async () => {
    const permission = await AskPermission();
    if (!permission) {
      return

    } const photo = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7
    });
    setPhoto(photo.uri)
  };


  return (
    <ImageBackground style={stil.imgBackground}
      resizeMode='cover' source={require('../assets/flower2.png')}>
      <ExerciseWindow
        id={chosenExercise.id}
        description={chosenExercise.description}
        picUrl={chosenExercise.picUrl}
        name={chosenExercise.name}
        type={chosenExercise.type}
        color={chosenExercise.color}
        yourPhoto={photo}
      />
    </ImageBackground>

  );
};


Exercise.navigationOptions = (navigationData) => {
  const exerciseId = navigationData.navigation.getParam('exerciseId')
  const dispatchFun = navigationData.navigation.getParam('action')
  const ToDoStatus = navigationData.navigation.getParam('ToDoStatus')
  TakePhoto = navigationData.navigation.getParam('TakePhoto')

  return {
    headerTitle: navigationData.navigation.getParam('name'),
    headerStyle: {
      backgroundColor: colors.main,
      //backgroundColor: navigationData.navigation.getParam('color'),
    },
    headerTitleStyle: {
      fontFamily: 'IMFellDWPica-Regular',
      fontWeight: "200",
      fontSize: 20
    },
    headerTintColor: colors.text,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderBtn}>
          <Item title='Favoriti' iconName={ToDoStatus ? "ios-star" : "ios-star-outline"} onPress={dispatchFun} />
          <Item title='Camera' iconName="camera" style={colors.main} onPress={TakePhoto} />
        </HeaderButtons>

      )
    },
  }
}

const stil = StyleSheet.create({
  ekan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }, imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: 'cover'
  },
})
export default Exercise;