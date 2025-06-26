import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import { StyleSheet } from "react-native";




const Tab = createBottomTabNavigator()

function MyTab() {

    return (
        <Tab.Navigator initialRouteName="Calculadora"
            screenOptions={{
                tabBarStyle: { position: 'absolute' },
                tabBarBackground: () => (
                    <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
                ),
            }}
        >
            <Tab.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />)
                }}
            />

            <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    tabBarIcon: () => (<Entypo name="login" size={24} color="black" />)
                }}
            />



            <Tab.Screen
                name="Calculadora"
                component={CalculadoraScreen}
                options={{
                    tabBarIcon: () => (<AntDesign name="calculator" size={24} color="black" />)
                }}
            />
        </Tab.Navigator>
    )
}

export default function NavegadorBotton() {

    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    )
}