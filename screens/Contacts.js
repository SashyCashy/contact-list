/**
 * Author : Sashank Pindiproli
 * Date: 03/06/2020
 * Description: This component is a Contact component
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Linking
} from 'react-native';

import ContactListItem from '../components/ContactListItem';

import { fetchContacts } from '../utils/api';
import getURLParams from '../utils/getURLParams';

export default function Contacts({ navigation: { navigate } }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleOpenUrl = ({ url, contacts }) => {
    const params = getURLParams(url);

    if (params.name) {
      const queriedContact = contacts.find(
        contact =>
          contact.name.split(' ')[0].toLowerCase() === params.name.toLowerCase()
      );

      if (queriedContact) {
        navigate('Profile', { contact: queriedContact });
      }
    }
  };

  const fetchURL = async contacts => {
    try {
      Linking.addEventListener('url', handleOpenUrl);
      const url = await Linking.getInitialURL();
      handleOpenUrl({ url, contacts });
    } catch (e) {
      console.log(e);
    }
  };
  const fetchContactsList = async () => {
    try {
      const contacts = await fetchContacts();
      setContacts(contacts);
      setLoading(false);
      setError(false);
      fetchURL(contacts);
    } catch (e) {
      setLoading(false);
      setError(false);
    }
  };
  useEffect(() => {
    fetchContactsList();
  }, []);

  const renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigate('Profile', { contact: item })}
      />
    );
  };

  const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));
  const keyExtractor = ({ phone }) => phone;

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error....</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
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
  }
});
