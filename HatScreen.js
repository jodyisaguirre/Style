import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, ImageBackground } from 'native-base';
import { Actions} from 'react-native-router-flux'







export default class DeckSwiperExample extends Component {
  state = {
    clothingsData:[],

  }
  componentDidMount(){
    fetch("http://localhost:3003/clothing")
    .then(res => res.json())
    .then(res=>{
      return this.setState({ clothingsData:res.clothings})
    })
  }









  render() {

const {clothingsData}= this.state

    return (


      <Container>
        <Header />
        <View>
          {clothingsData.length>0?<DeckSwiper
            dataSource={clothingsData}
            renderItem={item =>

              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: item.url}} />
                    <Body>
                      <Text>{item.description}</Text>
                      <Text>{item.color}</Text>
                      <Text onPress={()=>Actions.AddNew()}>
                        Add New
                      </Text>
                      <Text onPress={()=>Actions.EditPhoto({hat: item.id})}>
                        Edit
                      </Text>
                      <Text onPress={()=>Actions.DeletePhoto({hat: item.id})}>
                        Delete </Text>
                         </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={{uri: item.url}} />

                </CardItem>
                <CardItem>
                <Button onPress={()=>Actions.ColdWeatherScreen({ hat: item.url })}>
                <Text >
                  Fire
                </Text>
                </Button>

                </CardItem>

              </Card>
            }
          />:<Text>Loading </Text>}
        </View>
      </Container>

    );
  }
}
