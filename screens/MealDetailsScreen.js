import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/meal/MealDetails';
import Subtitle from '../components/meal/MealDetail/Subtitle';
import List from '../components/meal/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/ui/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetailsScreen({ route, navigation }) {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.id;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const isFavoriteMeal = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (isFavoriteMeal) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={isFavoriteMeal ? 'star' : 'star-outline'}
                        color="white"
                        size={24}
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);

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
