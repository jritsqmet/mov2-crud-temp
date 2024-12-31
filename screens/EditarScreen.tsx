import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

import { db } from '../config/Config'
import { ref, update } from 'firebase/database'

export default function EditarScreen() {

    const [cedula, setcedula] = useState("")
    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [correo, setcorreo] = useState("")

    function editar(){
        update(ref(db, 'usuarios/' + cedula), {
            name: nombre,
            age: edad,
            email: correo
        });
    }

  return (
    <View>
                  <TextInput
                style={styles.input}
                onChangeText={(texto) => setcedula(texto)}
                label="Cédula"
                mode="outlined"

            />

            <TextInput
                style={styles.input}
                onChangeText={(texto) => setnombre(texto)}
                label="Nombre"
                mode="outlined"

            />

            <TextInput
                style={styles.input}
                onChangeText={(texto) => setedad(+texto)}
                label="edad"
                mode="outlined"

            />

            <TextInput
                style={styles.input}
                onChangeText={(texto) => setcorreo(texto)}
                label="correo"
                mode="outlined"

            />

           

            <Button title='EDITAR' onPress={() => editar()} />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        height: 55,
        width: "85%",
        borderRadius: 20,
        paddingHorizontal: 20,
        margin: 10
    }
})