import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function NoteItem({ itemText, itemId, colorItem, onDelete }) {
  const deleteNoteHandler = () => {
    onDelete(itemId);
  };

  return (
    <View style={[style.noteItem, { backgroundColor: colorItem }]}>
      <Pressable
        onPress={deleteNoteHandler}
        android_ripple={{ color: "C4E5F3FF" }}
        style={({ pressed }) => pressed && style.pressedItem}
      >
        <View style={style.contentItem}>
          <Image
            source={require("../assets/images/sticky_note.png")}
            style={style.noteImage}
          />
          <Text style={style.noteItemText}>{itemText}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NoteItem;

const style = StyleSheet.create({
  noteItem: {
    margin: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#dddddd",
  },
  pressedItem: {
    opacity: 0.5,
  },
  contentItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  noteImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  noteItemText: {
    color: "white",
    padding: 8,
  },
});
