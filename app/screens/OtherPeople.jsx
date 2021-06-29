import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  people: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  groups: {
    height: 75,
    width: 75,
    marginLeft: 20,
    boderColor: '#dddddd',
  },
})

class OtherPeople extends Component {
  render() {
    return (
      <View style={styles.groups}>
        <View style={styles.people}>
          <Image source={this.props.image}
            style={{ flex: 1, width: 50, height: 50, resizeMode: 'cover', borderRadius: 50 }} />
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          <Text> {this.props.name}</Text>
          <Text style={{ fontSize: 8, }}> {this.props.job} </Text>
        </View>
      </View>
    )
  }
}

export default OtherPeople;