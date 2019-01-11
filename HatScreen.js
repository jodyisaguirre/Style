import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import { Actions} from 'react-native-router-flux'






const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: { uri: 'https://images-na.ssl-images-amazon.com/images/I/813D-GWNaUL._UX679_.jpg' }

  },

];
export default class DeckSwiperExample extends Component {
  state = {


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
                  Accept
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
