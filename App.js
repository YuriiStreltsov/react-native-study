import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredIdeaText, setEnteredIdeaText] = useState("");
  const [ideaList, setIdeaList] = useState([]);
  const ideaInputHandler = (enteredText) => {
    setEnteredIdeaText(enteredText);
  };
  const addIdeaHandler = () => {
    setIdeaList((ideaList) => [...ideaList, enteredIdeaText]);
    setEnteredIdeaText("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Type your idea"}
          style={styles.inputText}
          onChangeText={ideaInputHandler}
        />
        <Button title={"Add idea"} onPress={addIdeaHandler} />
      </View>
      <View style={styles.ideaContainer}>
        <Text style={styles.ideaContainerTitle}>List of ideas</Text>
        {ideaList.length !== 0
          ? ideaList.map((idea) => <Text key={idea}>{idea}</Text>)
          : null}
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
