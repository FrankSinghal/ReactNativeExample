import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'

import ListViewExmp2 from 'MyApplication/app/component/listview/ListViewExmp2';
import ComponentTI from 'MyApplication/app/component/textinput/ComponentTI';

export default class NavigatorExmp extends Component {

  renderScene(route, navigator){
    switch (route.id) {
      case 'listview':
        return (<ListViewExmp2 navigator={navigator}/>)
      case 'component':
        return (<ComponentTI navigator={navigator}/>)
    }
  }

  render() {
    return (
      <Navigator intialRoute={{id: 'listview'}}
       renderScene={this.renderScene}
       configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}/>
    )
  }
}
