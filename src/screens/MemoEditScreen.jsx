import React from 'react';
import {
  View, StyleSheet, TextInput, Alert,
} from 'react-native';

import CircleButton from '../components/CircleButtom';
import KeyboardSafeView from '../components/KeyboardSafeView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default function MemoEditScreen(props) {
  // eslint-disable-next-line react/prop-types
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        // eslint-disable-next-line react/prop-types
        onPress={() => { navigation.goBack(); }}
      />
    </KeyboardSafeView>
  );
}
