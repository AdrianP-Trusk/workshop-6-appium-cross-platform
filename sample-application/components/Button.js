import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

/**
 *
 * @param {String} label
 * @param {function} onPress
 * @param {String} testLabel
 * @return {JSX.Element}
 * @constructor
 */
export default function Button({
  label,
  onPress,
  testLabel,
}) {
  return (
    <TouchableOpacity
      accessibilityLabel={testLabel}
      onPress={onPress}
      style={styles.button}
      testID={testLabel}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  testLabel: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
