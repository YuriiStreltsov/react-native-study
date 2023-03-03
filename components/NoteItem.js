import { Pressable, StyleSheet, Text, View } from "react-native";

function NoteItem({ itemText, itemId, onDelete }) {
  const deleteNoteHandler = () => {
    onDelete(itemId);
  };

  return (
    <View style={style.noteItem}>
      <Pressable
        onPress={deleteNoteHandler}
        android_ripple={{ color: "rgb(196,229,243)" }}
        style={({ pressed }) => pressed && style.pressedItem}
      >
        <Text style={style.noteItemText}>{itemText}</Text>
      </Pressable>
    </View>
  );
}

export default NoteItem;

const style = StyleSheet.create({
  noteItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "rgb(2,88,121)",
  },
  pressedItem: {
    opacity: 0.5,
  },
  noteItemText: {
    color: "white",
    padding: 8,
  },
});
