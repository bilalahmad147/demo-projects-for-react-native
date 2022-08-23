import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import {AdManager, ImageView} from 'react-native-admob-native-ads';
// import NativeAdView from 'react-native-admob-native-ads';

// const AdView = () => {
//   const nativeAdViewRef = useRef();

//   React.useEffect(() => {
//     nativeAdViewRef.current?.loadAd();
//   }, []);

//   return (
//     <NativeAdView
//       ref={nativeAdViewRef}
//       adUnitID="ca-app-pub-3940256099942544/2934735716">
//       <View>
//         <ImageView
//           style={{
//             width: '100%',
//             height: 250,
//           }}
//         />
//       </View>
//     </NativeAdView>
//   );
// };

const App = () => {
  // AdManager.setRequestConfiguration({
  //   testDeviceIds: ['ca-app-pub-3940256099942544/2934735716'],
  // });

  return (
    <ScrollView>
      <View>
        <Text>Hello World</Text>
        {/* <NativeAdView adUnitID="	ca-app-pub-3940256099942544/2934735716">
          <View>
            <AdView />
          </View>
        </NativeAdView> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
