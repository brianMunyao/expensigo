import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {Realm, useQuery, useRealm} from '@realm/react';

import {AppDispatch, RootState} from '../store/store';
import AppText from '../components/AppText';
import {closeNewTransactionModal} from '../store/reducers/appReducer';
import InputContainer from '../components/InputContainer';
import AppInput from '../components/AppInput';
import AppDropdown from '../components/AppDropdown';
import AppButton from '../components/AppButton';
import AppModal from '../components/AppModal';
import {Account, Transaction} from '../config/schemas';

interface Props {}

const NewTransactionModal = ({}: Props) => {
  const {newTransactionModal} = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch<AppDispatch>();
  const realm = useRealm();

  const accounts = useQuery(Account);

  const [account, setAccount] = useState<Realm.BSON.ObjectId>();
  const [transactionType, setTransactionType] = useState(2);
  const [transactionDate, setTransactionDate] = useState(moment());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Realm.BSON.ObjectId>();
  const [description, setDescription] = useState('');

  const [dateModal, setDateModal] = useState(false);

  const categories = [
    {
      _id: new Realm.BSON.ObjectId(),
      name: 'Food',
      icon: 'fast-food',
      color: 'red',
      createdOn: new Date().toString(),
      userId: new Realm.BSON.ObjectId(),
    },
    {
      _id: new Realm.BSON.ObjectId(),
      name: 'Shopping',
      icon: 'basket',
      color: 'dodgerblue',
      createdOn: new Date().toString(),
      userId: new Realm.BSON.ObjectId(),
    },
  ];

  //   const accounts = [
  //     {
  //       _id: new Realm.BSON.ObjectId(),
  //       name: 'Cash',
  //       currency: 'KES',
  //       balance: 2000,
  //       createdOn: new Date().toString(),
  //       userId: new Realm.BSON.ObjectId(),
  //     },
  //   ];

  const closeModal = () => dispatch(closeNewTransactionModal());

  const createTransaction = () => {
    if (account && amount && category) {
      realm.write(() => {
        return realm.create(
          Transaction,
          Transaction.generate({
            accountId: account,
            amount: Number(account),
            categoryId: category,
            description,
            type: transactionType,
            userId: new Realm.BSON.ObjectId(),
          }),
        );
      });
    }
  };

  //   realm.write(() => {
  //     return realm.create(
  //       Account,
  //       Account.generate({
  //         balance: 0,
  //         currency: 'KES',
  //         name: 'Cash',
  //         userId: new Realm.BSON.ObjectId(),
  //       }),
  //     );
  //   });

  return (
    <Modal
      deviceHeight={Dimensions.get('screen').height}
      isVisible={newTransactionModal}
      statusBarTranslucent
      useNativeDriver
      useNativeDriverForBackdrop
      animationIn="bounceInUp"
      animationInTiming={700}
      animationOut="bounceOutDown"
      animationOutTiming={500}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <AppText weight="Bold" size={23}>
            New Transaction
          </AppText>

          <TouchableOpacity onPress={closeModal}>
            <Ionicon name="close" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputs}>
          <InputContainer label="Transaction Type">
            <AppDropdown
              data={[
                {
                  label: 'Income',
                  value: 1,
                  Icon: <Feather name="download" size={14} />,
                },
                {
                  label: 'Expense',
                  value: 2,
                  Icon: <Feather name="upload" size={14} />,
                },
              ]}
              renderItem={item => (
                <AppText>
                  {item.Icon} {item.label}
                </AppText>
              )}
              value={transactionType}
              onChange={item => setTransactionType(item.value)}
            />
          </InputContainer>
          <InputContainer label="Account">
            <AppDropdown
              placeholder="Select Account"
              data={accounts.map(a => ({label: a.name, value: a._id}))}
              renderItem={item => <AppText>{item.label}</AppText>}
              value={account}
              onChange={item => setAccount(item.value)}
            />
          </InputContainer>
          <InputContainer label="Category">
            <AppDropdown
              placeholder="Select Category"
              data={categories.map(c => ({
                label: c.name,
                value: c._id,
                Icon: <Ionicon name={c.icon} />,
              }))}
              renderItem={item => (
                <AppText>
                  {item.Icon} {item.label}
                </AppText>
              )}
              value={category}
              onChange={item => setCategory(item.value)}
            />
          </InputContainer>

          <InputContainer label="Amount">
            <AppInput
              inputMode="decimal"
              placeholder="Enter Amount"
              value={amount}
              onChangeText={value => setAmount(value)}
            />
          </InputContainer>

          <InputContainer label="Date">
            <TouchableOpacity onPress={() => setDateModal(true)}>
              <AppText>{transactionDate.format('DD-MM-YYYY')}</AppText>
            </TouchableOpacity>
          </InputContainer>

          <AppModal
            visible={dateModal}
            close={() => setDateModal(false)}
            style={styles.dateModal}>
            <View style={styles.dateModalInner}>
              <CalendarPicker
                selectedStartDate={transactionDate.toDate()}
                onDateChange={d => {
                  setTransactionDate(d);
                  setDateModal(false);
                }}
              />
            </View>
          </AppModal>
          <InputContainer label="Description">
            <AppInput
              multiline
              placeholder="Description (Optional)"
              value={description}
              onChangeText={value => setDescription(value)}
            />
          </InputContainer>
          <AppButton label="Add" onPress={createTransaction} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    flex: 1,
    marginTop: '20%',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  inputs: {
    display: 'flex',
    gap: 15,
  },
  dateModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateModalInner: {
    backgroundColor: '#fff',
    padding: 10,
  },
  //   style={styles.dropdown}
  //   placeholderStyle={styles.placeholderStyle}
  //   selectedTextStyle={styles.selectedTextStyle}
  //   inputSearchStyle={styles.inputSearchStyle}
});

export default NewTransactionModal;
