/**
 * Author : Sashank Pindiproli
 * Date: 03/06/2020
 * Description: This component displays user's profile
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import DetailListItem from '../components/DetailListItem';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utils/colors';

export default function Profile({
  navigation: {
    state: { params }
  }
}) {
  let { contact } = params;
  const { avatar, email, name, phone, cell } = contact;

  const isUndefined = item => item === undefined;

  {
    return !isUndefined(avatar) &&
      !isUndefined(email) &&
      !isUndefined(name) &&
      !isUndefined(phone) &&
      !isUndefined(cell) ? (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
          <DetailListItem icon="mail" title="Email" subtitle={email} />
          <DetailListItem icon="phone" title="Work" subtitle={phone} />
          <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
        </View>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white'
  }
});
