// molecules/Input/input-icon/InputIcon.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../../atoms/Input/Input';
import Icon from '../../../atoms/Icono/Icon';
import { InputIconProps } from '../types/icon';


const InputIcon = ({ value, onChangeText, iconName }: InputIconProps) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={24} />
      <Input value={value} onChangeText={onChangeText} />
    </View>
  );
};

export default InputIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});