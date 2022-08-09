import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

/**
 *
 * @param {React.ReactChild} children
 * @return {JSX.Element}
 * @constructor
 */
export default function FormWrapper({children}) {
  return (
    <View style={styles.form}>{children}</View>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 48,
  },
});
