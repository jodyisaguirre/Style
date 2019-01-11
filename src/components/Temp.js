import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { AppRegistry, View, Image, Text } from 'react-native';
import Buttons from './Buttons.js'
const API_Key = '96942006f211e884ae019e711d2276f8'





export default class HeaderTitleExample extends Component {


  state = {
  zipcode: 80501,
  temp_max: [],
  temp: []


}
componentDidMount(){
  fetch("https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=96942006f211e884ae019e711d2276f8&zip=80203&units=imperial")
  .then(res => res.json())
  .then(res=>{
    console.log(res.main);
    this.setState({ temp_max:res.main.temp_max},()=> console.log(this.state.temp_max,"this is it "))
    this.setState({ temp:res.main.temp},()=> console.log(this.state.temp,"this is it "))



  })

}





  render() {
    return (
      <Container style={{backgroundColor: 'rgba(1,1,1,0)',
                          flex:1,
                          justifyContent: 'center',
                          alignItems: 'center'}}>
        <Text style={{fontSize: 20,
                      color: 'white'
          }}>The Current Temperature is</Text>
          <Text style={{fontSize: 20,
                        color: 'white'
          }}>{this.state.temp}º F</Text>
          <Text style={{fontSize: 20,
                        color: 'white',
          }}>The High will be</Text>
       <Text style={{fontSize: 20,
                      color: 'white',
       }}>{this.state.temp_max}º F</Text>
       </Container>
    );
  }
}
