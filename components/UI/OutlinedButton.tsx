import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

type OutlinedButtonProps = {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  children: string;
};

function OutlinedButton({ onPress, icon, children }: OutlinedButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={Colors.primary500} size={18} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderBottomColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
