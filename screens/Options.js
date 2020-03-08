/**
 * Author : Sashank Pindiproli
 * Date: 03/06/2020
 * Description: This component contains Options for a contact
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import DetailListItem from '../components/DetailListItem';

export default function Options() {
  return (
    <View style={styles.container}>
      <DetailListItem title="Update Profile" />
      <DetailListItem title="Change Language" />
      <DetailListItem title="Sign Out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
