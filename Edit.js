import React from 'react'
import {StyleSheet,Text,View, ImageBackground,Image, TextInput} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
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
    <Image source={require('./src/components/camera.png')}
            style={{
              height:100,
              width:100
            }}/>
            <Text onPress={()=>Actions.AddNewPhoto()}
              style={{ fontSize:30 }}>
              Upload Image</Text>
            <TextInput placeholder='Color'
              style={{ fontSize:30 }}/>
            <TextInput placeholder='Description'
              style={{ fontSize:30 }}
             />



              <Button
              block style={{color: '#c3c3c3',
              width: '100%',
              backgroundColor:'#929292',

              }}>
                <Text   style={{
                  color:'#2dbeff'
                }}>Submit</Text>
              </Button>







    </ImageBackground>
  )
}

export default Splash
