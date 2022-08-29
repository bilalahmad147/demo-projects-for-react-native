import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const testingid = 'ca-app-pub-3940256099942544/6300978111'

const Banner = () => {
  return (
    <BannerAd
      unitId={testingid}
      size={BannerAdSize.FULL_BANNER}
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
  );
};

export default Banner;
