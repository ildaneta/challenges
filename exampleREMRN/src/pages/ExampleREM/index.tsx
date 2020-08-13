import React from 'react';
import { View, Text, Image, SafeAreaView, PixelRatio } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const size = 70;
const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

const ExampleREM: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>A proporção atual de pixel é:</Text>
        <Text style={styles.value}>{PixelRatio.get()} </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Neste dispositivo, uma imagem de width:</Text>
        <Text style={styles.value}>{size} px</Text>

        <Image source={cat} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Exige uma imagem de de width em pixels de:
        </Text>
        <Text style={styles.value}>
          {PixelRatio.getPixelSizeForLayoutSize(size)} px
        </Text>

        {/* Transformando o tamanho da imagem em REM */}
        <Image source={cat} style={styles.cat} />
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: '1rem',
  },

  container: {
    alignItems: 'center',
  },

  text: {
    fontSize: '1.2rem',
  },

  value: {
    fontSize: '1.5rem',
    marginBottom: '0.75rem',
    marginTop: '0.25rem',
  },

  // Criando uma medida relativa para a imagem
  cat: {
    width: '8rem',
    height: '8rem',
  },
});

export default ExampleREM;
