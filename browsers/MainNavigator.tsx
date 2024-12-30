import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import FormularioScreen from "../screens/FormularioScreen";
import ListaSree from "../screens/ListaSree";

const Top = createMaterialTopTabNavigator();

function MyTops(){
    return(
        <Top.Navigator>
            <Top.Screen name="Welcome" component={WelcomeScreen}/>
            <Top.Screen name="Guardar" component={FormularioScreen}/>
            <Top.Screen name="Lista" component={ ListaSree}/>
        </Top.Navigator>
    );
}

export default function MainNavigator(){
    return (
        <NavigationContainer>
           <MyTops/> 
        </NavigationContainer>
    );
}