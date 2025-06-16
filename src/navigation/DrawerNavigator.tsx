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
                    backgroundColor: '#345809',
                },
                headerTintColor: '#9849ff',
                drawerStyle: {
                    backgroundColor: '#890243',
                },
                drawerActiveTintColor: '#539023',
                drawerInactiveTintColor: '#3499ff',
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
                options={{ title: 'Record' }}
            />
        </Drawer.Navigator>
    );
}