import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 170,
    marginBottom: -100
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#3E524B',
    padding: 10,
    borderRadius: 5,
    width: 300
  },
  buttonText: {
    textAlign: "center",
    color: 'white',
    fontSize: 16,
  }
});

export default WelcomeScreen;
