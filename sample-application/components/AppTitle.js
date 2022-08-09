import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

/**
 *
 * @param {React.ReactChild} children
 * @return {JSX.Element}
 * @constructor
 */
export default function AppTitle({children}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

AppTitle.propTypes = {
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
});
