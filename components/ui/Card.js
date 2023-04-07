import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';
import Sizes from '../../constants/sizes';

function Card({ children }) {
    return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Sizes.whitespace.EXTRA_LARGE,
        marginHorizontal: Sizes.whitespace.LARGE,
        padding: Sizes.whitespace.BASE,
        backgroundColor: Colors.primary800,
        borderRadius: Sizes.border.RADIUS_SMALL,
        elevation: Sizes.ELEVATION,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});
