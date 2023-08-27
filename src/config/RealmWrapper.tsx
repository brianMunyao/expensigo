import React from 'react';
import {Realm, createRealmContext} from '@realm/react';

import {Account, Category, Transaction, User} from './schemas';

const realmConfig: Realm.Configuration = {
  schema: [User, Account, Transaction, Category],
  schemaVersion: 1,
  // onMigration: (oldRealm, newRealm) => {
  // if (oldRealm.schemaVersion < 3) {
  //   const oldObjects = oldRealm.objects('Account');
  //   const newObjects = newRealm.objects('Account');
  //   for (let i = 0; i < oldObjects.length; i++) {
  //     newObjects[i].accountType = 1; // Set a default value for the new property
  //     newObjects[i].inOverallBalance = true; // Set a default value for the new property
  //   }
  // }
  // },
  //sync here
};

interface Props {
  children: React.ReactNode;
}

const RealmWrapper = ({children}: Props) => {
  const {RealmProvider} = createRealmContext(realmConfig);

  return <RealmProvider>{children}</RealmProvider>;
};

export default RealmWrapper;
