import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
// import Carousel from 'react-native-anchor-carousel';
import {useDispatch} from 'react-redux';
import {useQuery} from '@realm/react';

import AppText from '../components/AppText';
import {AppTabScreenProps} from '../config/interfaces';
import CardTransactions from './CardTransactions';
import {AppDispatch} from '../store/store';
import {User} from '../config/schemas';
import AppTab from '../components/AppTab';
import AppButton from '../components/AppButton';
import {openNewTransactionModal} from '../store/reducers/appReducer';

interface Props extends AppTabScreenProps<'DashBoard'> {}

// const Separator = () => <View style={styles.separator} />;

// const SLIDER_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const DashBoardTab = ({}: Props) => {
  // const isCarousel = React.useRef(null);
  // const carouselRef = React.useRef(null);

  // const realm = useRealm();
  const users = useQuery(User);

  // realm.write(() => {
  //   realm.create(
  //     'User',
  //     User.generate({
  //       name: 'user1',
  //       email: 'someemail',
  //     }),
  //   );
  // });

  // const {accounts} = useSelector((state: RootState) => state.accounts);
  const dispatch = useDispatch<AppDispatch>();

  // const [openAccount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const getOpenedAccount = (id: number) => {
  //   return accounts.find(acc => acc.id === id);
  // };

  return (
    <>
      <AppTab label="Dashboard">
        <AppButton
          label="Add Transaction"
          onPress={() => dispatch(openNewTransactionModal())}
        />

        <View style={styles.greetingCon}>
          <AppText size={16} textStyles={styles.greeting}>
            Good Morning,
          </AppText>
          <AppText size={20} weight="Bold" textStyles={styles.greetingName}>
            Brian
          </AppText>
        </View>

        <FlatList
          data={users}
          renderItem={({item}) => <AppText>{item.email}</AppText>}
        />
      </AppTab>

      <CardTransactions
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  greetingCon: {
    padding: 20,
  },
  greeting: {
    opacity: 0.5,
  },
  greetingName: {
    opacity: 0.9,
  },
  cardsContainer: {
    // paddingHorizontal: 20,
  },
  carousel: {
    paddingHorizontal: 20,
  },
  separator: {
    width: 5,
  },
});

export default DashBoardTab;
