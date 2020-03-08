/**
 * Author : Sashank Pindiproli
 * Date: 03/06/2020
 * Description: This component displays user's profile
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utils/colors';
import { fetchUserContact } from '../utils/api';

export default function User() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getUserContacts() {
    try {
      let user = await fetchUserContact();
      setLoading(false);
      setError(true);
      setError(false);
      setUser(user);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getUserContacts();
  }, []);

  let { avatar, name, phone } = user;
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error....</Text>}
      {!loading && !error && (
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  }
});
