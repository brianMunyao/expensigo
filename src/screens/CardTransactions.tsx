import React from 'react';
import {StatusBar, View} from 'react-native';
import Modal from 'react-native-modal';

import AppText from '../components/AppText';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const CardTransactions = ({isVisible, onClose}: Props) => {
  return (
    // <GestureRecognize
    //   style={{flex: 1}}
    //   onSwipeUp={() => this.setModalVisible(true)}
    //   onSwipeDown={() => this.setModalVisible(false)}>
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      isVisible={isVisible}
      style={{margin: 0}}
      onBackdropPress={onClose}>
      <View style={{backgroundColor: 'red'}}>
        <StatusBar
          // backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
        <AppText>CardTransactions</AppText>
        <AppText>CardTransactions</AppText>
      </View>
    </Modal>
    // </GestureRecognize>
  );
};

export default CardTransactions;
