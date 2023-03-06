import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import NoteItem from "./components/NoteItem";
import NoteInput from "./components/NoteInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isModalInputVisible, setIsModalVisible] = useState(false);
  const [noteList, setNoteList] = useState([]);

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalInputVisible);
  };
  const addNoteHandler = (enteredNoteText) => {
    setNoteList((noteList) => [
      {
        text: enteredNoteText,
        id: Math.random().toString(),
        color: randomHexColor(),
      },
      ...noteList,
    ]);
  };

  const deleteNoteHandler = (id) => {
    setNoteList((noteList) => {
      return noteList.filter((note) => note.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button
          title={"Add new note"}
          color={"#025879FF"}
          onPress={toggleModalVisible}
        />
        <NoteInput
          addNoteHandler={addNoteHandler}
          isVisible={isModalInputVisible}
          onClose={toggleModalVisible}
        />
        <View style={styles.noteContainer}>
          <Text style={styles.noteContainerTitle}>
            {noteList.length !== 0 ? "Your ideas" : "No idea yet"}
          </Text>
          <FlatList
            data={noteList}
            renderItem={(itemData) => (
              <NoteItem
                itemText={itemData.item.text}
                itemId={itemData.item.id}
                colorItem={itemData.item.color}
                onDelete={deleteNoteHandler}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  noteContainer: {
    flex: 5,
  },
  noteContainerTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

function randomHexColor() {
  return "#ffffff".replace(/f/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  });
}
