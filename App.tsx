import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/store/store';
// import RealmWrapper from './src/config/RealmWrapper';
import {RealmProvider} from '@realm/react';
import {schemas} from './src/config/schemas';
import MainApp from './MainApp';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <RealmProvider schema={schemas}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar
            animated
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <MainApp />
        </NavigationContainer>
      </Provider>
    </RealmProvider>
  );
}

export default App;
