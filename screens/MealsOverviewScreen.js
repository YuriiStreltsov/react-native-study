import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/meal/MealsList/MealsList';

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

    return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
