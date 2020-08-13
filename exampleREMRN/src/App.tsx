import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar, View } from 'react-native';

import ExampleREM from './pages/ExampleREM';

EStyleSheet.build({});

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'rgba(196, 196, 196, 0.25)',
    flex: 1,
  },
});

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#c4c4c4" />

      <ExampleREM />
    </View>
  );
};

export default App;
