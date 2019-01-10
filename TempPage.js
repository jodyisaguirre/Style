import React from 'react'
import {StyleSheet,Text,View, ImageBackground} from 'react-native'
import { Actions} from 'react-native-router-flux'
import Temp from './src/components/Temp.js'
import Buttons from './src/components/Buttons.js'




const Splash = () =>{

  return(
    <ImageBackground source={require('./src/components/background.png')}
    style={{
      height:'100%',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Temp />
    <Buttons />




    </ImageBackground>
  )
}

export default Splash
