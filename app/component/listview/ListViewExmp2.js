import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';

export default class ListViewExmp2 extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      myDataSource: ds
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((response) => {
      this.setState({myDataSource: this.state.myDataSource.cloneWithRows(response)})
    })
  }

  renderRow(user) {
    return (<View style={styles.row}>
      <Text style={styles.rowText}>{user.name}</Text>
      <Text style={styles.rowText}>{user.username}</Text>
      <Text style={styles.rowText}>{user.email}</Text>
      <Text style={styles.rowText}>{user.phone}</Text>
      <Text style={styles.rowText}>{user.website}</Text>
      <Text style={styles.rowText}>{user.company.name}</Text>
    </View>)
  }

  render() {
    return (<ListView dataSource={this.state.myDataSource} renderRow={this.renderRow.bind(this)}/>)
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'yellow',
    marginBottom: 5,
    flex:1
  },
  rowText: {

  }
})
