import React, { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isAddModal, setIsAddModal] =useState(false); 

  const addTaskHandler = (taskTitle) => {
    setTasks((currentTask) => [
      ...currentTask,
      { id: Math.random().toString(), value: taskTitle },
    ]);

    setIsAddModal(false);
  };

  const removeTaskHandler = (taskId) => {
    setTasks((currentTask) => {
      return currentTask.filter((task) => task.id !== taskId);
    });
  };

  const cancelTaskHandler = () => {
    setIsAddModal(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddModal(true)}/>
      <TaskInput visible = {isAddModal} onAddTask={addTaskHandler} onCancelTask ={cancelTaskHandler} />
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
