import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
// import Carousel from 'react-native-snap-carousel';

import Carousel from 'react-native-anchor-carousel';

// import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AccountCard from '../components/AccountCard';
import {Account} from '../config/interfaces';
import {TouchableOpacity} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const NUMBER_OF_ITEM = 4;

const accounts: Account[] = [
  {name: '1Cash', balance: 2000},
  {name: '1Equity Bank', balance: 1400},
  {name: '2Cash', balance: 2000},
  {name: '3Equity Bank', balance: 1400},
  {name: '4Cash', balance: 2000},
  {name: '5Equity Bank', balance: 1400},
  {name: '6Cash', balance: 2000},
  {name: '7Equity Bank', balance: 1400},
  {name: '8Cash', balance: 2000},
  {name: '9Equity Bank', balance: 1400},
];

interface Props {}

const Separator = () => <View style={styles.separator} />;

const HomePage = ({}: Props) => {
  const isCarousel = React.useRef(null);

  const [openAccount, setOpenAccount] = useState(0);

  return (
    <AppScreen>
      <View style={styles.greetingCon}>
        <AppText size={16} textStyles={styles.greeting}>
          Good Morning,
        </AppText>
        <AppText size={20} weight="Bold" textStyles={styles.greetingName}>
          Brian
        </AppText>
      </View>
      <View style={styles.cardsContainer}>
        <Carousel
          style={styles.carousel}
          data={accounts}
          renderItem={({item, index}: {item: Account; index: number}) => (
            <AccountCard key={index} account={item} />
          )}
          onScrollEnd={(account: Account, index: number) => {
            console.log('something', account);
            setOpenAccount(index);
          }}
          inActiveOpacity={0.3}
          minScrollDistance={10}
          ref={isCarousel}
          ListHeaderComponent={Separator}
          ListFooterComponent={Separator}
        />
      </View>

      <AppText>{openAccount}</AppText>
    </AppScreen>
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
  carousel: {},
  separator: {
    width: 10,
  },
});

export default HomePage;
