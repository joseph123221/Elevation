import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const Cart = () => {
  // Sample items in the cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 1500, image: require('../../assets/icons/q1.png') },
    { id: 2, name: 'Product 2', price: 1299, image: require('../../assets/icons/q2.png') },
    { id: 3, name: 'Product 3', price: 899, image: require('../../assets/icons/q3.png') },
  ]);

  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    setModalVisible(true); // Show the modal when checkout is clicked
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.detailsContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Total price display */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ₱{calculateTotalPrice()}</Text>
        </View>

        {/* Checkout button */}
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for order confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close modal when clicking outside
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Order Successful!</Text>
            <Text style={styles.modalMessage}>You have to pay: ₱{calculateTotalPrice()}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 15,
  },

  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },

  itemPrice: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 10,
  },

  removeButton: {
    backgroundColor: '#FF4500',
    borderRadius: 5,
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },

  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
  },

  checkoutButton: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    padding: 15,
    marginTop: 30,
    alignItems: 'center',
  },

  checkoutButtonText: {
    color: '#121212',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
  },

  modalView: {
    width: '80%',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
  },

  modalMessage: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },

  modalButton: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },

  modalButtonText: {
    color: '#121212',
    fontWeight: 'bold',
  },
});

export default Cart;
