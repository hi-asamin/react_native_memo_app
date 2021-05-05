import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Alert,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButtom';
import KeyboardSafeView from '../components/KeyboardSafeView';
import { translateErrorMessages } from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 27,
    paddingTop: 32,
    paddingBottom: 32,
  },
});

export default function MemoEditScreen(props) {
  // eslint-disable-next-line react/prop-types
  const { navigation, route } = props;
  // eslint-disable-next-line react/prop-types
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  const handlePress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true }) // 編集しないkeyは元々の値で更新してくれるオプション
        .then(() => {
          // eslint-disable-next-line react/prop-types
          navigation.goBack();
        })
        .catch((error) => {
          const errorMessage = translateErrorMessages(error.code);
          Alert.alert(errorMessage.title, errorMessage.description);
        });
    }
  };
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBody(text); }}
        />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}
