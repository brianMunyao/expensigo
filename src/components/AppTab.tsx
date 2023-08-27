import React from 'react';
import {Platform, StyleSheet, View, ViewStyle} from 'react-native';
import AppText from './AppText';

interface Props {
  label: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

const AppTab = ({label, children, style}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topBar}>
        <AppText weight="Bold" size={25}>
          {label}
        </AppText>
      </View>

      <View style={styles.inner}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  topBar: {
    padding: 10,
  },
  inner: {
    flex: 1,
    padding: 10,
  },
});

export default AppTab;
