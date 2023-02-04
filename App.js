import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={"Type your idea"} style={styles.inputText} />
        <Button title={"Add idea"} />
      </View>
      <View style={styles.ideaContainer}>
        <Text style={styles.ideaContainerTitle}>List of ideas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  inputText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#8de0e2",
    width: "70%",
  },
  ideaContainer: {
    flex: 5,
  },
  ideaContainerTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
