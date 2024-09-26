import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform  } from 'react-native';

import colors from './assets/colors.js';

const WebLayout = () => {

  return (

    <View style={webStyles.webContainer}>
      <View style={webStyles.userLoginContainer}>
        <LoginLayout></LoginLayout>
      </View>
      <View style={webStyles.userLayoutContainer}>
         
        <Image 
        style={webStyles.layoutImage}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/14898/14898117.png' }}      
        /> 
        <Text style={webStyles.title} >Crie fluxos e faça gestão de seus contatos de qualquer lugar</Text>
        <Text style={webStyles.subtitle} >Centralize sua comunicação em uma aplicação simples e intuitiva</Text>
      </View>
      
    </View>
  )
  
}
 

const LoginLayout = () => {

  return (
    <View style={loginStyles.container}>
      <StatusBar style="auto" />
  
      <Image 
      style={loginStyles.logoApp}
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6008/6008363.png' }}      
      /> 

        <Text style={loginStyles.title}>Connect us</Text>

      <Text style={loginStyles.subtitle}>Crie fluxos automatizados. ✨</Text>
      <View style={loginStyles.loginContainer}>
        <TextInput 
          style={loginStyles.defaultInput} 
          placeholder='Usuário ou e-mail'    
        />
          <TextInput 
          style={loginStyles.defaultInput}
          secureTextEntry={true}
          placeholder='Senha'    
        />
  
        <Text style={loginStyles.anchor}>Esqueceu sua senha?</Text>
  
        <TouchableOpacity style={[loginStyles.defaultButton, {backgroundColor: colors.dreamBlue}]}>
            <Text style={loginStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 10}}> Não possui uma conta? </Text>
        <TouchableOpacity style={[loginStyles.defaultButton, {backgroundColor: '#fff', borderColor: colors.textColor, borderWidth: 1}]}>
            <Text style={[loginStyles.buttonText, {color: colors.textColor}]}>Cadastrar-se</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  
  );

}

export default function App() {

  const Layout = Platform.OS === 'web' ? WebLayout : LoginLayout;
  return <Layout />;

}

const loginStyles = StyleSheet.create({
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

  userLoginContainer: {

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