import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '../../atoms/Icono/Icon';
import Button from '../../atoms/Button/Button';

interface ErrorFeedbackProps {
  message: string;
  onRetry?: () => void;
}

const ErrorFeedback = ({ message, onRetry }: ErrorFeedbackProps) => {
  return (
    <View style={styles.container}>
      <Icon name="error-outline" size={24} color="red" />
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <Button onClick={onRetry}>
          <Text style={styles.retryText}>Reintentar</Text>
        </Button>
      )}
    </View>
  );
};

export default ErrorFeedback;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#ffe5e5',
    padding: 12,
    borderRadius: 8,
  },
  message: {
    color: 'red',
    fontSize: 14,
    flex: 1,
  },
  retryText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});