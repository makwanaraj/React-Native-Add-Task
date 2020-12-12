import React,{useState} from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('');
    

    const goalInputHandler = (enteredText) => {
        setEnteredTask(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Add Task" style={styles.input} onChangeText={goalInputHandler} value={enteredTask} />
            <Button title="Add" onPress={() => props.onAddTask(enteredTask)} />
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default TaskInput;