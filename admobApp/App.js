import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default App;
