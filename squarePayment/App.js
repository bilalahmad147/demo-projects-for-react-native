import React, {Component} from 'react';
import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SQIPCore, SQIPCardEntry} from 'react-native-square-in-app-payments';

export default class App extends Component {
  async componentDidMount() {
    await SQIPCore.setSquareApplicationId(
      'sandbox-sq0idb-mpqW7KEW-B2mRkERFkd4yg',
    );
  }

  constructor() {
    super();
    this.onStartCardEntry = this.onStartCardEntry.bind(this);
    this.onCardNonceRequestSuccess = this.onCardNonceRequestSuccess.bind(this);
  }
  onCardEntryComplete() {
    Alert('Card entry completed');
  }

  async onCardNonceRequestSuccess(cardDetails) {
    try {
      await SQIPCardEntry.completeCardEntry(this.onCardEntryComplete());
    } catch (ex) {
      await SQIPCardEntry.showCardNonceProcessingError(ex.message);
    }
  }
  onCardEntryCancel() {
    Alert('Card entry cancelled');
  }

  async onStartCardEntry() {
    const cardEntryConfig = {
      collectPostalCode: false,
    };
    await SQIPCardEntry.startCardEntryFlow(
      cardEntryConfig,
      this.onCardNonceRequestSuccess,
      this.onCardEntryCancel,
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Square Up Payment</Text>
          <Button title="Start Card Entry" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'pink',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
