import React from 'react';
import {
  Alert, TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  lable: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default function LogOutButton() {
  const navigation = useNavigation();
  const handlePress = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <Text style={styles.lable}>ログアウト</Text>
    </TouchableOpacity>
  );
}
