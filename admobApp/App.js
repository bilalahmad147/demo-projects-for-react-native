import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import mobileAds, {InterstitialAd} from 'react-native-google-mobile-ads';
import Banner from './components/banner/Banner';
import InterstitialAdsScreen from './components/interstitial/InterstitialAdsScreen';

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    console.log('initialize completed.....');
  });

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello World!!!</Text>
      </View>
      <View>
        <InterstitialAdsScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 32,
    backgroundColor: 'pink',
  },
});

export default App;
