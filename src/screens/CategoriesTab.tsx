import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useQuery} from '@realm/react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import AppTab from '../components/AppTab';
import {AppTabScreenProps} from '../config/interfaces';
import {Category} from '../config/schemas';
import CategoryCard from '../components/CategoryCard';
import AppText from '../components/AppText';
import {AppDispatch} from '../store/store';
import {openNewCategoryModal} from '../store/reducers/categoriesReducer';

interface Props extends AppTabScreenProps<'Categories'> {}

const CategoriesTab = ({}: Props) => {
  const categories = useQuery<Category>('Category');
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AppTab label="Categories">
      <View style={styles.categoriesCon}>
        <FlatList
          data={categories}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
          renderItem={({item}) => <CategoryCard category={item} />}
          ListFooterComponent={() => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => dispatch(openNewCategoryModal())}>
              <View style={styles.newCategory}>
                <View style={styles.addIcon}>
                  <MaterialCommunityIcon name="plus" size={25} />
                </View>
                <AppText size={20}>Add</AppText>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </AppTab>
  );
};

export default CategoriesTab;

const styles = StyleSheet.create({
  categoriesCon: {},
  newCategory: {
    marginTop: 10,
    width: '50%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addIcon: {
    backgroundColor: '#e3e3e3',
    width: 42,
    height: 42,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
