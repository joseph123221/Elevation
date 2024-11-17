import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const LoginScreen = () => {
  const router = useRouter(); // Initialize router

  const handleLogin = () => {
    router.push('/home');
  };

  const handleGoogleSignIn = () => {
    // Logic for Google sign-in
  };

  const goToSignUp = () => {
    router.push('/signup'); // Navigate to signup page
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
        <Text style={styles.tagline}>Welcome Back!</Text>
      </View>

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

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </Pressable>

      {/* Sign in with Google Button */}
      <Pressable style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Image
          source={require('../../assets/icons/google.png')} // Google icon
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </Pressable>

      {/* Create an Account Link */}
      <Pressable style={styles.signUpLink} onPress={goToSignUp}>
        <Text style={styles.signUpText}>Don't have an account? Create one</Text>
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
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
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
    color: '#000', // Black text for the Google button
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    marginTop: 20,
  },
  signUpText: {
    color: '#ff4500', // Bright orange for "Create an account" link
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default LoginScreen;
