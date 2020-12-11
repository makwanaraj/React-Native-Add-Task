import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Constants from "expo-constants";

export default function App() {
  const [changeText, setChangeText] = useState();

  function changeHandle(change) {
    setChangeText(change);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add Goal" style={styles.input} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    paddingTop: Constants.statusBarHeight,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 20
  }
});
