import { StyleSheet, Text, View } from 'react-native';

function MealsOverview() {
    return (
        <View style={styles.container}>
            <Text>Meal Overview Screen</Text>
        </View>
    );
}

export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
