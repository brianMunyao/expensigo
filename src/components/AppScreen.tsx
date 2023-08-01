import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const AppScreen = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff0" />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
});

export default AppScreen;
