import React from 'react';
import { SafeAreaView } from 'react-native';

import Main from './src/screens/main/Main';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Main />
    </SafeAreaView>
  );
};

export default App;
