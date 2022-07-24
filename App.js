import { v4 as uuid } from "uuid";
import { useState } from "react";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native"; //b built-in components react-native exposes to use in JSS code

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  // we get the parameter 'enteredText' automatically from React Native
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    // responsible for fetching user input as the user types into the textbox
  }

  function addGoalHandler() {
    // should be called when the button is clicked
    setCourseGoals([...courseGoals, enteredGoalText]); // react provides 'currentCourseGoals' automatically as a parameter when setCourseGoals is called
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add Goal"></Button>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <View style={styles.goalsText} key={uuid()}>
            <Text style={{ color: "white" }}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%", // take up 80% of the available width, which is defined by the container that this text resides in (inputContainer in this case)
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalsText: {
    color: "white",
    borderRadius: 6,
    backgroundColor: "#1D9999",
    padding: 8,
    margin: 8,
    alignItems: "center",
  },
});
