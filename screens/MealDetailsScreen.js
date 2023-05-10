import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/meal/MealDetails';
import Subtitle from '../components/meal/MealDetail/Subtitle';
import List from '../components/meal/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/ui/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailsScreen({ route, navigation }) {
    const favoriteCtx = useContext(FavoritesContext);
    const mealId = route.params.id;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const isFavoriteMeal = favoriteCtx.ids.includes(mealId);

    function toggleFavoriteStatus() {
        favoriteCtx.toggleFavorite();
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={isFavoriteMeal ? 'star' : 'star-outline'}
                        color="white"
                        size={24}
                        onPress={toggleFavoriteStatus}
                    />
                );
            },
        });
    }, [navigation, toggleFavoriteStatus]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                affordability={selectedMeal.affordability}
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List listItems={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List listItems={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
