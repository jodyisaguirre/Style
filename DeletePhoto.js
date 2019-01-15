import React, { Component } from 'react';
import {StyleSheet,Text,View, ImageBackground,Image, TextInput} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Actions} from 'react-native-router-flux'
import Temp from './src/components/Temp.js'
import Buttons from './src/components/Buttons.js'





export default class Splash extends Component {


  state={
      clothingsData:[],
      color: '',
      description: '',
      }



      theLog=(id)=>{
        Actions.HatScreen()
        return fetch(`http://localhost:3003/clothing/${this.props.hat}`, {method: 'DELETE'})
          .then(res => res.json())
          .then(res => {
            console.log('Deleted:', res.clothing)
            return res
          })
          .catch(err => console.error(err))
      }







  render(){



  return(

    <ImageBackground source={require('./src/components/topSuit.jpg')}
    style={{
      height:'100%',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <Text
      style={{fontSize:25,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10}}
      >Are you sure you want to delete ? </Text>


              <Button

              onPress={this.theLog}
              block style={{color: '#c3c3c3',
              width: '100%',
              backgroundColor:'#929292',

              }}>
                <Text

                style={{
                  fontSize:25,
                  color:'#2dbeff'
                }}>Delete</Text>
              </Button>







    </ImageBackground>
  )
}
}
