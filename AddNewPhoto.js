import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Image, View, Text } from 'native-base';
import CameraRollPicker from 'react-native-camera-roll-picker'

export default class FormExample extends Component {
  getSelectedImages(image){
    if(image[0])
      alert(image[0].uri)
  }


  render() {
    return (
      <Container>
        <CameraRollPicker callback={this.getSelectedImages} />

      </Container>
    );
  }
}
