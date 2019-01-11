import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'

export default class Buttons extends Component {



  render() {
    return (

      <Container style={{ width :'100%',
                          height : '50%',
                          backgroundColor: 'rgba(1,1,1,0)',
                          flex:1,
                          justifyContent: 'center',
                          alignItems:'center',




                  }}>
        <Content style={{backgroundColor: 'rgba(1,1,1,0)'


                    }}>

          <Button onPress={()=>Actions.HotWeatherScreen()}
          block style={{color: '#c3c3c3',
          width: '100%',
          backgroundColor:'#929292',
          marginBottom:25

          }}>
            <Text   style={{
              fontSize: 30,
              color:'#2dbeff',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 10,
            }}>Suns Out Guns Out</Text>
          </Button>

          <Button onPress={()=>Actions.ColdWeatherScreen()}
          block style={{color: '#c3c3c3',
          width: '100%',
          backgroundColor:'#929292',
          marginTop:25,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10,


          }}>
            <Text style={{
              fontSize: 30,
              color:'#2dbeff',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 10,

            }}>Winter's Comming</Text>
          </Button>






        </Content>
    </Container>

    );
  }
}
