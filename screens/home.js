import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = (props) => {

  const handleButtonPress = async() => {
    props.navigation.navigate('create');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Agrega la imagen aquí */}
      <Image
        source={require('../assets/logoempresa.jpeg')} // Reemplaza 'logoempresa.jpeg' con la ruta de tu imagen
        style={styles.logo}
      /> 
      <Text style={styles.title}>¡Bienvenido a la aplicación!</Text>
      <Text style={styles.subtitle}>Aquí puedes empezar a construir tu aplicación.</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Botón 1')}>
        <Text style={styles.buttonText}>Agregar Cluster </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Botón 2')}>
        <Text style={styles.buttonText}>Editar cluster </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Botón 3')}>
        <Text style={styles.buttonText}>Ver lista de cluster </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Botón 4')}>
        <Text style={styles.buttonText}>Editar cluster </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default HomeScreen;
