import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, SafeAreaView, ScrollView  } from 'react-native';
import colors from '../assets/colors.js';
import ChatDisplay from '../components/ChatDisplay.js';

const SampleLayout = ({nav}) => {

  return (
    <View style={chatStyles.chatContainer}>
      <StatusBar style="auto" />
        <View style={chatStyles.chatHeader}>
            <View style={chatStyles.searchContainer}>
                <TextInput 
                style={chatStyles.defaultInput} 
                placeholder='Pesquisar um contato'    
                />
            </View>
            <View style={chatStyles.filterButtonsContainer}>
                <TouchableOpacity style={chatStyles.defaultButton} onPress={() => nav('Login')}>
                    <Text style={chatStyles.buttonText}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chatStyles.defaultButton}  onPress={() => nav('Login')}>
                    <Text style={chatStyles.buttonText}>Atendendo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={chatStyles.defaultButton}  onPress={() => nav('Login')}>
                    <Text style={chatStyles.buttonText}>Em espera</Text>
                </TouchableOpacity>
            </View>
        </View>
        <SafeAreaView style={chatStyles.chatsContainer}>
            <ScrollView style={chatStyles.scrollableContainer}>

                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>
                <ChatDisplay contactName="Sunhub" nav={nav}></ChatDisplay>

            </ScrollView>

        </SafeAreaView>
    </View>
  )
  
}
 
const Chat = ({nav}) => {

  return <SampleLayout nav={nav}/>;

}

const chatStyles = StyleSheet.create({
    chatContainer: {

        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },

    chatHeader: {

        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginTop: 30,


    },
    searchContainer: {

        flex: 1,
        flexDirection: 'column',
        width: '100%',
        padding: 8,

    },

    defaultInput: {

        borderColor: colors.dreamSmoke,
        borderWidth: 1,
        padding: 6,
        borderRadius: 6,
        backgroundColor: colors.dreamSmoke,
        height: 30

    },
    filterButtonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
 
    },
    buttonText: {

        textAlign: 'center',
        color: colors.dreamWhite,
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.textColor,
    
    },
    defaultButton: {

        padding: 8,
        borderRadius: 6,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.dreamSmoke,
        backgroundColor: colors.dreamSmoke,
        marginLeft: 5,
      },

    chatsContainer: {
        marginTop: 10,
        flex: 1,
        height: '100%',
        width: '100%',

      },


})


export default Chat;
