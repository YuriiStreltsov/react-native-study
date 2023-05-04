import { Image, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/meal/MealDetails';

function MealDetailsScreen({ route }) {
    const mealId = route.params.id;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails
                affordability={selectedMeal.affordability}
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
            />

            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({});
