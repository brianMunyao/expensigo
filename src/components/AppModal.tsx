import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  animationIn?: any; //TODO: add a good type here
  animationOut?: any; //TODO: add a good type here
  animationInTiming?: number;
  animationOutTiming?: number;
  position?: 'bottom' | 'center';
}

const AppModal = ({
  isVisible,
  children,
  style,
  closeModal,
  animationIn = 'bounceInUp',
  animationOut = 'bounceOutDown',
  animationInTiming = 700,
  animationOutTiming = 500,
  position = 'center',
}: Props) => {
  const styles = StyleSheet.create({
    modal: {
      margin: 0,
    },
    container: {
      marginHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 20,
      borderBottomRightRadius: position === 'bottom' ? 0 : 20,
      borderBottomLeftRadius: position === 'bottom' ? 0 : 20,
      padding: 23,
      display: 'flex',
      gap: 15,
    },
  });

  return (
    <Modal
      deviceHeight={Dimensions.get('screen').height}
      isVisible={isVisible}
      statusBarTranslucent
      useNativeDriver
      useNativeDriverForBackdrop
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      style={styles.modal}>
      <KeyboardAvoidingView style={[styles.container, style]}>
        {children}
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AppModal;
