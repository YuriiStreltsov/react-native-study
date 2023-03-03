import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

function NoteInput({ addNoteHandler }) {
  const [enteredNoteText, setEnteredNoteText] = useState("");

  const noteInputHandler = (enteredText) => {
    setEnteredNoteText(enteredText);
  };

  const buttonOnClickHandler = () => {
    addNoteHandler(enteredNoteText);
    setEnteredNoteText("");
  };
  return (
    <View style={style.inputContainer}>
      <TextInput
        placeholder={"Type your idea"}
        style={style.inputText}
        onChangeText={noteInputHandler}
        value={enteredNoteText}
      />
      <Button
        title={"Add idea"}
        onPress={buttonOnClickHandler}
        disabled={!enteredNoteText}
      />
    </View>
  );
}

export default NoteInput;

const style = StyleSheet.create({
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
});
