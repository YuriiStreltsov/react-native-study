import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Type your idea"} style={styles.inputText} />
        <Button title={"Add idea"} />
      </View>
      <View>
        <Text>List of ideas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingEnd: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "#8de0e2",
    width: "70%",
  },
});
