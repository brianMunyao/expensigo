import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {AppTabScreenProps} from '../config/interfaces';
import AppTab from '../components/AppTab';
import AppText from '../components/AppText';
import {convertMoney} from '../config/utils';
import AppButton from '../components/AppButton';
import {AppDispatch} from '../store/store';
import {openNewAccountModal} from '../store/reducers/accountsReducer';
import NewAccountModal from './NewAccountModal';
import {useQuery} from '@realm/react';

interface Props extends AppTabScreenProps<'Accounts'> {}

const AccountsTab = ({}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const accounts_ = useQuery('Account');

  const overallBalance = 12000;

  const accounts = [
    {icon: 'card', name: 'I&M', balance: 10000},
    {icon: 'cash', name: 'Cash', balance: 1000},
  ];

  return (
    <AppTab label="Accounts">
      <View style={styles.overallBalanceCon}>
        <AppText size={16} weight="Light">
          Overall Balance
        </AppText>
        <AppText size={22} weight="Bold">
          {convertMoney(overallBalance)}
        </AppText>
      </View>

      <AppText>{JSON.stringify(accounts_)}</AppText>
      <View>
        <FlatList
          data={accounts}
          ListHeaderComponent={() => (
            <AppText textStyles={{paddingVertical: 15}}>
              Current Accounts
            </AppText>
          )}
          renderItem={({item}) => (
            <View style={styles.account}>
              <View style={styles.icon}>
                <Ionicon name={item.icon} size={30} />
              </View>

              <View style={styles.accountInfo}>
                <AppText size={15} weight="Medium">
                  {item.name}
                </AppText>
                <AppText weight="Medium" color="#018801">
                  {convertMoney(item.balance)}
                </AppText>
              </View>
            </View>
          )}
          ListFooterComponent={() => (
            <AppButton
              style={{marginTop: 20}}
              label="Add Account"
              onPress={() => dispatch(openNewAccountModal())}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>

      <NewAccountModal />
    </AppTab>
  );
};

const styles = StyleSheet.create({
  overallBalanceCon: {
    display: 'flex',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#f0f0f0',
    backgroundColor: '#f0f0f0',
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 20,
    gap: 5,
  },

  account: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    gap: 15,
  },
  icon: {
    width: 45,
    height: 45,
    backgroundColor: '#f3f3f3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInfo: {
    display: 'flex',
    gap: 6,
  },

  separator: {
    height: 15,
  },
});

export default AccountsTab;
