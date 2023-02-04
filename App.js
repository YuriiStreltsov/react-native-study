import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredIdeaText, setEnteredIdeaText] = useState("");
  const [ideaList, setIdeaList] = useState([]);
  const ideaInputHandler = (enteredText) => {
    setEnteredIdeaText(enteredText);
  };
  const addIdeaHandler = () => {
    setIdeaList((ideaList) => [
      { text: enteredIdeaText, id: Math.random().toString() },
      ...ideaList,
    ]);
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
        <Text style={styles.ideaContainerTitle}>
          {ideaList.length !== 0 ? "Your ideas" : "No idea yet"}
        </Text>
        <FlatList
          data={ideaList}
          renderItem={(itemData) => (
            <View style={styles.ideaItem}>
              <Text style={styles.ideaItemText}>{itemData.item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
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
  ideaItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "rgb(2,88,121)",
  },
  ideaItemText: {
    color: "white",
  },
});
