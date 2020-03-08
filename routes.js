import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options';

import colors from './utils/colors';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const FavoritesScreens = StackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites',
      tabBarIcon: getTabBarIcon('star')
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: getTabBarIcon('star')
    }
  }
});

const UserScreens = StackNavigator(
  {
    User: {
      screen: User,
      navigationOptions: ({ navigation: { navigate } }) => ({
        title: 'User',
        tabBarIcon: getTabBarIcon('person'),
        headerLeft: (
          <MaterialIcons
            name="close"
            size={24}
            style={{ color: colors.black, marginLeft: 10 }}
            onPress={() => navigate('Options')}
          />
        )
      })
    },
    Options: {
      screen: Options,
      navigationOptions: {
        title: 'Options',
        headerLeft: (
          <MaterialIcons
            name="close"
            size={24}
            style={{ color: colors.black, marginLeft: 10 }}
            onPress={() => goBack()}
          />
        )
      }
    }
  },
  {
    mode: 'modal',
    initialRouteName: 'User',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person')
    }
  }
);

const ContactsScreens = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
      tabBarIcon: getTabBarIcon('list')
    }
  }
});

export default TabNavigator(
  {
    Contacts: {
      screen: ContactsScreens
    },
    Favorites: {
      screen: FavoritesScreens
    },
    User: {
      screen: UserScreens
    }
  },
  {
    initialRouteName: 'Contacts',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight
      },
      inactiveTintColor: colors.greyDark,
      activeTintColor: colors.blue,
      renderIndicator: () => null,
      showLabel: false,
      showIcon: true
    }
  }
);
