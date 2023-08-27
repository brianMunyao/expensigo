import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

interface Props {
  value: string | undefined;
  onChangeText: (value: string) => void;
  placeholder?: string;
  inputMode?: 'numeric' | 'decimal' | 'url' | 'tel' | 'text' | 'email' | 'none';
  multiline?: boolean;
}

const AppInput = ({
  value,
  placeholder,
  onChangeText,
  inputMode = 'text',
  multiline,
}: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      inputMode={inputMode}
      multiline={multiline}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  input: {
    fontFamily: 'SF-Pro-Display-Medium',
    height: 50,
    borderColor: '#d5d5d5',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 16,
  },
});
