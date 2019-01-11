import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { AppRegistry, View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'







export default class HeaderTitleExample extends Component {


  render() {
    return (
      <Container style={{backgroundColor: 'rgba(1,1,1,0)',
                        flex: 1,
                        justifyContent:'center',
                        alignItems: 'center'
                        }}>
        <Image
                style={{backgroundColor: 'rgba(1,1,1,0)',
                        width: 100, height: 100,
                      }}
                      source={require('./logo.png')}
       />
       <Text onPress={()=>Actions.TempPage()}
              style={{
                fontSize:50,
                color:'white',
                textShadowColor: 'rgba(1, 195, 189, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10
              }}>Style</Text>


      </Container>
    );
  }
}
