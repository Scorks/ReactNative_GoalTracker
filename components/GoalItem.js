import { StyleSheet, Text, View, Pressable } from "react-native"; //b built-in components react-native exposes to use in JSS code

function GoalItem(props) {
  return (
    <Pressable android_ripple={{color: '#f23'}} onPress={props.onPress.bind(this, props.id)}>
      <View style={styles.goalsText}>
        <Text style={{ color: "white" }}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalsText: {
    color: "white",
    borderRadius: 6,
    backgroundColor: "#1D9999",
    padding: 8,
    margin: 8,
    alignItems: "center",
  },
});

export default GoalItem;
