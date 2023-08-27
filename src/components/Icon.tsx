import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  name: string;
  onPress?: () => void;
}

const Icon = ({name, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcon name={name} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 6,
    borderRadius: 30,
  },
});
