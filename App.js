import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import Constants from "expo-constants";

export default function App() {
  const [enteredTask,setEnteredTask] =useState('');
  const [tasks, setTasks] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  }

  const addGoalHandler = () =>{
    setTasks(currentTask => [...currentTask, enteredTask])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add Task" style={styles.input} onChangeText={goalInputHandler} value={enteredTask} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>

      <View>
      {tasks.map((task) =><View key={task} style={styles.listItem}><Text>{task}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    padding: 50,

  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },

  listItem:{
    padding:10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1, 
    marginVertical: 10
  }
});
