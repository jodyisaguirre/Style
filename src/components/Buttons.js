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

          }}>
            <Text   style={{
              color:'#2dbeff'
            }}>Above</Text>
          </Button>
          <Text style={{


          }}>50 degrees</Text>

          <Button onPress={()=>Actions.ColdWeatherScreen()}
          block style={{color: '#c3c3c3',
          width: '100%',
          backgroundColor:'#929292',


}}  >
            <Text style={{
              color:'#2dbeff'
            }}>Below</Text>
          </Button>






        </Content>
    </Container>

    );
  }
}
