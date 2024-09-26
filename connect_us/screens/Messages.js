import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, SafeAreaView, ScrollView  } from 'react-native';
import colors from '../assets/colors.js';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import MessageContent from '../components/MessageContent.js';


const Messages = ({nav}) => {

  return (
    <View style={messageStyles.container}>
        <View style={messageStyles.chatHeader}>
            <View style={messageStyles.profileHeader}>
                <Image 
                    style={messageStyles.profilePicture}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6008/6008363.png' }}      
                /> 
                <View style={messageStyles.userInfo}>
                    <Text style={messageStyles.profileName}>Sunhub</Text>
                    <Text style={messageStyles.profileStatus}>Online</Text>
                </View>
                <View style={messageStyles.buttonContainer}>
                    <TouchableOpacity style={messageStyles.defaultButton} onPress={() => nav('Login')}>
                        <Ionicons name="camera-outline" size={24} color={colors.dreamBlack} /> 
                    </TouchableOpacity>

                    <TouchableOpacity style={messageStyles.defaultButton} onPress={() => nav('Login')}>
                        <Ionicons name="call-outline" size={24} color={colors.dreamBlack} />   
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <SafeAreaView style={messageStyles.chatContainer}>
            <ScrollView style={messageStyles.scrollableContainer}>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024" isUser={true}></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024"></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024" isUser={true}></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024"></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024" isUser={true}></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024"></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024" isUser={true}></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024"></MessageContent>
                <MessageContent message="Lorem ipsum dolor sit amet. Nulla at risus" date="26/09/2024" isUser={true}></MessageContent>
            </ScrollView>
        </SafeAreaView>
        <View style={messageStyles.inputOutlineContainer}>
           <View style={messageStyles.inputContainer}>
                <TouchableOpacity style={messageStyles.sendFileButton}>
                    <Ionicons name="camera-outline" size={24} style={messageStyles.sendFiles} />   
                </TouchableOpacity>
                <TextInput style={messageStyles.userInput} placeholder='Digite sua mensagem'>
                </TextInput>
                <TouchableOpacity style={messageStyles.sendMessageButton}>
                    <Ionicons name="paper-plane-outline" size={24} style={messageStyles.sendMessage}/>   
                </TouchableOpacity>
            </View>
        </View>

    </View>
);
  
}
 

const messageStyles = StyleSheet.create({

        container: {
            
            flex: 1,

        },
        chatHeader: {

            position: 'absolute',
            height: 80,
            width: '100%',
            backgroundColor: colors.dreamFadeBlue,
            zIndex: 1, 

        },

        profileHeader: {

            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'

        },

        profilePicture: {

            marginLeft: 15,
            width: 45,
            height: 45,
            borderRadius: '100%'
            
        },

        userInfo: {

            marginLeft: 5,
        },

        profileName: {

            fontWeight: 'bold',
            fontSize: 16,
            color: colors.dreamWhite
        },
        profileStatus: {

            color: colors.dreamWhite,
            fontWeight: '600'

        },
        buttonContainer: {

            marginLeft: '35%',
            flex: 1,
            flexDirection: 'row',
        },
        defaultButton: {

            marginRight: 5,
            backgroundColor: colors.dreamSmoke,
            borderRadius: 8,
            padding: 4,
        },
        chatContainer: {

            height: '85%',
        },

        scrollableContainer: {
            marginTop: 60,
            height: '100%',
        },

        inputOutlineContainer: {

            backgroundColor: colors.pureWhite,
            padding: 16,
            flex: 1,
        },

        inputContainer: {

            flex: 1,
            flexDirection: 'row',
            padding: 8,
            zIndex: 2,
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.dreamSmoke,
            borderRadius: 16,
        },

        inputButton: {

            backgroundColor: colors.dreamSmoke,
        },
        sendFiles: {

            color: colors.dreamBlue,

        },

        userInput: {

            backgroundColor: colors.dreamSmoke,
            padding: 16,
            width: '80%',
        },

        sendMessageButton: {

            backgroundColor: colors.dreamFadeBlue,
            padding: 6,
            borderRadius: 8,

        },

        sendMessage: {

            color: colors.pureWhite,

        }

})


export default Messages;
