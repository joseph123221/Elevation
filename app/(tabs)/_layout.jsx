import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const TabIcon = ({ icon, focused, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.tabIconContainer}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: focused ? '#FFD700' : '#ffffff', // Gold for focused, white for unfocused
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const TabLayout = () => {
  return (
    <View style={styles.container}>
      <Tabs screenOptions={{ tabBarStyle: styles.tabBar }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/home.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            title: 'Shop',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/shirt.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Cart',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/cart.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused, onPress }) => (
              <TabIcon
                icon={require('../../assets/icons/profile.png')}
                focused={focused}
                onPress={onPress}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background for consistency with the theme
  },
  tabBar: {
    backgroundColor: '#1E1E1E', // Darker shade for the tab bar
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#333333', // Slightly lighter for contrast
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
