import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
  weight?:
    | 'Black'
    | 'BlackItalic'
    | 'Bold'
    | 'BoldItalic'
    | 'Heavy'
    | 'HeavyItalic'
    | 'Light'
    | 'LightItalic'
    | 'Medium'
    | 'MediumItalic'
    | 'Regular'
    | 'RegularItalic'
    | 'Thin'
    | 'ThinItalic'
    | 'UltraThin'
    | 'UltraThinItalic';
  fontType?: 'Display' | 'Text';
  size?: number;
  color?: string;
  textStyles?: TextStyle;
}

const AppText = ({
  children,
  weight = 'Regular',
  size = 17,
  textStyles,
  fontType = 'Display',
  color = '#000',
}: Props) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontFamily: `SF-Pro-${fontType}-${weight}`,
          fontSize: size,
          color,
        },
        textStyles,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default AppText;
