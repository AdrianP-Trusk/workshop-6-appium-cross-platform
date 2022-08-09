import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import PropTypes from 'prop-types';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
export default function Select({
  label,
  onChangeSelected,
  options,
  selected,
  testLabel,
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        accessibilityLabel={testLabel}
        selectedValue={selected}
        onValueChange={onChangeSelected}
        testID={testLabel}
      >
        {options.map((option) => (
          <Picker.Item
            accessibilityLabel={`${testLabel} option ${option.value}`}
            key={option.key}
            label={option.label}
            value={option.value}
            testID={`${testLabel} option ${option.value}`}
          />
        ))}
      </Picker>
    </View>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  onChangeSelected: PropTypes.func,
  options: PropTypes.array,
  selected: PropTypes.string,
  testLabel: PropTypes.string,
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  wrapper: {},
});
