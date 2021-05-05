/* eslint-disable react/prop-types */
import React from 'react';
import {
  Alert, FlatList, View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { dateToString } from '../utils';

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memoListItem}
      onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
    >
      <View>
        <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
        <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
      </View>
      <TouchableOpacity
        style={styles.memoDelete}
        onPress={() => { Alert.alert('Are you sure?'); }}
      >
        <Feather name="x" size={16} color="#B0B0B0" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
