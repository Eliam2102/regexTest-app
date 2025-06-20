import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootDrawerParamList } from "../types/Drawer/types";
import HomeScreen from "../features/regex/presentation/screens/Home";
import TestScreen from "../features/regex/presentation/screens/Tester";
import RecordScreen from "../features/regex/presentation/screens/Record";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            initialRouteName="index"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#BDE0FE',
                },
                headerTintColor: '#333333',
                drawerStyle: {
                    backgroundColor: '#FFFFFF', 
                },
                drawerActiveTintColor: '#0077B6',
                drawerInactiveTintColor: '#8E8E8E',
                drawerLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                },
            }}
        >
            <Drawer.Screen
                name="index"
                component={HomeScreen}
                options={{ title: 'Inicio' }}
            />
            <Drawer.Screen
                name="tester"
                component={TestScreen}
                options={{ title: 'Tester' }}
            />
            <Drawer.Screen
                name="record"
                component={RecordScreen}
                options={{ title: 'Historial' }}
            />
        </Drawer.Navigator>
    );
}