import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';
import Sizes from '../../constants/sizes';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Gues: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: Sizes.border.WIDTH_SMALL,
        borderRadius: Sizes.border.RADIUS_LARGE,
        padding: Sizes.whitespace.BASE,
        marginVertical: Sizes.whitespace.MEDIUM,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: Sizes.ELEVATION,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
    },
});
