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
      url:''
      }



  edit = () => {
    Actions.HatScreen()
    fetch(`http://localhost:3003/clothing/${this.props.hat}`,{
      method:'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
            color: this.state.color,
            description: this.state.description,
            url: this.state.url,
            is_hot: null,
            users_id: 1,
            type_id: null

      })
    })
    .then(response => response.json())
    .then(newRes => {
      console.log(newRes);
      this.setState({
        clothingsData: newRes
      })
    })
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
              style={{ fontSize:30 }}>
              Upload Image</Text>
            <TextInput placeholder='Color'
              onChangeText={this.handleChangeColor}
              value={this.state.color}
              style={{ fontSize:30 }}/>
            <TextInput placeholder='Description'
            onChangeText={this.handleChangeDescription}
              style={{ fontSize:30 }}
             />
             <TextInput placeholder='URL'
             onChangeText={this.handleChangeUrl}
               style={{ fontSize:30 }}
              />



              <Button
              onPress={this.edit}
              block style={{color: '#c3c3c3',
              width: '100%',
              backgroundColor:'#929292',

              }}>
                <Text

                style={{
                  color:'#2dbeff'
                }}>Submit</Text>
              </Button>







    </ImageBackground>
  )
}
}
