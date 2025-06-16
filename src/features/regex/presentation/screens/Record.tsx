import { View, Text, StyleSheet, Button } from 'react-native';

export default function RecordScreen(){
    return (
        <View style={styles.container}>
             <Text style={styles.text}>Bienvenido a la APP tester </Text>
             {/* //aqui iria un flatlist con cardsss para que se meustren las card pulsable para ver el detalle */}
        </View>
    )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});