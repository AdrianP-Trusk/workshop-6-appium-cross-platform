import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

/**
 *
 * @param {String} proposalStack
 * @param {String} proposalToolTest
 * @param {String} proposalToolAPI
 * @param {String} proposalToolWEB
 * @param {String} proposalToolMOBILE
 * @param {String} proposalToolBONUS
 * @return {JSX.Element}
 * @constructor
 */
export default function SetupProposal({
  proposalStack,
  proposalToolTest,
  proposalToolAPI,
  proposalToolWEB,
  proposalToolMOBILE,
  proposalToolBONUS,
}) {
  return (
    <View
      accessibilityLabel="proposal"
      style={styles.container}
      testID="proposal"
    >
      <Text style={styles.subTitle}>BEST SETUP</Text>
      {proposalStack !== '' && (
        <Text
          accessibilityLabel="proposal stack"
          style={styles.proposedTool}
          testID="proposal stack"
        >
          Stack: {proposalStack}
        </Text>
      )}
      {proposalToolTest !== '' && (
        <Text
          accessibilityLabel="proposal test"
          style={styles.proposedTool}
          testID="proposal test"
        >
            Test: {proposalToolTest}
        </Text>
      )}
      {proposalToolAPI !== '' && (
        <Text
          accessibilityLabel="proposal api"
          style={styles.proposedTool}
          testID="proposal api"
        >
            API: {proposalToolAPI}
        </Text>
      )}
      {proposalToolWEB !== '' && (
        <Text
          accessibilityLabel="proposal web"
          style={styles.proposedTool}
          testID="proposal web"
        >
            Web: {proposalToolWEB}
        </Text>
      )}
      {proposalToolMOBILE !== '' && (
        <Text
          accessibilityLabel="proposal mobile"
          style={styles.proposedTool}
          testID="proposal mobile"
        >
            Mobile: {proposalToolMOBILE}
        </Text>
      )}
      {proposalToolBONUS !== '' && (
        <Text
          accessibilityLabel="proposal bonus"
          style={styles.proposedTool}
          testID="proposal bonus"
        >
            BONUS: {proposalToolBONUS}
        </Text>
      )}
    </View>
  );
}

SetupProposal.propTypes = {
  proposalStack: PropTypes.string,
  proposalToolTest: PropTypes.string,
  proposalToolAPI: PropTypes.string,
  proposalToolWEB: PropTypes.string,
  proposalToolMOBILE: PropTypes.string,
  proposalToolBONUS: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#55bd74',
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proposedTool: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textDecorationColor: 'black',
    textDecorationStyle: 'solid',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
});
