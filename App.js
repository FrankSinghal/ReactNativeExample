/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Abc from './Abc';
import ComponentTI from './app/component/textinput/ComponentTI';
import ListViewExmp from './app/component/listview/ListViewExmp';
import ListViewExmp2 from './app/component/listview/ListViewExmp2';
import NavigatorExmp from './app/component/navigator/NavigatorExmp';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<View style={styles.container}>

      {/* View Text example */}
      {/*
      <Text style={styles.welcome}>
        Welcome to React Native Frank!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit App.js
      </Text>
      <Text style={styles.instructions}>
        {instructions}
      </Text>
      */}

      {/* View Text example */}
      {/*<Abc message="Hi my classes" message1="Hahahaha"/>*/}

      {/* Text Input, Switch Button */}
      {/*<ComponentTI/>*/}

      {/* List View example */}
      {/*<ListViewExmp/>*/}
      {/*<ListViewExmp2/>*/}

      {/*Navigator Example*/}
      <NavigatorExmp />
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
