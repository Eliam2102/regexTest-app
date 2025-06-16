import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../types/Stack/types";
import DetailScreen from "../features/regex/presentation/screens/DetailScreen";
import HomeScreen from "../features/regex/presentation/screens/Home";
import RecordScreen from "../features/regex/presentation/screens/Record";
import TestScreen from "../features/regex/presentation/screens/Tester";

const Stack = createNativeStackNavigator<StackParamList>();



export default function StackNavigation (){
    return(
        <Stack.Navigator
        initialRouteName="index"
        screenOptions={{ headerShown: false }}
        >
            {/* //aqui van las pantallas del stack */}
            <Stack.Screen name="index" component={HomeScreen} />
            <Stack.Screen name="tester" component={TestScreen}/>
            <Stack.Screen name="record" component={RecordScreen}/>
            <Stack.Screen name="detail" component={DetailScreen}/> 
        </Stack.Navigator>
    )
}