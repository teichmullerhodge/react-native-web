import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform  } from 'react-native';
import colors from '../assets/colors.js';



const MessageContent = ({message, date, isUser}) => {
    return (
        <View style={[
            messageContentStyles.container, isUser ? messageContentStyles.userMessage : messageContentStyles.otherMessage
        ]}>
            <View style={messageContentStyles.messageContainer}>
                <Text style={[messageContentStyles.message, isUser ? messageContentStyles.userMessageText : messageContentStyles.otherMessageText]}>{message}</Text>            
            </View>
            <Text style={[messageContentStyles.date, isUser ? messageContentStyles.userDate : messageContentStyles.otherDate]}>{date}</Text>
        </View>
    );
}

const messageContentStyles = StyleSheet.create({
    container: {
        marginTop: 5,
        padding: 8,
        width: '75%',
        maxWidth: '75%',
        borderRadius: 10,
    },
    userMessage: {
        alignSelf: 'flex-end', 
        backgroundColor: colors.dreamFadeBlue, 
    },
    userMessageText: {

        color: colors.pureWhite,
    },    
    otherMessage: {
        alignSelf: 'flex-start',  
        backgroundColor: colors.dreamSmoke,  
    },
    otherMessageText: {
        color: colors.dreamBlack,
    },
    messageContainer: {
        padding: 8,
        width: '100%',
        borderRadius: 6,
    },
    message: {
        color: colors.dreamBlue,
        textAlign: 'left',
    },
    date: {
        color: colors.dreamBlack,
        fontSize: 12,
        textAlign: 'right',
    },
    userDate: {
        color: colors.dreamWhite,
    }
});

export default MessageContent;
