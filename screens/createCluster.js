import React, {useState} from "react";
import { ScrollView, View, Button, TextInput, StyleSheet } from "react-native";
import app from "../database/firebase";
import { collection, getFirestore , addDoc} from "firebase/firestore/lite";
import * as ImagePicker from 'react-native-image-picker';


const db = getFirestore(app);
const createCluster = () =>{
    
    const [state, setState]=useState({
        cluster:'',
        fecha:'',
        phone:'',
        photo: null 
        

    })

    const handleOpenCamera = () => {
        const options = {
          mediaType: 'photo',
          quality: 0.5,
          maxWidth: 500,
          maxHeight: 500
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('El usuario canceló la selección de la imagen');
            } else if (response.error) {
              console.log('Error de ImagePicker: ', response.error);
            } else {
              console.log('URI de la imagen: ', response.uri);
              // Aquí puedes manejar la imagen tomada, como mostrarla en tu aplicación
            }
          });
          };

    const handleChangeText = (name, value)=> {
        setState({...state, [name]:value})
    }

    const saveNewCluster= async () =>{
        
        if(state.cluster==''){
            alert("No se ha llenado el campo, favor de hacerlo")
        }else{
            
            const cluster={
                cluster: state.cluster,
                fecha: state.fecha,
                phone:state.phone
            }

            await addDoc(collection(db,"clusters"),{
                ...cluster
            })
            alert('se agrego con exito');
        }
        
    }
    return(
                
        <ScrollView style={styles.container}> 

        <View style={styles.inputGroup}>
          <TextInput placeholder='Nombre del cluster' onChangeText={(value)=> handleChangeText('cluster', value)}/>
        </View>
  
        <View style={styles.inputGroup}>
          <TextInput placeholder='Fecha' onChangeText={(value)=> handleChangeText('fecha', value)}/>
        </View>
  
        <View style={styles.inputGroup}>
          <TextInput placeholder='Phone User' onChangeText={(value)=> handleChangeText('phone', value)}/>
        </View>
  
        <View>
          <Button title="Save cluster" onPress={ ()=> saveNewCluster()}/>
        </View>

        <View style={styles.container}>
        <Button title="Abrir Cámara" onPress={() =>
      ImagePicker.launchImageLibrary(
       {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
       },
        response => {
           console.log(response);
           setPhoto(response);
          },
        )
     }
    />
        </View>
      </ScrollView>
    )
}
const styles = StyleSheet.create ({
    container:{
        flex:1,
        padding:35
    },
    inputGroup: {
      flex: 1,
      padding:0,
      marginBotton:15,
      borderBottonWidth:1,
      borderBottonColor: '#cccccc'
    }
  })


export default createCluster