
import { ImagePicker } from 'expo';
import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import colors from '../constants/colors';

const ListElement = (props) => {
    return (
        <View style={stil.element}>
            <Text style={{ fontFamily: "IMFellDWPica-Regular", color: colors.fifth }}>{props.children}</Text>
        </View>
    )
}
const ExerciseWindow = (props) => {
    return (

        <ScrollView>
            <Image style={stil.pic} source={{ uri: props.picUrl }} />
            {  !props.yourPhoto ?
            (<View></View>)
            :(<Image style={stil.pic} source={{uri: props.yourPhoto}}/>)}
            <View style={{ ...stil.box, ...{ borderColor: colors.sixth, backgroundColor: colors.fourth } }}>
                <Text style={stil.title}>Focus on:</Text>
                <View style={stil.details}>
                    <Text style={{ color: colors.fifth }}>{props.type.toUpperCase()}</Text>
                </View>
            </View>
            <Text style={stil.title}>How to:</Text>
            {props.description.map((element) => (
                <ListElement key={element}>{element}</ListElement>
            ))}
        </ScrollView>
    )
}

const stil = StyleSheet.create({
    box: {
        borderRadius: 40,
        borderWidth: 3
    },
    pic: {
        width: "100%",
        height: 200,
    },
    details: {
        flexDirection: "row",
        fontFamily: "IMFellDWPica-Regular",
        padding: 15,
        justifyContent: "space-around",
    },
    title: {
        fontFamily: "IMFellDWPica-Regular",
        fontSize: 22,
        textAlign: "center",
        color: colors.fifth
    },
    element: {
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: colors.sixth,
        borderWidth: 1,
        backgroundColor: colors.fourth,
        opacity: 0.85,
        padding: 10,
        borderRadius: 20,
        fontFamily: "IMFellDWPica-Regular",
    }
});
export default ExerciseWindow;