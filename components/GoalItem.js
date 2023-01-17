import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.GoalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  GoalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
