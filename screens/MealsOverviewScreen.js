import { FlatList, StyleSheet, View } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/meal/MealItem';
import { useLayoutEffect } from 'react';

function MealsOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter(
        (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
    );

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => categoryId === category.id
        ).title;

        navigation.setOptions({ title: categoryTitle });
    }, [categoryId, navigation]);

    function renderMealItem(itemData) {
        const { id, title, imageUrl, duration, complexity, affordability } =
            itemData.item;

        function pressHandler() {
            navigation.navigate('MealDetails', { id });
        }

        const mealItemProps = {
            title,
            imageUrl,
            duration,
            complexity,
            affordability,
        };
        return <MealItem onPress={pressHandler} {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
