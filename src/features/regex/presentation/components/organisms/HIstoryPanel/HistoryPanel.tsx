import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Card from '../../atoms/Card/Card';
import Text from '../../atoms/Text/Text';
import Icon from '../../atoms/Icono/Icon';
import ErrorFeedback from '../../molecules/feedback/ErrorFeedback';
import Button from '../../atoms/Button/Button';

interface HistoryPanelProps {
  history: string[];
  onSelect: (regex: string) => void;
  onClearHistory: () => void;
}

const HistoryPanel = ({ history, onSelect, onClearHistory }: HistoryPanelProps) => {
  return (
    <View style={styles.container}>
      {history.length === 0 && (
        <ErrorFeedback message="No hay historial disponible." />
      )}
      <FlatList
        data={history}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Text>{item}</Text>
            <Button onClick={() => onSelect(item)}>
              <Icon name="arrow-forward" />
            </Button>
          </Card>
        )}
      />
      {history.length > 0 && (
        <Button onClick={onClearHistory}>
          <Text style={styles.clearText}>Limpiar Historial</Text>
        </Button>
      )}
    </View>
  );
};

export default HistoryPanel;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  clearText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});