import 'react-native-gesture-handler';

import * as React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from './screens/MainPage';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import MessageScreen from './screens/MessageScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen
                name="Home"
                component={MainPage}
                options={{ title: 'Home Page' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details Page' }}
            />
        </Stack.Navigator>
    );
}

function SettingsStack() {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Setting Page' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details Page' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile Page' }}
            />
        </Stack.Navigator>
    );
}
function MessageStack() {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen
                name="Settings"
                component={MessageScreen}
                options={{ title: 'Setting Page' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details Page' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile Page' }}
            />
        </Stack.Navigator>
    );
}
function ProfileStack() {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Profile Page' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details Page' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile Page' }}
            />
        </Stack.Navigator>
    );
}
function SearchStack() {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: 'Setting Page' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Details Page' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile Page' }}
            />
        </Stack.Navigator>
    );
}


function Navbar() {
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: '#42f44b',
                    showLabel: false,
                }}>
                <Tab.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={{
                        tabBarLabel: 'false',
                        tabBarIcon: ({ color, size }) => (
                            <Feather
                                name="user" size={size} color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'false',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home-outline" size={size} color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SearchStack"
                    component={SearchStack}
                    options={{
                        tabBarLabel: 'false',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="search" size={size} color={color}
                            />

                        ),
                    }}
                />
                <Tab.Screen
                    name="MessageStack"
                    component={MessageStack}
                    options={{
                        tabBarLabel: 'false',
                        tabBarIcon: ({ color, size }) => (
                            <Feather
                                name="message-circle" size={size} color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SettingsStack"
                    component={SettingsStack}
                    options={{
                        tabBarLabel: 'false',
                        tabBarIcon: ({ color, size }) => (
                            <Feather
                                name="settings" size={size} color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navbar;