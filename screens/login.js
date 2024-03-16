import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import app from "../database/firebase";
import { getFirestore, addDoc, collection } from 'firebase/firestore/lite';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

//importamos la db
const auth=getAuth(app)


const LoginScreen = (props) => {

    const [Usuario,setUsuario]=React.useState('');
    const [Contrasenia, setContrasenia] = React.useState("");



    const handleLogin = async () =>{

        signInWithEmailAndPassword(auth, Usuario,Contrasenia)
        .then((userCredential)=>{
            console.log('Inicio de sesion exitoso!!')
            const user= userCredential.user;
            console.log(user)
            props.navigation.navigate('Home');
            })
            .catch(error=> {
                console.log(error)
            })


    }

    //crear usuario
  const handleRegister = async () => {
    // if(state.Usuario!='') {
    //     const users={
    //         Usuario: state.Usuario,
    //         Contrasenia: state.Contrasenia,
    //     }
    //     await addDoc(collection(db,"users"),{
    //         ...users
    //     })
    //     alert('se agrego con exito');
    // } else  {
    //   // Error en el registro, puedes mostrar un mensaje de error al usuario
    //   alert("Error de registro", "Hubo un error al registrar al usuario. Por favor, inténtalo de nuevo.");
    // }


    createUserWithEmailAndPassword(auth, Usuario,Contrasenia)   //si falla checa el usuario y contra
    .then((userCredential)=>{
    alert('Cuenta creada')
    const user= userCredential.user;
    console.log(user)
    })
    .catch(error=> {
        console.log(error)
    })

  }


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Inicio de sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={(text)=> setUsuario(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(text)=> setContrasenia(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>


        {/* <!--- Botón para darse de alta ---> */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen
