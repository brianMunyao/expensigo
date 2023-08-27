import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';

import AppText from './AppText';
import {colors} from '../config/colors';

interface Props {
  label: string;
  style?: ViewStyle;
  Icon?: JSX.Element;
  onPress?: () => void;
}

const AppButton = ({label, Icon, onPress, style}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.container, style]}>
        {Icon && Icon}
        <AppText color="#fff" weight="Medium" size={18}>
          {label}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default AppButton;
