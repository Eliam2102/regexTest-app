import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainMenu from '../components/organisms/main/MainMenu';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>    
      <MainMenu
        onNavigateToTester={() => navigation.navigate('tester')}
        onNavigateToHistory={() => navigation.navigate('record')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
});