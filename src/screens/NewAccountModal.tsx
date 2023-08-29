import {} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppDispatch, RootState} from '../store/store';
import {closeNewAccountModal} from '../store/reducers/accountsReducer';
import AppText from '../components/AppText';
import InputContainer from '../components/InputContainer';
import AppInput from '../components/AppInput';
import AppDropdown from '../components/AppDropdown';
import AppButton from '../components/AppButton';
import {currencyList} from '../config/currencies';
import {useRealm} from '@realm/react';
import {Account} from '../config/schemas';
import AppModal from '../components/AppModal';

const accountTypes = [
  {
    label: 'Regular',
    value: 1,
    Icon: <MaterialCommunityIcon name="piggy-bank-outline" size={16} />,
  },
  {
    label: 'Savings',
    value: 2,
    Icon: <MaterialCommunityIcon name="wallet-outline" size={16} />,
  },
  {
    label: 'Debt',
    value: 3,
    Icon: <MaterialCommunityIcon name="receipt" size={16} />,
  },
];

interface Props {}

const NewAccountModal = ({}: Props) => {
  const {newAccountModal} = useSelector((state: RootState) => state.accounts);
  const dispatch = useDispatch<AppDispatch>();
  const realm = useRealm();

  const [title, setTitle] = useState('');
  const [accountType, setAccountType] = useState(1);
  const [currency, setCurrency] = useState('');
  const [initialBalance, setInitialBalance] = useState('');

  const closeModal = () => dispatch(closeNewAccountModal());

  const createAccount = () => {
    realm.write(() => {
      return realm.create(
        Account,
        Account.generate({
          balance: Number(initialBalance),
          currency: currency,
          name: title,
          userId: new Realm.BSON.ObjectId(),
          accountType: accountType,
          inOverallBalance: true,
        }),
      );
    });
  };

  return (
    <AppModal isVisible={newAccountModal} closeModal={closeModal}>
      <AppText weight="Bold" size={20}>
        New Account
      </AppText>

      <InputContainer label="Title">
        <AppInput
          placeholder="Enter Title"
          value={title}
          onChangeText={value => setTitle(value)}
        />
      </InputContainer>

      <InputContainer label="Account Type">
        <AppDropdown
          placeholder="Select Account Type"
          data={accountTypes}
          renderItem={item => (
            <AppText>
              {item.Icon} {item.label}
            </AppText>
          )}
          value={accountType}
          onChange={item => setAccountType(item.value)}
        />
      </InputContainer>

      <InputContainer label="Account Currency">
        <AppDropdown
          placeholder="Select Account Currency"
          data={currencyList.map(c => ({label: c.name, value: c.code}))}
          renderItem={item => (
            <AppText>
              {item.value} - {item.label}
            </AppText>
          )}
          value={currency}
          onChange={item => setCurrency(item.value)}
        />
      </InputContainer>

      <InputContainer label="Initial Balance">
        <AppInput
          inputMode="decimal"
          placeholder="0.00"
          value={initialBalance}
          onChangeText={value => setInitialBalance(value)}
        />
      </InputContainer>

      <AppButton label="Create Account" onPress={createAccount} />
    </AppModal>
  );
};

export default NewAccountModal;
