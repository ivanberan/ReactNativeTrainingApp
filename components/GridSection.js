import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../constants/colors';
const GridSection = (props) => {
    return (
        <TouchableOpacity style={stil.gridElement} onPress={props.action}>
            <View style={{ ...stil.section, ...{ backgroundColor: colors.third } }}>
                <View >
                    <Text numberOfLines={2} style={stil.title}>{props.name}</Text>
                </View>
                <View >
                    <Image source={{ uri: props.pic }} style={stil.photo} />
                </View>
            </View>
        </TouchableOpacity>
    )

}

const stil = StyleSheet.create({
    photo: {
        width: "100%",
        height: "70%",
        borderWidth: 2,
        resizeMode: 'cover',
        borderColor: 'black',
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'IMFellDWPica-Regular',
        fontSize: 20,
        height: 70,
        textAlign: 'left'
    },
    section: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        elevation: 5,
        padding: 10,
        justifyContent: 'flex-start',
    },
    gridElement: {
        opacity: 0.9,
        flex: 1,
        margin: 15,
        height: 185,


    },
})
export default GridSection;