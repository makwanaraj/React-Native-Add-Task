import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (taskTitle) => {
    setTasks((currentTask) => [
      ...currentTask,
      { id: Math.random().toString(), value: taskTitle },
    ]);
  };

  const removeTaskHandler = (taskId) => {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.id !== taskId);
    });
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={tasks}
        renderItem={(itemData) => (
          <TaskList
             id={ itemData.item.id}
            onDelete={removeTaskHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    padding: 50,
  },
});
