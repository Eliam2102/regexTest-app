import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Card from '../../../atoms/Card/Card';
import { CardRecordProps } from '../types/record';

const CardRecord = ({ regex, date, onPress }: CardRecordProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <Text style={styles.regex}>{regex}</Text>
        <Text style={styles.date}>{date}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CardRecord;

const styles = StyleSheet.create({
  card: {
    gap: 8,
  },
  regex: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});