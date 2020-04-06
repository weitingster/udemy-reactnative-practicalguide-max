import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      enteredGoal
    ]);
  };

  return (<View style={styles.screen}>
    <Text style={styles.title}>Weiting's Goals App</Text>
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.inputText} onChangeText={goalInputHandler} value={enteredGoal}/>
      <Button title="Add Goal" onPress={addGoalHandler}/>
    </View>
    <FlatList data={courseGoals} renderItem={itemData => (<View style={styles.listItem
}>
        <Text>{itemData.item}</Text>
        < /View>
          )}/>

  </View>);
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  title: {
    fontSize: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputText: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 5
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }

});
