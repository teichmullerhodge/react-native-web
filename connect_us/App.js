import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform  } from 'react-native';
import LoginScreen from './screens/LoginScreen.js';
import Chat from './screens/Chat.js';
import Register from './screens/Register.js';
import Messages from './screens/Messages.js';
import WebMessages from './screens/WebChat.js';

const App = () => {
  
  const [currentScreen, setCurrentScreen] = useState('WebMessages'); //

  function navigable(location){

    setCurrentScreen(location);


  }

  const Renderer = () => {

      switch(currentScreen){

        case 'Login':
          return <LoginScreen nav={navigable}/>
        case 'Chat':
          return <Chat nav={navigable}/>
        case 'Register':
            return <Register nav={navigable}/>
        case 'Messages':
            return <Messages nav={navigable}/>
        case 'WebMessages':
            return <WebMessages nav={navigable}/>
        default:
          return <LoginScreen nav={navigable}/>
      }  
    
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      {Renderer()}
    </View>  
  
  )

}

export default App;
