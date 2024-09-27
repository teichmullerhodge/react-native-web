import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, SafeAreaView, ScrollView, KeyboardAvoidingView, Keyboard, Dimensions} from 'react-native';
import colors from '../assets/colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import MessageContent from '../components/MessageContent.js';
import Messages from './Messages.js';


const WebMessages = ({nav}) => {


    return (

        <View style={WebMessagesStyles.container}>
            <View style={WebMessagesStyles.navBar}>

                <Image 
                style={WebMessages.logoApp}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6008/6008363.png' }}      
                /> 
                <TouchableOpacity style={WebMessages.navButton}>
                    <Ionicons name="chatbox-ellipses-outline" size={24} color={colors.dreamBlue} /> 
                </TouchableOpacity>
                <TouchableOpacity style={WebMessages.navButton}>
                    <Ionicons name="chatbox-ellipses-outline" size={24} color={colors.dreamBlack} /> 
                </TouchableOpacity>
                <TouchableOpacity style={WebMessages.navButton}>
                    <Ionicons name="people-outline" size={24} color={colors.dreamBlack} /> 
                </TouchableOpacity>
                <TouchableOpacity style={WebMessages.navButton}>
                    <Ionicons name="archive-outline" size={24} color={colors.dreamBlack} /> 
                </TouchableOpacity>

                <TouchableOpacity style={WebMessages.navButton}>
                    <Ionicons name="moon-outline" size={24} color={colors.dreamBlack} /> 
                </TouchableOpacity>

            </View>        
            <View style={WebMessagesStyles.usersContainer}>
            </View>

        </View>




    )
}


const WebMessagesStyles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row'
    },

    navBar: {

        width: '8%',
        maxWidth: '8%',
        backgroundColor: colors.pureWhite,
        flex: 1,
        flexDirection: 'column',
        borderRightWidth: 1,
        borderRightColor: colors.dreamWhite,
        justifyContent: 'center',
        alignItems: 'center',

    },

    logoApp: {

        width: 30,
        height: 30,
        backgroundColor: 'red',
    },

    navButton: {


        padding: 8,
        width: 400,
        height: 800,
        backgroundColor: colors.dreamSmoke,
        borderRadius: 8,
        backgroundColor: 'blue',
    }


});

export default WebMessages;
