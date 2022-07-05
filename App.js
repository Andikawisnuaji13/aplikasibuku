import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './components/Home';
import Best from './components/Best';
import Detail from './components/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
function Homenavigator() {
return (
<Stack.Navigator >
<Stack.Screen
name="Utama"
component={Home}
options={{
title: 'Home',
headerTitleAlign: 'center',
headerTintCOlor: '#fff',
}}
/>
<Stack.Screen
name="Detail"
component={Detail}
options={{
title: 'Detail Buku',
headerTitleAlign: 'center',
headerTintCOlor: '#fff',
}}
/>
</Stack.Navigator>
);
}
function Bestnavigator() {
return (
<Stack.Navigator>
<Stack.Screen
name="Best"
component={Best}
options={{
title: 'Buku Bestseller',
headerTitleAlign: 'center',
headerTintCOlor: '#fff',
}}
/>
</Stack.Navigator>
);
}
export default function App() {
return (
<NavigationContainer>
<Tabs.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ color }) => {
let iconName;
if (route.name === 'Home') {
iconName = 'home';
} else if (route.name === 'Best') {
iconName = 'star';
}
return <MaterialIcons name={iconName} size={25} color={color}
/>;
},
})}>
<Tabs.Screen name="Home" component={Homenavigator} />
<Tabs.Screen name="Best" component={Bestnavigator} />
</Tabs.Navigator>
</NavigationContainer>
);
}