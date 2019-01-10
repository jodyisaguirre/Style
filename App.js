import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import Header from './src/components/Header.js'
import ColdWeatherScreen from './ColdWeatherScreen'
import {Router, Scene} from 'react-native-router-flux'
import Splash from './Splash.js'
import HotWeatherScreen from './HotWeatherScreen'
import HatScreen from './HatScreen'
import TempPage from './TempPage'
import JacketScreen from './JacketScreen'
import AddNew from './AddNew'











export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
        <Scene
          key='Splash'
          component={Splash}
          title='Home'
          inital
           />
        <Scene
        key='ColdWeatherScreen'
        component={ColdWeatherScreen}
        title='ColdWeather'

         />
         <Scene
         key='HotWeatherScreen'
         component={HotWeatherScreen}
         title='HotWeather'

          />
          <Scene
          key='HatScreen'
          component={HatScreen}
          title='Hats'

           />
           <Scene
           key='TempPage'
           component={TempPage}
           title='Weather'

            />
            <Scene
            key='JacketScreen'
            component={JacketScreen}
            title='Jackets'

             />
             <Scene
             key='AddNew'
             component={AddNew}
             title='Add New Item'

              />

         </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
