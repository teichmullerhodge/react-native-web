import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform  } from 'react-native';
import colors from '../assets/colors.js';
import Chat from '../screens/Chat';



const ChatDisplay = ({contactName, nav}) => {


    return (

        <View style={displayStyles.displayContainer}>
            <Image 
            style={displayStyles.userImage}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6008/6008363.png' }}      
            /> 
            <TouchableOpacity style={displayStyles.displayContent} onPress={() => nav('Messages')}>
                <Text style={displayStyles.contactNameStyles}>{contactName}</Text>
                <Text style={displayStyles.lastMessageStyles}>Olá, eu estou ganhando forma!</Text>                    
            </TouchableOpacity>
            <TouchableOpacity style={displayStyles.icon}></TouchableOpacity>
        </View>
    )

}

const displayStyles = StyleSheet.create({


    displayContainer: {

        flex: 0.15,
        flexDirection: 'row',
        width: '100%',
        padding: 6,
        marginLeft: 10,
        marginTop: 10,

    },

    userImage: {

        width: 30,
        height: 30,
        borderRadius: 100,
        borderColor: colors.dreamBlack,
        backgroundColor: colors.dreamBlue,
    },

    displayContent: {

        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
    },

    contactNameStyles: {

        fontWeight: 'bold',
    },
    lastMessageStyles: {

        opacity: 0.5,
    }
})

export default ChatDisplay;
