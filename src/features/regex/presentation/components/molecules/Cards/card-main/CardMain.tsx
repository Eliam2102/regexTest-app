import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../../atoms/Card/Card';
import Button from '../../../atoms/Button/Button';
import Icon from '../../../atoms/Icono/Icon';
import { CardMainProps } from '../types/main';

const CardMain = ({ title, description, iconName, onPress }: CardMainProps) => {
  return (
    <Card style={styles.card}>
      {iconName && <Icon name={iconName} size={32} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {onPress && (
        <Button onClick={onPress} style={styles.button}>
          <Text style={styles.buttonText}>IR</Text>
        </Button>
      )}
    </Card>
  );
};

export default CardMain;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A8DADC', // verde pastel elegante
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 16,
    elevation: 3, // sutil sombra
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});