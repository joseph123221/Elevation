import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  TextInput,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';

const Profile = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('Joseph Consolacion');
  const [userEmail, setUserEmail] = useState('josephconsolacion123@gmail.com');
  const [userGender, setUserGender] = useState('Male');
  const [userLocation, setUserLocation] = useState('Dumlog, Toledo City, Cebu');
  const [modalHeight] = useState(new Animated.Value(0));

  const handleEditProfile = () => {
    setModalVisible(true);
    animateModal(300); // Open modal animation
  };

  const handleSaveProfile = () => {
    setModalVisible(false);
    animateModal(0); // Close modal animation
    Alert.alert('Profile Updated', 'Your profile details have been updated successfully.');
  };

  const animateModal = (toValue) => {
    Animated.timing(modalHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <Image
            source={require('..//..//assets/icons/profile.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Profile Details</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Gender:</Text>
            <Text style={styles.infoValue}>{userGender}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Joined:</Text>
            <Text style={styles.infoValue}>September 2021</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>{userLocation}</Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Edit Profile Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Animated.View style={[styles.modalView, { height: modalHeight }]}>
              <Text style={styles.modalTitle}>Edit Profile</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={userName}
                onChangeText={setUserName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={userEmail}
                onChangeText={setUserEmail}
                keyboardType="email-address"
              />
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#121212', // Dark background
    },
  
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 20,
    },
  
    profileHeader: {
      alignItems: 'center',
      marginBottom: 20,
    },
  
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#FFD700', // Button border color
    },
  
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#E0E0E0', // Lighter color for better readability
    },
  
    userEmail: {
      fontSize: 16,
      color: '#B0B0B0', // Slightly brighter color
    },
  
    infoContainer: {
      marginVertical: 20,
    },
  
    infoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFD700', // Bright blue for contrast
      marginBottom: 10,
    },
  
    infoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
    },
  
    infoLabel: {
      fontSize: 16,
      color: '#E0E0E0', // Improved contrast for readability
    },
  
    infoValue: {
      fontSize: 16,
      color: '#B0B0B0',
    },
  
    actionsContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
  
    button: {
      backgroundColor: '#FFD700', // Gold color for buttons to make them pop
      borderRadius: 5,
      padding: 15,
      width: '80%',
      alignItems: 'center',
      elevation: 5, // Adding shadow for depth
  },
  
  buttonText: {
      color: '#000000', // Black text for contrast on the yellow button
      fontWeight: 'bold',
      fontSize: 16, // Slightly larger text
  },
  
  
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker overlay for better focus
    },
  
    modalView: {
      width: '90%', // Slightly wider for better content layout
      backgroundColor: '#1E1E1E', // Dark background for modal
      borderRadius: 10,
      padding: 20,
      elevation: 10, // More prominent shadow
    },
  
    modalTitle: {
      fontSize: 24, // Larger title for emphasis
      fontWeight: 'bold',
      color: '#FFD700', // Lighter color for readability
      marginBottom: 10,
    },
  
    input: {
      height: 45,
      borderColor: '#007BB5',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: '#FFFFFF', // Text color inside input
      backgroundColor: '#2C2C2C', // Background for input field
    },
  
    modalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    saveButton: {
      backgroundColor: '#FFD700', // Green for save button
      borderRadius: 5,
      padding: 10,
      width: '48%',
      alignItems: 'center',
    },
  
    saveButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  
    closeButton: {
      backgroundColor: '#B0B0B0', // Grey for close button
      borderRadius: 5,
      padding: 10,
      width: '48%',
      alignItems: 'center',
    },
  
    closeButtonText: {
      color: '#FFFFFF', // White text for contrast
      fontWeight: 'bold',
    },
  });
  


export default Profile;
