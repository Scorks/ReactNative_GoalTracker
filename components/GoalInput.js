import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native"; //b built-in components react-native exposes to use in JSS code

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // we get the parameter 'enteredText' automatically from React Native
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    // responsible for fetching user input as the user types into the textbox
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Start to type..."
          value={enteredGoalText}
        />
        <Button onPress={addGoalHandler} title="Add Goal"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default GoalInput;
