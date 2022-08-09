import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Spinner({}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        accessibilityLabel="spinner"
        color="#00ff00"
        size="large"
        testID="spinner"
      />
    </View>
  );
}

Spinner.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
