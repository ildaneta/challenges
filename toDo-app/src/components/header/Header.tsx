import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface IHeader {
  headerTitle: string;
}

const Header = ({ headerTitle }: IHeader): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
