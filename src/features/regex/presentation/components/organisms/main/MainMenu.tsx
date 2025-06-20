// organisms/MainMenu.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardMain from '../../molecules/Cards/card-main/CardMain';

interface MainMenuProps {
  onNavigateToTester: () => void;
  onNavigateToHistory: () => void;
}

const MainMenu = ({ onNavigateToTester, onNavigateToHistory }: MainMenuProps) => {
  return (
    <View style={styles.container}>
      <CardMain
        title="Probar Regex"
        description="Escribe y prueba tus expresiones regulares"
        iconName="play-arrow"
        onPress={onNavigateToTester}
      />
      <CardMain
        title="Historial"
        description="Revisa las regex que has probado"
        iconName="history"
        onPress={onNavigateToHistory}
      />
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    padding: 16,
  },
});