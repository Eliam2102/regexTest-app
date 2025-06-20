import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../../atoms/Card/Card';
import Button from '../../../atoms/Button/Button';
import Icon from '../../../atoms/Icono/Icon';
import { MatchResultsProps } from '../types/result';

const MatchResult = ({ match, onCopy, onUse }: MatchResultsProps) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.match}>{match}</Text>
      <View style={styles.actions}>
        <Button onClick={onCopy}><Icon name="content-copy" /></Button>
        <Button onClick={onUse}><Icon name="play-arrow" /></Button>
      </View>
    </Card>
  );
};

export default MatchResult;

const styles = StyleSheet.create({
  card: {
    gap: 8,
  },
  match: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
});