import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';

const users = [
  {
    name: "Frank"
  }, {
    name: "Lalit"
  }, {
    name: "Eftakhar"
  }, {
    name: "Ashish"
  }
]

export default class ListViewExmp extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      myDataSource: ds.cloneWithRows(users)
    };
  }

  renderRow(user) {
    return (<View style={styles.row}>
      <Text style={styles.rowText}>{user.name}</Text>
    </View>)
  }

  render() {
    return (<ListView dataSource={this.state.myDataSource} renderRow={this.renderRow.bind(this)}/>)
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent:'center',
    marginBottom:5
  },
  rowText: {
    height: 50,
    flex:1
  }
})
