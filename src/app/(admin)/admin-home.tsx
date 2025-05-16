import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdminDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👩‍💻 Admin Paneli</Text>
      <Text>Buradan randevuları, kullanıcıları ve yorumları yönetebilirsiniz.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});
