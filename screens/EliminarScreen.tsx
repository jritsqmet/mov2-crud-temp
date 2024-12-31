import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import {  TextInput } from 'react-native-paper'

import { db } from '../config/Config';
import { ref, remove } from 'firebase/database';

export default function EliminarScreen() {

    const [cedula, setcedula] = useState("")

    function eliminar() {
        remove(ref(db, 'usuarios/' + cedula));
    }

  return (
    <View>
      <Text>EliminarScreen</Text>
      <TextInput 
      placeholder='Ingresar cédula'
      keyboardType='numeric'
      onChangeText={ (texto)=> setcedula(texto) }
      />
      <Button color='red' title="Eliminar" onPress={()=> eliminar()}/>
    </View>
  )
}

const styles = StyleSheet.create({})