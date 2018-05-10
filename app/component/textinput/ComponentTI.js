import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Switch} from 'react-native';

export default class ComponentTI extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hello Frank",
      status: 0,
      switchValue: false
    }
  }

  onChangeText(value) {
    this.setState({name: value})
  }

  onSubmit = () => {
    console.log("on submitted called");
  }

  onSwitchChange = (value) => {
    this.setState({switchValue: value})
    console.log(value);
  }

  render() {
    return (<View>
      <TextInput style={styles.ti} placeholder="Enter your name" onChangeText={(value) => this.onChangeText(value)} onSubmitEditing={this.onSubmit}></TextInput>

      <TextInput style={styles.ti} placeholder="Enter your name" onSubmitEditing={this.onSubmit}></TextInput>

      <Text>{this.state.name}</Text>

      <Switch value={this.state.switchValue} onValueChange={(value) => this.onSwitchChange(value)}/>
    </View>)
  }
}

const styles = StyleSheet.create({
  ti: {
    width: 200,
    textAlign: 'center'
  }
})
