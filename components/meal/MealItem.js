import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Styles from '../../styles/Styles';
import MealDetails from './MealDetails';

function MealItem({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    onPress,
}) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        affordability={affordability}
                        complexity={complexity}
                        duration={duration}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        ...Styles.shadow,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});
