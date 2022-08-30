import {AppOpenAd, TestIds, AdEventType} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.APP_OPEN
  : 'ca-app-pub-3940256099942544/3419835294';

const AppOpenAdScreen = () => {
  const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  appOpenAd.load();

  appOpenAd.show();

  return (
    <AppOpenAd
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}
      onAdFailedToLoad={error => {
        console.error('Advert failed to load: ', error);
      }}
    />
  );
};

export default AppOpenAdScreen;
