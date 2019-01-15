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

  sendIt = async(e) => {
  Actions.HatScreen()
  console.log('hiiii')
    const url = 'http://localhost:3003/clothing'
    const payload = {
      color: this.state.color,
      description: this.state.description,
      url: this.state.url,


    }
    await fetch(url,{
      method: 'post',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(payload)
    }).then(function (response) {
      return response.json();
    }).then(res=> {
      this.setState({
        clothingsData: this.state.clothingsData.concat(res)

      })
    } )
  }



  handleChangeColor = (typedText) => {
    this.setState({color: typedText})
  }
  handleChangeDescription = (typedText) => {
    this.setState({description: typedText})
  }
  handleChangeUrl = (typedText) => {
    this.setState({url: typedText})
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
    <Image source={require('./src/components/camera.png')}
            style={{
              height:100,
              width:100
            }}/>
            <Text onPress={()=>Actions.AddNewPhoto()}
              style={{ fontSize:30,
               color: 'white'}}>
              Upload Image</Text>
            <TextInput placeholder='Color'
            style={{ fontSize:30,
                     width:'50%',
                     backgroundColor:'white'}}
              onChangeText={this.handleChangeColor}
              value={this.state.color}
              />
            <TextInput placeholder='Description'
            onChangeText={this.handleChangeDescription}
              style={{ fontSize:30,
                       width:'50%',
                       backgroundColor:'white'}}
             />
             <TextInput placeholder='URL'
             onChangeText={this.handleChangeUrl}
               style={{ fontSize:30,
                        width:'50%',
                        backgroundColor:'white'}}
              />



              <Button
              onPress={this.sendIt}

              block style={{color: '#c3c3c3',
              width: '100%',
              backgroundColor:'#929292',

              }}>
                <Text

                style={{
                  fontSize: 30,
                  color:'#2dbeff'
                }}>Submit</Text>
              </Button>







    </ImageBackground>
  )
}
}
