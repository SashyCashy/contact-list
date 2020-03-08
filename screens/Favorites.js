/**
 * Author : Sashank Pindiproli
 * Date: 03/06/2020
 * Description: This component is a Favorite Contacts component
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { fetchContacts } from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail';

export default function Favorites({ navigation: { navigate } }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const keyExtractor = ({ phone }) => phone;

  async function getContacts() {
    try {
      let contacts = await fetchContacts();
      setLoading(false);
      setError(true);
      setError(false);
      setContacts(contacts);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getContacts();
  }, []);

  const renderFavoriteThumbnail = ({ item }) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigate('Profile', { contact: item })}
      />
    );
  };
  const favorites = contacts.filter(contact => contact.favorite);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text> Error.....</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1
  },
  list: {
    alignItems: 'center'
  }
});
