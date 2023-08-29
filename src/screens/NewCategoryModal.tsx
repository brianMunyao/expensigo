import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useRealm} from '@realm/react';

import {AppDispatch, RootState} from '../store/store';
import {closeNewCategoryModal} from '../store/reducers/categoriesReducer';
import AppText from '../components/AppText';
import InputContainer from '../components/InputContainer';
import AppInput from '../components/AppInput';
import AppDropdown from '../components/AppDropdown';
import AppButton from '../components/AppButton';
import {Category} from '../config/schemas';
import IconPicker from '../components/IconPicker';
import AppModal from '../components/AppModal';

interface Props {}

const NewCategoryModal = ({}: Props) => {
  const {newCategoryModal} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch<AppDispatch>();
  const realm = useRealm();

  const [isIconPickerVisible, setIsIconPickerVisible] = useState(false);

  const [title, setTitle] = useState('');
  const [categoryType, setCategoryType] = useState(1);
  const [icon, setIcon] = useState('food');
  const [color] = useState('red');

  const closeModal = () => dispatch(closeNewCategoryModal());

  const createCategory = () => {
    realm.write(() => {
      realm.create(
        Category,
        Category.generate({
          color,
          icon,
          name: title,
          type: categoryType,
          userId: new Realm.BSON.ObjectId(),
        }),
      );
      closeModal();
    });
  };

  return (
    <AppModal isVisible={newCategoryModal} closeModal={closeModal}>
      <AppText weight="Bold" size={20}>
        New Category
      </AppText>

      <InputContainer label="Title">
        <AppInput
          placeholder="Enter Title"
          value={title}
          onChangeText={value => setTitle(value)}
        />
      </InputContainer>

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
          value={categoryType}
          onChange={item => setCategoryType(item.value)}
        />
      </InputContainer>

      <View style={styles.colorIcon}>
        {/* <InputContainer
              label="Category Color"
              style={styles.colorIconInner}>
              <View>
                <MaterialCommunityIcon name={icon} size={30} />
              </View>
            </InputContainer> */}

        <InputContainer label="Category Icon" style={styles.colorIconInner}>
          <TouchableOpacity onPress={() => setIsIconPickerVisible(true)}>
            <MaterialCommunityIcon name={icon} size={30} />
          </TouchableOpacity>
        </InputContainer>
      </View>

      {/* <InputContainer label="Initial Balance">
            <AppInput
              inputMode="decimal"
              placeholder="0.00"
              value={initialBalance}
              onChangeText={value => setInitialBalance(value)}
            />
          </InputContainer> */}

      <AppButton label="Create" onPress={createCategory} />

      <IconPicker
        isVisible={isIconPickerVisible}
        closeModal={() => setIsIconPickerVisible(false)}
        chooseIcon={setIcon}
      />
    </AppModal>
  );
};

const styles = StyleSheet.create({
  colorIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
  colorIconInner: {
    flex: 1,
  },
});

export default NewCategoryModal;
