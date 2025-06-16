//import important module
import { DrawerNavigationProp } from "@react-navigation/drawer";

//creacion del tipado ahora si
export type RootDrawerParamList = {
    //defino mis rutas principales en este caso deben ser las siguientes:
    index: undefined;
    tester: undefined;
    record: undefined;
    //las dejo asi de momento puesto que de momento ninguna de estar recibe algun parametro
}


//para exportarlo usamos primero el prefijo EXPORT TYPE 
//luego DrawerNavProp o el nombre que queramos darle 
// = Aqui luego dle igual, va el nombre del modulo que importamso
//y dentro de <> debe ir lo que creamos
export type DrawerNavProp = DrawerNavigationProp<RootDrawerParamList>;
