# ContactList

An app that resembles Contacts on Phone using React Native

## Table of contents

- [General Info](#general-info)
- [Technologies](#technolgies)
- [API Source](#ap_source)
- [Setup](#setup)
- [App Structure](#directory)

## General Info

This project is used to display contacts on Phone

## Technologies

Project is created with:

- React Native
- React
- Expo (https://expo.io/learn)
- Android SDK

## API Source

```
export const fetchContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
  const contactData = await response.json();

  return contactData.results.map(mapContact);
};

export const fetchUserContact = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};

export const fetchRandomContact = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const userData = await response.json();

  return mapContact(userData.results[0]);
};
```

## Setup

### Install npm Packages

- npm install react package
- npm install react-native package
- npm install react-dom package
- npm install yarn
- npm install expo-cli --global

### Create expo project

```
$ expo init contact-list --template blank@sdk-34 --yarn
$ cd contact-list
$ expo start
```

## App Structure

- 📂 **contact\-list**
  - 📄 [App.js](App.js)
  - 📄 [README.md](README.md)
  - 📄 [app.json](app.json)
  - 📂 **components**
    - 📄 [ContactListItem.js](components/ContactListItem.js)
    - 📄 [ContactThumbnail.js](components/ContactThumbnail.js)
    - 📄 [DetailListItem.js](components/DetailListItem.js)
  - 📄 [package.json](package.json)
  - 📄 [routes.js](routes.js)
  - 📂 **screens**
    - 📄 [Contacts.js](screens/Contacts.js)
    - 📄 [Favorites.js](screens/Favorites.js)
    - 📄 [Options.js](screens/Options.js)
    - 📄 [Profile.js](screens/Profile.js)
    - 📄 [User.js](screens/User.js)
  - 📂 **utils**
    - 📄 [api.js](utils/api.js)
    - 📄 [capitalize.js](utils/capitalize.js)
    - 📄 [colors.js](utils/colors.js)
    - 📄 [getURLParams.js](utils/getURLParams.js)

```

```
