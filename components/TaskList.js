<<<<<<< HEAD
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskList = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10
    }
})

=======
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskList = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10
    }
})

>>>>>>> 83315fbab51f78c2388c3ebed7fb55922dc7ac27
export default TaskList;