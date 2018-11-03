import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Topic01 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} horizontal>
          <View style={styles.red}>
            <Text>This view has a red background</Text>
          </View>
          <View style={styles.bordered}>
            <Text>This view has a border</Text>
          </View>
          <View style={[styles.bordered, styles.red]}>
            <Text>This view has a border and red background</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'grey',
    height: 300
  },
  red: {
    backgroundColor: 'red',
    flex: 2
  },
  bordered: {
    borderWidth: 1,
    borderColor: 'black',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
