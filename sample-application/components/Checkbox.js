import React from 'react';
import {StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import PropTypes from 'prop-types';
import Select from './Select';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Checkbox({
  label,
  onToggle,
  value,
  testLabel,
}) {
  return (
    <View
      accessibilityLabel={testLabel}
      style={styles.wrapper}
      testID={testLabel}
    >
      <BouncyCheckbox
        isChecked={value}
        onPress={onToggle}
        text={label}
      />
    </View>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  onToggle: PropTypes.func,
  value: PropTypes.bool,
  testLabel: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 4,
    margin: 4,
  },
});
