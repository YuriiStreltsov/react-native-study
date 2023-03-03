import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import NoteItem from "./components/NoteItem";
import NoteInput from "./components/NoteInput";

export default function App() {
  const [noteList, setNoteList] = useState([]);

  const addNoteHandler = (enteredNoteText) => {
    setNoteList((noteList) => [
      { text: enteredNoteText, id: Math.random().toString() },
      ...noteList,
    ]);
  };
  return (
    <View style={styles.container}>
      <NoteInput addNoteHandler={addNoteHandler} />
      <View style={styles.noteContainer}>
        <Text style={styles.noteContainerTitle}>
          {noteList.length !== 0 ? "Your ideas" : "No idea yet"}
        </Text>
        <FlatList
          data={noteList}
          renderItem={(itemData) => <NoteItem itemData={itemData} />}
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
  noteContainer: {
    flex: 5,
  },
  noteContainerTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
