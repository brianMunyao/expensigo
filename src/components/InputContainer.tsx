import {View, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

import {ChildrenProp} from '../config/interfaces';
import AppText from './AppText';

interface Props extends ChildrenProp {
  label: string;
  style?: ViewStyle;
}

const InputContainer = ({label, children, style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <AppText size={15} weight="Medium" color="#525252">
        {label}
      </AppText>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 5,
  },
});

export default InputContainer;
