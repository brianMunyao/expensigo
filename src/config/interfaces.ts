import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export interface ChildrenProp {
  children: React.ReactNode;
}
export interface Account {
  id: number;
  name: string;
  balance: number;
}

export type AppTabParamsList = {
  DashBoard: undefined;
  Categories: undefined;
  Accounts: undefined;
  Profile: undefined;
};

export type AppStackParamsList = {
  Home: NavigatorScreenParams<AppTabParamsList>;
};

export type AppStackScreenProps<T extends keyof AppStackParamsList> =
  StackScreenProps<AppStackParamsList, T>;

export type AppTabScreenProps<T extends keyof AppTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamsList, T>,
    AppStackScreenProps<keyof AppStackParamsList>
  >;
