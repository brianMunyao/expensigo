import {View, Text} from 'react-native';
import React from 'react';

import {AppTabScreenProps} from '../config/interfaces';
import AppTab from '../components/AppTab';

interface Props extends AppTabScreenProps<'Profile'> {}

const ProfileTab = ({}: Props) => {
  return (
    <AppTab label="Profile">
      <View>
        <Text>ProfileTab</Text>
      </View>
    </AppTab>
  );
};

export default ProfileTab;
