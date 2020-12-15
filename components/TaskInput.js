import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <Modal visible={props.visible} animationType="slide ">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Task"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button title="Cancel" color="red" onPress={props.onCancelTask} />
          </View>
          <View style={styles.button}>
          <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },

  buttonContainer:{
    flexDirection: "row",
    justifyContent:"space-around",
    width: "60%",
  },

  button:{
    width: "40%"
  }
});

export default TaskInput;
