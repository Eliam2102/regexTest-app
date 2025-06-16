import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type StackParamList = {
    //aqui van las pantallas dentro del stack
    index: undefined;
    tester: undefined;
    record: undefined;
    detail: {id: string}; //dentro de los parametros quiero que reciba un ID
}



export type StackNavProp = NativeStackNavigationProp<StackParamList>;