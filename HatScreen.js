import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, ImageBackground } from 'native-base';
import { Actions} from 'react-native-router-flux'






const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: { uri: 'data:image/jpeg;base64,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' }

  },

];
export default class DeckSwiperExample extends Component {

  nextSlide = () => {
    alert('sup Son')
            }



  render() {

    return (

      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text>{item.text}</Text>
                      <Text note>Your mother fucking hat son</Text>
                      <Text onPress={()=>Actions.AddNew()}>
                        Add New
                      </Text>
                      <Text onPress={()=>Actions.AddNew()}>
                        Edit
                      </Text>
                      <Text onPress={()=>alert('Are you sure you want to delete this item ')}>
                        Delete </Text>
                         </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />

                </CardItem>
                <CardItem>
                <Button onPress={()=>Actions.ColdWeatherScreen({ hat: item.image.uri })}>
                <Text >
                  Fire
                </Text>
                </Button>
                <Button onPress={this.nextSlide}>
                <Text >
                  Hard Pass
                </Text>
                </Button>
                </CardItem>

              </Card>
            }
          />
        </View>
      </Container>

    );
  }
}
