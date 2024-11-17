import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(-250)); // Initial position for the animated menu
  const router = useRouter(); // Use the router from expo-router

  // Toggle the hamburger menu with animation
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnimation, {
      toValue: menuVisible ? -250 : 0, // Slide in/out the menu
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  // Navigate to Purchase History
  const navigateToHistory = () => {
    toggleMenu();
    router.push('/history'); // Use router.push to navigate to the History screen
  };

  // Navigate to Address
  const navigateToAddress = () => {
    toggleMenu();
    router.push('/address'); // Use router.push to navigate to the Address screen
  };

  return (
    <View style={styles.container}>
      {/* Hamburger Menu Icon */}
      <TouchableOpacity style={styles.hamburgerIcon} onPress={toggleMenu}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>

      {/* Sliding Menu */}
      <Animated.View style={[styles.menuContainer, { transform: [{ translateX: menuAnimation }] }]}>
        <TouchableOpacity onPress={navigateToHistory}>
          <Text style={styles.menuItem}>Purchase History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAddress}>
          <Text style={styles.menuItem}>Address</Text>
        </TouchableOpacity>
        <Text style={styles.menuItem}>Profile</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close Menu</Text>
        </TouchableOpacity>
      </Animated.View>

      <Text style={styles.title}>Elevate Your Style</Text>
      <Text style={styles.tagline}>Showcasing the latest in streetwear fashion</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('..//..//assets/icons/s1.png')} style={styles.image} />
          <Image source={require('..//..//assets/icons/s2.png')} style={styles.image} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('..//..//assets/icons/s3.png')} style={styles.image} />
          <Image source={require('..//..//assets/icons/s4.png')} style={styles.image} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 16,
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  image: {
    width: '45%',
    height: 200,
    borderRadius: 8,
  },
  hamburgerIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  line: {
    width: 30,
    height: 4,
    backgroundColor: '#FFFFFF',
    marginVertical: 2,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#333',
    paddingTop: 80,
    paddingHorizontal: 20,
    zIndex: 9,
  },
  menuItem: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 40,
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#121212',
    fontWeight: 'bold',
  },
});
