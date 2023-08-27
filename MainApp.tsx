import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {AppStackParamsList, AppTabParamsList} from './src/config/interfaces';
import DashBoardTab from './src/screens/DashBoardTab';
import AccountsTab from './src/screens/AccountsTab';
import ProfileTab from './src/screens/ProfileTab';
import TabBarIcon from './src/components/TabBarIcon';
import {colors} from './src/config/colors';
import NewTransactionModal from './src/screens/NewTransactionModal';
import CategoriesTab from './src/screens/CategoriesTab';
import NewCategoryModal from './src/screens/NewCategoryModal';

interface Props {}

const Stack = createStackNavigator<AppStackParamsList>();
const Tab = createBottomTabNavigator<AppTabParamsList>();

const getIcon = (tab = '', focused = false, color = '') => {
  const size = 22;
  let Icon = <Feather name="home" size={size} color={color} />;

  switch (tab) {
    case 'Categories':
      Icon = (
        <MaterialCommunityIcon name="shape-outline" size={size} color={color} />
      );
      break;
    case 'Accounts':
      Icon = (
        <MaterialCommunityIcon name="cards-outline" size={size} color={color} />
      );
      break;
    case 'Profile':
      Icon = <Ionicon name="person-outline" size={size} color={color} />;
      break;
    default:
      Icon = <Feather name="home" size={size} color={color} />;
      break;
  }

  return <TabBarIcon label={tab} focused={focused} color={color} Icon={Icon} />;
};

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 65,
        paddingTop: 7,
        paddingBottom: 7,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: '#a3a3a3',
    }}>
    <Tab.Screen
      name="DashBoard"
      component={DashBoardTab}
      options={{
        tabBarIcon: ({focused, color}) => getIcon('DashBoard', focused, color),
      }}
    />
    <Tab.Screen
      name="Categories"
      component={CategoriesTab}
      options={{
        tabBarIcon: ({focused, color}) => getIcon('Categories', focused, color),
      }}
    />
    <Tab.Screen
      name="Accounts"
      component={AccountsTab}
      options={{
        tabBarIcon: ({focused, color}) => getIcon('Accounts', focused, color),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileTab}
      options={{
        tabBarIcon: ({focused, color}) => getIcon('Profile', focused, color),
      }}
    />
  </Tab.Navigator>
);

const MainApp = ({}: Props) => {
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>

      <NewTransactionModal />
      <NewCategoryModal />
    </>
  );
};

export default MainApp;
