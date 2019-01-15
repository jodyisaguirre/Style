import React, {Component} from 'react'
import {StyleSheet,Text,View, Container,Image, Button,ImageBackground} from 'react-native'
import { Actions} from 'react-native-router-flux'

class ColdWeatherScreen extends Component{
  render(){
    const hat = this.props.hat || 'https://i.ibb.co/HBHNW7Y/hbutton.png'
  return(

    <ImageBackground source={require('./src/components/topSuit.jpg')}
    style={{
      height:'100%',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <Image source={ {uri: hat} }
      style={{
        height:100,
        width:100
      }}/>

        <Text onPress={()=>Actions.HatScreen()}
              style={{fontSize:25,
                color: '#2dbeff',
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10}}>
          Change
        </Text>





      <Image source={{uri: 'https://i.ibb.co/M5FTKQt/jbutton.png'} }
      style={{
        height:100,
        width:100
      }}/>
      <Text onPress={()=>Actions.JacketScreen()}
      style={{fontSize:25,
        color: '#2dbeff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10}}
      >
        Change
      </Text>
      <Image source={{uri: 'https://i.ibb.co/0fqqhM0/sbutton.png'}}
      style={{
        height:100,
        width:100
      }}/>
      <Text onPress={()=>Actions.ShirtScreen()}
      style={{fontSize:25,
        color: '#2dbeff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10}}>
        Change
      </Text>
      <Image source={{uri: 'https://i.ibb.co/x1wj2Fj/pbutton.png'}}
      style={{
        height:100,
        width:100
      }}/><Text onPress={()=>Actions.PantsScreen()}
                style={{fontSize:25,
                        color: '#2dbeff',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10}}
        >
        Change
      </Text>
      <Image source={{uri: 'https://i.ibb.co/2STFjc4/shbutton.png'}}
      style={{
        height:100,
        width:100,
      }}/>
      <Text onPress={()=>Actions.ShoeScreen()}
            style={{fontSize:25,
              color: '#2dbeff',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 10}}



      >
        Change
      </Text>





      <Text >

      </Text>
      </ImageBackground>

  )
}
}
export default ColdWeatherScreen
