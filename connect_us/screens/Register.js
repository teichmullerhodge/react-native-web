import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, Animated  } from 'react-native';
import colors from '../assets/colors.js';

const WebLayout = ( {nav} ) => {

  return (

    <View style={webStyles.webContainer}>
      <View style={webStyles.userRegisterContainer}>
        <RegisterLayout nav={nav}></RegisterLayout>
      </View>
      <View style={webStyles.userLayoutContainer}>
         
        <Image 
        style={webStyles.layoutImage}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/14898/14898117.png' }}      
        /> 
        <Text style={webStyles.title} >Crie sua conta e ganhe 15 dias de teste grátis</Text>
        <Text style={webStyles.subtitle} >Centralize sua comunicação em uma aplicação simples e intuitiva</Text>
      </View>
      
    </View>
  )
  
}
 

const RegisterLayout = ({nav}) => {

  return (



    <View style={registerStyles.container}>
      <StatusBar style="auto" />

      <Image 
      style={registerStyles.logoApp}
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8254/8254212.png' }}      
      /> 
        <Text style={registerStyles.title}>Connect us</Text>

      <Text style={registerStyles.subtitle}>Ganhe 15 dias de trial. ✨</Text>
      <View style={registerStyles.loginContainer}>
        <TextInput 
          style={registerStyles.defaultInput} 
          placeholder='Seu e-mail'    
        />
          <TextInput 
          style={registerStyles.defaultInput}
          secureTextEntry={true}
          placeholder='Senha'    
        />
        <TextInput 
          style={registerStyles.defaultInput} 
          placeholder='Telefone'    
        />
        <TextInput 
          style={registerStyles.defaultInput} 
          placeholder='Qual sua empresa?'    
        />
  
  
        <TouchableOpacity style={[registerStyles.defaultButton, {backgroundColor: colors.dreamBlue}]} onPress={() => nav('Chat')}>
            <Text style={registerStyles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 10}}> Já possui uma conta? 
          <Text style={registerStyles.anchor}> Entrar</Text>      
        </Text>
        
      </View>
    </View>
  
  );

}

const Register = ( {nav} ) => {

  const Layout = Platform.OS === 'web' ? WebLayout : RegisterLayout;
  return <Layout nav={nav} />;

}

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    color: colors.textColor
  },

  logoApp: {

    width: 120,
    height: 120,
    marginTop: 30,
  },

  title: {

    fontSize: 32,
    color: colors.textColor

  },

  subtitle: {

    fontSize: 16,
  },

  loginContainer: {

    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  defaultInput: {

    borderBottomColor: colors.dreamBlue,
    borderBottomWidth: 1,
    padding: 8,
    borderRadius: 6,
    width: '80%',
    marginTop: 10
  },

  anchor: {

    color: 'blue',
    marginLeft: '35%',
    marginTop: 5,
  },

  defaultButton: {

    width: '80%',
    padding: 8,
    borderRadius: 6,
    marginTop: 10
  },

  buttonText: {

    textAlign: 'center',
    color: colors.dreamWhite,
    fontWeight: 'bold',
  }

});

const webStyles = StyleSheet.create({

  webContainer: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  userRegisterContainer: {

    flex: 1,
    width: '50%',
    backgroundColor: 'blue'
  },

  layoutImage: {

    width: 360,
    height: 360,

  },

  title: { 

    marginTop: 25,
    color: colors.dreamWhite,
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {

    color: colors.dreamWhite, 
    opacity: 0.8,
    fontSize: 18,
  },  
  userLayoutContainer: {

    flex: 1,
    width: '50%',
    height: '100%',
    backgroundColor: colors.dreamBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },


})


export default Register;
