import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#351401',
                },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
                drawerContentStyle: { backgroundColor: '#351401' },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#e4baa1',
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'All categories',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style={'light'} />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="MealsCategories"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#351401',
                        },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#3f2f25' },
                    }}
                >
                    <Stack.Screen
                        name="DrawerScreen"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen
                        name="MealDetails"
                        component={MealDetailsScreen}
                        options={{
                            title: 'About the meal',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
