import {Pressable, Text, View, StyleSheet} from "react-native";

function PrimaryButton({children, onPress}) {
    const pressHandler = () => {
        onPress()
    };
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={pressHandler}
                android_ripple={{color: "#64002c"}}
                style={({pressed}) =>
                    pressed
                        ? [styles.buttonContainer, styles.pressed]
                        : styles.buttonContainer
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        margin: 4,
        overflow: "hidden",
    },
    buttonContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
