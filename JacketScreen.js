import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Hats on Hats on Hats',
    name: 'One',
    image: require('./src/components/Jacket.png'),
  },

];
export default class DeckSwiperExample extends Component {
  render() {
    return (
        <Container>
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
                      <Text note>Your mother fucking hat son</Text>
                      <Text>
                        Add New
                      </Text>
                      <Text>
                        Edit
                      </Text>
                      <Text>
                        Delete
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                </CardItem>
              </Card>
            }
          />
        </View>

      </Container>

      </Container>


    );
  }
}
