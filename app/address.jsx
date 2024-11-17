import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Address = () => {
  // State to hold the address
  const [address, setAddress] = useState("Dumlog, Toledo City, Cebu, Philippines");
  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode
  const router = useRouter();

  // Function to toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Function to save changes
  const saveAddress = () => {
    // Logic to save the new address (e.g., update state, send to API)
    // For now, we just toggle off the edit mode
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Address</Text>
      {isEditing ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
          <TouchableOpacity onPress={saveAddress} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleEdit} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{address}</Text>
          <TouchableOpacity onPress={toggleEdit} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Address</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;

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
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#121212',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFD700',
  },
  addressContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  addressText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#121212',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#121212',
    fontWeight: 'bold',
  },
});
