import React, {Component} from 'react'
import {StyleSheet,Text,View, Container,Image, Button,ImageBackground} from 'react-native'
import { Actions} from 'react-native-router-flux'

class ColdWeatherScreen extends Component{
  render(){
    const hat = this.props.hat || 'data:image/jpeg;base64,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'
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





      <Image source={require('./src/components/Jacket.png')}
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
      <Image source={require('./src/components/shirt.png')}
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
      <Image source={require('./src/components/pants.png')}
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
      <Image source={require('./src/components/shoes.png')}
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
export default ColdWeatherScreen
