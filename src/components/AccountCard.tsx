import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppText from './AppText';
import {Account} from '../config/interfaces';

interface Props {
  account: Account;
}

const AccountCard = ({account}: Props) => {
  //   const width = Dimensions.get('window').width;
  return (
    <View style={[styles.container]}>
      <AppText>{account.name}</AppText>
    </View>
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
