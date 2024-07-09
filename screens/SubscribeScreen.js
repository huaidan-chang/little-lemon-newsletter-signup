import * as React from 'react';
import { Image, StyleSheet, Text, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import {validateEmail} from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');
  const isEmailValid = validateEmail(email);
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
     <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.title}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Type your email"
        keyboardType="email-address"
      />
      <Pressable 
        style={[
          styles.button, !isEmailValid && styles.disabled
        ]}
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
          setEmail('');
        }}
        disabled={!isEmailValid}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
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
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5
  }
});
export default SubscribeScreen;
