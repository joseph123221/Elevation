import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const purchaseHistory = [
  { id: 1, item: 'Streetwear Hoodie', date: '2024-10-01', price: 1445.00 },
  { id: 2, item: 'Graphic Tee', date: '2024-09-15', price: 2125.00 },
  { id: 3, item: 'Sneakers', date: '2024-08-28', price: 1660.00 },
  // Add more purchases as needed
];

const History = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchase History</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {purchaseHistory.map((purchase) => (
          <TouchableOpacity key={purchase.id} style={styles.purchaseCard}>
            <Text style={styles.itemText}>{purchase.item}</Text>
            <Text style={styles.dateText}>{purchase.date}</Text>
            <Text style={styles.priceText}>₱{purchase.price.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Consistent dark theme
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for the title
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 16,
    alignItems: 'center',
  },
  purchaseCard: {
    backgroundColor: '#1F1F1F', // Darker background for each purchase
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color for item name
  },
  dateText: {
    fontSize: 14,
    color: '#FFFFFF', // White for date
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    color: '#FFD700', // Gold color for price
  },
});
