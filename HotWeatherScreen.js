import React from 'react'
import {StyleSheet,Text,View, Container,Image, Button} from 'react-native'
import { Actions} from 'react-native-router-flux'

const HotWeatherScreen = () =>{

  return(
    <View>

    <Image source={require('./src/components/hat.png')}
            style={{
              height:100,
              width:100
            }}/>
      <Text onPress={()=>Actions.HatScreen()}>
        Change
      </Text>
    <Image source={require('./src/components/Jacket.png')}
    style={{
      height:100,
      width:100
    }}/>
    <Text onPress={()=>Actions.JacketScreen()}>
      Change
    </Text>
    <Image source={require('./src/components/shirt.png')}
    style={{
      height:100,
      width:100
    }}/>
    <Text onPress={()=>Actions.ShirtScreen()}>
      Change
    </Text>
    <Image source={require('./src/components/pants.png')}
    style={{
      height:100,
      width:100
    }}/><Text onPress={()=>Actions.PantsScreen()}>
      Change
    </Text>
    <Image source={require('./src/components/shoes.png')}
    style={{
      height:100,
      width:100,
    }}/>
    <Text onPress={()=>Actions.ShoeScreen()}>
      Change
    </Text>





    <Text >

    </Text>
    </View>

  )
}

export default HotWeatherScreen
