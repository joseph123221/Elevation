import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const SignUpScreen = () => {
  const router = useRouter(); // Initialize router

  const handleSignUp = () => {
    // Logic for signing up the user
  };

  const handleGoogleSignUp = () => {
    // Logic for signing up with Google
  };

  const goToLogin = () => {
    router.push('/login'); // Navigate back to login page
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icons/logos.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.tagline}>Create Your Account</Text>
      </View>

      {/* Full Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      {/* Sign Up Button */}
      <Pressable style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>

      {/* Sign up with Google Button */}
      <Pressable style={styles.googleButton} onPress={handleGoogleSignUp}>
        <Image
          source={require('../../assets/icons/google.png')} // Google icon
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </Pressable>

      {/* Already have an account link */}
      <Pressable style={styles.loginLink} onPress={goToLogin}>
        <Text style={styles.loginLinkText}>Already have an account? Log in</Text>
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
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
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
  input: {
    width: '100%',
    backgroundColor: '#1f1f1f',
    padding: 15,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 20,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#ff4500', // Bold orange button for consistency
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff', // White text for the button
    fontSize: 18,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#fff', // Google button background
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#000', // Black text for Google button
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: '#ff4500', // Bright orange for the "Log in" link
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default SignUpScreen;
