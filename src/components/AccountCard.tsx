import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import AppText from './AppText';
import {Account} from '../config/interfaces';

interface Props {
  account: Account;
  onPress?: () => void;
}

const AccountCard = ({account, onPress}: Props) => {
  //   const width = Dimensions.get('window').width;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={[styles.container]}>
        <AppText>{account.name}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d57d18',
    height: 170,
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
});

export default AccountCard;
