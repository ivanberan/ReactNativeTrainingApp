
import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, View, Text, Button, Switch, Platform, ImageBackground } from 'react-native';

import { useDispatch } from 'react-redux';

import { HeaderButtons, Item, TouchableOpacity } from 'react-navigation-header-buttons'

import { setFilter } from '../store/actions/exercisesActions';
import HeaderBtn from '../components/HeaderBtn';
import colors from '../constants/colors';

const FilterSwitch = (props) => {
  return (
    <View style={stil.filterBorder}>
      <Text style={stil.title}>{props.title}</Text>
      <Switch
        trackColor={{ true: colors.sixth, false: colors.text }}
        thumbColor={Platform.OS === "android" ? colors.text : ""}
        value={props.stanje}
        onValueChange={props.promjena}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const { navigation } = props
  const [filterLegs, setfilterLegs] = useState(true)
  const [filterArms, setfilterArms] = useState(true)
  const [filterBack, setfilterBack] = useState(true)
  const [filterAbdominals, setfilterAbdominals] = useState(true)
  const [filterHamstrings, setfilterfilterHamstrings] = useState(true)

  const dispatch = useDispatch();

  const turnALlOn = () => {
    setfilterArms(true)
    setfilterBack(true)
    setfilterfilterHamstrings(true)
    setfilterAbdominals(true)
    setfilterLegs(true)

  }
  const turnALlOff = () => {
    setfilterArms(false)
    setfilterBack(false)
    setfilterfilterHamstrings(false)
    setfilterAbdominals(false)
    setfilterLegs(false)

  }

  const getHome = () => { navigation.navigate('Exercises') }

  const SaveFilters = useCallback(() => {
    const filters = {
      filterLegs: filterLegs,
      filterBack: filterBack,
      filterArms: filterArms,
      filterHamstrings: filterHamstrings,
      filterAbdominals: filterAbdominals,
    };
    //console.log(filters)
    dispatch(setFilter(filters))
    getHome()
  }, [filterLegs, filterArms, filterBack, filterAbdominals, filterHamstrings])

  useEffect(() => {
    navigation.setParams({ save: SaveFilters })
    navigation.setParams({ undo: turnALlOn })
  }, [SaveFilters])

  return (
    <ImageBackground style={stil.imgBackground}
      resizeMode='cover' source={require('../assets/flower2.png')}>
      <View style={stil.screen}>
        <Text style={stil.title}>Choose exercises for:</Text>
        <FilterSwitch
          title="Legs"
          stanje={filterLegs}
          promjena={(value) => setfilterLegs(value)}
        />
        <FilterSwitch
          title="Arms"
          stanje={filterArms}
          promjena={(value) => setfilterArms(value)}
        />
        <FilterSwitch
          title="Back"
          stanje={filterBack}
          promjena={(value) => setfilterBack(value)}
        />
        <FilterSwitch
          title="Abdominals"
          stanje={filterAbdominals}
          promjena={(value) => setfilterAbdominals(value)}
        />
        <FilterSwitch
          title="Hamstrings"
          stanje={filterHamstrings}
          promjena={(value) => setfilterfilterHamstrings(value)}
        />

      </View>
    </ImageBackground>
  );
};

FilterScreen.navigationOptions = (NavData) => {
  return {
    headerTitle: "Filter exercises",
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
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderBtn}>
          <Item title='Undo' iconName="arrow-undo-circle" onPress={NavData.navigation.getParam('undo')
          } />
          <Item title='Save' iconName="save" onPress={NavData.navigation.getParam('save')
          } />

        </HeaderButtons>
      )
    }

  }
}
const stil = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "IMFellDWPica-Regular",
    margin: 20,
    textAlign: "center",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: 'cover'
  },
  filterBorder: {
    fontFamily: "IMFellDWPica-Regular",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 4,
    backgroundColor: colors.fourth,
    borderColor: colors.text,
    borderRadius: 15,
    padding: 5,
    width: "80%",
    marginBottom: 20
  },
 
});
export default FilterScreen;