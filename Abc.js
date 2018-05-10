/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};
export default class Abc extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Frank',
      surname: 'Singhal',
      city: 'Noida',
      counts: 1,
      hasStatus: true,
      message: this.props.message,
      message1: this.props.message1
    }
  }

  static defaultProps = {
    message1: 'Hi Default Props'
  }

  onPress = () => {
    console.warn('On Press - called');
    console.log(this.state.counts);
    this.setState({
      counts: this.state.counts - 1
    })
    console.log(this.state.counts);
  }

  onPressed = () => {
    console.warn('On Press + called');
    console.log(this.state.counts);
    this.setState({
      counts: this.state.counts + 1
    })
    console.log("Hi" + this.state.counts);
    console.log(this.state.counts);
  }

  render() {
    console.log('Hello in log');

    let name = this.state.hasStatus
      ? this.state.name
      : 'No Name'
    let surname = this.state.hasStatus
      ? this.state.surname
      : 'No Surname'

    return (<View>
      <View>
        <Text style={styles.welcome}>
          Welcome to {this.props.message}
          Yhhhhhhhhhhhhhhh
        </Text>

        <Text>{this.props.message1}</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.city}</Text>
        <Text>{name}
          {surname}</Text>
        <Text>{this.state.message}</Text>
        <Text style={{
            color: 'red',
            backgroundColor: '#00ffff'
          }}>{this.state.message1}</Text>
      </View>

      <View style={styles.container}>
        <TouchableHighlight style={styles.v1} onPress={this.onPressed} underlayColor="transparent">
          <View>
            <Text>View 1</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity style={styles.v2} onPress={this.onPress} underlayColor="red">
          <View>
            <Text>View 2</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.v3}>
          <Text>View 3</Text>
        </View>
        <View style={styles.v4}>
          <Text>View 4</Text>
        </View>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  container: {
    flexDirection: 'row',
    height: 120
  },
  v1: {
    flex: 0.5,
    backgroundColor: '#445566'
  },
  v2: {
    flex: 1,
    backgroundColor: '#440099'
  },
  v3: {
    flex: 1,
    backgroundColor: '#009966'
  },
  v4: {
    flex: 1,
    backgroundColor: '#990066'
  }
});
