import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';
import Sizes from '../../constants/sizes';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: Sizes.border.WIDTH_MEDIUM,
        borderColor: Colors.accent500,
        padding: Sizes.isSmallScreenWidth
            ? Sizes.whitespace.MEDIUM
            : Sizes.whitespace.LARGE,
        margin: Sizes.isSmallScreenWidth
            ? Sizes.whitespace.MEDIUM
            : Sizes.whitespace.LARGE,
        borderRadius: Sizes.border.RADIUS_SMALL,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontFamily: 'open-sans-bold',
        fontSize: Sizes.isSmallScreenWidth
            ? Sizes.font.BASE
            : Sizes.font.EXTRA_LARGE,
    },
});
