import { StyleSheet, Text, View } from "react-native";

function NoteItem({ itemData }) {
  return (
    <View style={style.noteItem}>
      <Text style={style.noteItemText}>{itemData.item.text}</Text>
    </View>
  );
}

export default NoteItem;

const style = StyleSheet.create({
  noteItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "rgb(2,88,121)",
  },
  noteItemText: {
    color: "white",
  },
});
