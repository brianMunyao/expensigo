import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';

import AppText from './AppText';
import {icons} from '../config/icons';
import Icon from './Icon';
import AppModal from './AppModal';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  chooseIcon: (name: string) => void;
}

const IconPicker = ({isVisible, closeModal, chooseIcon}: Props) => {
  return (
    <AppModal isVisible={isVisible} closeModal={closeModal}>
      <AppText weight="Bold" size={20}>
        Icon Picker
      </AppText>

      <View style={styles.icons}>
        <FlatList
          data={icons}
          numColumns={5}
          renderItem={({item}) => (
            <Icon
              name={item}
              onPress={() => {
                chooseIcon(item);
                closeModal();
              }}
            />
          )}
        />
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  icons: {
    display: 'flex',
  },
});

export default IconPicker;
