// molecules/Input/Input-label/InputLabel.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../../atoms/Input/Input';
import Label from '../../../atoms/Label/Label';
import { InputWithLabelProps } from '../types/label';

const InputLabel = ({ label, value, onChangeText }: InputWithLabelProps) => {
  return (
    <View style={styles.container}>
      <Label text={''}>{label}</Label>
      <Input value={value} onChangeText={onChangeText} />
    </View>
  );
};

export default InputLabel;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
});