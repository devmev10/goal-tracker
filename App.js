import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';

export default function App() {
  return (
    <View  style={styles.container}>
      <View style={styles.inputContainer}>
            <TextInput style={styles.TextInput} placeholder='Your course goal'/>
            <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
