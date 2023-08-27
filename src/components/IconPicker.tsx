import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

import AppText from './AppText';
import {icons} from '../config/icons';
import Icon from './Icon';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  chooseIcon: (name: string) => void;
}

const IconPicker = ({isVisible, closeModal, chooseIcon}: Props) => {
  return (
    <Modal
      deviceHeight={Dimensions.get('screen').height}
      isVisible={isVisible}
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
      <KeyboardAvoidingView behavior="height">
        <View style={styles.container}>
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
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    marginTop: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    gap: 15,
  },
  icons: {
    display: 'flex',
  },
});

export default IconPicker;
