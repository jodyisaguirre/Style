import React, {Component} from 'react'
import {StyleSheet,Text,View, Container,Image, Button,ImageBackground} from 'react-native'
import { Actions} from 'react-native-router-flux'

class HotWeatherScreen extends Component{
  render(){
    const hat = this.props.hat || 'https://i.ibb.co/HBHNW7Y/hbutton.png'
    const jacket = this.props.jacket || 'https://i.ibb.co/M5FTKQt/jbutton.png'
    const shirt = this.props.shirt || 'https://i.ibb.co/0fqqhM0/sbutton.png'
    const pants = this.props.pants || 'https://i.ibb.co/x1wj2Fj/pbutton.png'
    const shoes = this.props.shoes || 'https://i.ibb.co/2STFjc4/shbutton.png'

  return(

    <ImageBackground source={require('./src/components/background.png')}
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
                color: 'white',
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10}}>
          Change
        </Text>





      <Image source={{uri: jacket} }
      style={{
        height:100,
        width:100
      }}/>
      <Text onPress={()=>Actions.JacketScreen()}
      style={{fontSize:25,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10}}
      >
        Change
      </Text>
      <Image source={{uri: shirt}}
      style={{
        height:100,
        width:100
      }}/>
      <Text onPress={()=>Actions.ShirtScreen()}
      style={{fontSize:25,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10}}>
        Change
      </Text>
      <Image source={{uri: pants}}
      style={{
        height:100,
        width:100
      }}/><Text onPress={()=>Actions.PantsScreen()}
                style={{fontSize:25,
                        color: 'white',
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10}}
        >
        Change
      </Text>
      <Image source={{uri: shoes}}
      style={{
        height:100,
        width:100,
      }}/>
      <Text onPress={()=>Actions.ShoeScreen()}
            style={{fontSize:25,
              color: 'white',
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
export default HotWeatherScreen
