import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FormularioScreen from "../screens/FormularioScreen";

const Stack = createStackNavigator()

function MyStack() {

    return (
        <Stack.Navigator initialRouteName="Tab">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tab" component={MyTabs}/>
        </Stack.Navigator>

    )
}

const Tab = createBottomTabNavigator()

function MyTabs() {

    return (
        <Tab.Navigator 
        screenOptions={{headerShown:false}}
        initialRouteName="Formulario"
        >
            <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
            <Tab.Screen name="Formulario" component={FormularioScreen} />
        </Tab.Navigator>

    )
}

export default  function NavegadorPrincipal(){

    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}