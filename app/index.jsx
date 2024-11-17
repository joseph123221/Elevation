import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const ElevatedStreetwear = () => {
  const router = useRouter(); // Initialize router

  const goToLogin = () => {
    router.push('auth/login'); // Navigate to login.jsx using router
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/icons/logos.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.tagline}>Elevate Your Style</Text>
      </View>

      {/* Log In Button */}
      <Pressable 
        style={styles.loginButton}
        onPress={goToLogin} // Navigate to login.jsx on press
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark theme background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  tagline: {
    color: '#f0f0f0', // Light text color
    fontSize: 18,
    fontStyle: 'italic',
    letterSpacing: 1.5,
  },
  loginButton: {
    backgroundColor: '#ff4500', // Bold orange button color for contrast
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff', // White text for the button
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ElevatedStreetwear;
