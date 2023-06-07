import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useCallback, useContext, useEffect, useState } from 'react';
import IconButton from './components/ui/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import Button from './components/ui/Button';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}

function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen
                name='Welcome'
                component={WelcomeScreen}
                options={{
                    headerRight: ({ tintColor }) => (
                        <IconButton
                            icon='exit'
                            color={tintColor}
                            size={24}
                            onPress={authCtx.logout}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

function Navigation() {
    const authCtx = useContext(AuthContext);

    const renderProtectedScreens = authCtx.isAuthenticated ? (
        <AuthenticatedStack />
    ) : (
        <AuthStack />
    );

    return <NavigationContainer>{renderProtectedScreens}</NavigationContainer>;
}

function Root() {
    const [isFetchedToken, setIsFetchedToken] = useState(false);

    const authCtx = useContext(AuthContext);
    useEffect(() => {
        async function fetchToken() {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                if (storedToken) {
                    authCtx.authenticate(storedToken);
                }
            } catch (error) {
                console.warn(error);
            } finally {
                setIsFetchedToken(true);
            }
        }
        fetchToken();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isFetchedToken) {
            await SplashScreen.hideAsync();
        }
    }, [isFetchedToken]);

    if (!isFetchedToken) {
        <Text>The App is loading...</Text>;
    }

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <Navigation />
        </View>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <AuthContextProvider>
                <Root />
            </AuthContextProvider>
        </>
    );
}
