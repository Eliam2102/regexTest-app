export interface CardMainProps {
  title: string; //esta como es tarjeta principal unicmante se debera tener par poder mostrar titulo de esa tarjeta
  description: string; // para descriibir unpoco de a dne lleva
  iconName?: string; // que tenga un icono igual 
  onPress?: () => void; //evento para ueq sea presionable y pueda enviarme a la ruta
}