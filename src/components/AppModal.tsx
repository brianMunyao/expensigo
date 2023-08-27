import React from 'react';
import {Dimensions, StatusBar, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  visible: boolean;
  close: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  animationIn?: any; //TODO: add a good type here
  animationOut?: any; //TODO: add a good type here
  animationInTiming?: number;
  animationOutTiming?: number;
}

const AppModal = ({
  visible,
  children,
  style,
  close,
  animationIn,
  animationOut,
  animationInTiming,
  animationOutTiming,
}: Props) => {
  return (
    <Modal
      deviceHeight={Dimensions.get('screen').height}
      isVisible={visible}
      statusBarTranslucent
      useNativeDriver
      useNativeDriverForBackdrop
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      onBackButtonPress={close}
      onBackdropPress={close}
      style={styles.modal}>
      <View style={[styles.container, style]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default AppModal;
