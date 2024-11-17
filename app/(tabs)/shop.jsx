import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Product 1 */}
        <View style={styles.productContainer}>
          <Image source={require('../../assets/icons/q1.png')} style={styles.image} resizeMode="contain" />
          <Text style={styles.price}>₱1,099</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>

        {/* Product 2 */}
        <View style={styles.productContainer}>
          <Image source={require('../../assets/icons/q2.png')} style={styles.image} resizeMode="contain" />
          <Text style={styles.price}>₱1,599</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>

        {/* Product 3 */}
        <View style={styles.productContainer}>
          <Image source={require('../../assets/icons/q3.png')} style={styles.image} resizeMode="contain" />
          <Text style={styles.price}>₱899</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>

        {/* Product 4 */}
        <View style={styles.productContainer}>
          <Image source={require('../../assets/icons/q4.png')} style={styles.image} resizeMode="contain" />
          <Text style={styles.price}>₱1,999</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>

        {/* Product 5 */}
        <View style={styles.productContainer}>
          <Image source={require('../../assets/icons/q5.png')} style={styles.image} resizeMode="contain" />
          <Text style={styles.price}>₱999</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Consistent with your app's theme
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700', // Title color
    textAlign: 'center',
    marginBottom: 20,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    alignItems: 'center', // Centering images
  },

  productContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30, // Space between products
    backgroundColor: '#1E1E1E', // Slightly lighter background for product cards
    borderRadius: 10,
    padding: 15,
    elevation: 5, // Shadow effect
  },

  image: {
    width: 200, // Adjust size as necessary
    height: 200, // Adjust size as necessary
    marginBottom: 10, // Space between image and text
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Price color
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#FFD700', // Button color
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 3, // Adding shadow for depth
  },

  buttonText: {
    color: '#121212', // Text color for contrast
    fontWeight: 'bold',
  },
});

export default Shop;
