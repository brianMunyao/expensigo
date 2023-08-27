import {StyleSheet, View} from 'react-native';
import React from 'react';

import {colors} from '../config/colors';
import AppText from './AppText';

interface Props {
  label?: string;
  color?: string;
  Icon: JSX.Element;
  focused: boolean;
}

const TabBarIcon = ({Icon, focused, label, color}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: focused ? colors.primaryLight : '#fff',
          },
        ]}>
        {Icon}
      </View>
      {label && (
        <AppText size={13} weight="Medium" color={color}>
          {label}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    color: colors.primary,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default TabBarIcon;
