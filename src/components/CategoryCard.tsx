import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Category} from '../config/schemas';
import AppText from './AppText';

interface Props {
  category: Category;
  onPress?: () => void;
}

const CategoryCard = ({category, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={[styles.icon, {backgroundColor: category.color}]}>
          <MaterialCommunityIcon size={23} name={category.icon} color="#fff" />
        </View>

        <View style={styles.info}>
          <AppText>{category.name}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginRight: 6,
    flex: 1,

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dadada',
    padding: 8,
    borderRadius: 8,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {},
});

export default CategoryCard;
