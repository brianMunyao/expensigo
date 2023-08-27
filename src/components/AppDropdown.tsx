import {StyleSheet} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';

import AppText from './AppText';

interface DropdownItem {
  label: string;
  value: any;
  Icon?: JSX.Element;
}

interface Props {
  placeholder?: string;
  data: DropdownItem[];
  value: any;
  onChange: (value: any) => void;
  renderItem: (item: DropdownItem) => React.ReactNode;
}

const AppDropdown = ({
  placeholder = 'Select Item',
  data,
  value,
  onChange,
}: Props) => {
  return (
    <Dropdown
      style={styles.dropdown}
      //   placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      //   inputSearchStyle={styles.inputSearchStyle}
      labelField="label"
      valueField="value"
      data={data}
      placeholder={placeholder}
      renderItem={item => (
        <AppText textStyles={styles.dropdownItem}>
          {item.Icon && item.Icon} {item.label}
        </AppText>
      )}
      value={value}
      onChange={onChange}
    />
  );
};

export default AppDropdown;

const styles = StyleSheet.create({
  dropdown: {
    borderColor: '#d5d5d5',
    borderWidth: 2,
    borderStyle: 'solid',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  selectedTextStyle: {
    fontFamily: 'SF-Pro-Display-Medium',
  },
  dropdownItem: {
    padding: 10,
  },
});
