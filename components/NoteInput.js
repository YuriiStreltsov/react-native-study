import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

function NoteInput({ addNoteHandler, isVisible, onClose }) {
  const [enteredNoteText, setEnteredNoteText] = useState("");

  const noteInputHandler = (enteredText) => {
    setEnteredNoteText(enteredText);
  };

  const buttonAddNoteHandler = () => {
    addNoteHandler(enteredNoteText);
    setEnteredNoteText("");
    onClose();
  };

  const buttonCanselHandler = () => {
    setEnteredNoteText("");
    onClose();
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={style.inputContainer}>
        <Image
          source={require("../assets/images/sticky_note.png")}
          style={style.image}
        />
        <TextInput
          placeholder={"Type your idea"}
          style={style.inputText}
          onChangeText={noteInputHandler}
          value={enteredNoteText}
        />
        <View style={style.buttonContainer}>
          <View style={[style.button, style.buttonSpace]}>
            <Button
              title="Add idea"
              onPress={buttonAddNoteHandler}
              disabled={!enteredNoteText}
              color={"#217c28"}
            />
          </View>
          <View style={style.button}>
            <Button
              title="Cancel"
              onPress={buttonCanselHandler}
              color={"#b00454"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default NoteInput;

const style = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#dbf0f8",
  },
  inputText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#8de0e2",
    backgroundColor: "#d1c9f6",
    minWidth: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
  },
  buttonSpace: {
    marginRight: 20,
  },
});
