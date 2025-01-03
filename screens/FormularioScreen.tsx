import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Snackbar, TextInput } from 'react-native-paper';
//FIREBASE
import { ref, set } from 'firebase/database';
import { db } from '../config/Config';

export default function FormularioScreen() {

    const [cedula, setcedula] = useState("")
    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [correo, setcorreo] = useState("")

    /////////// ESCRIBIR ///////////////
    function guardar() {
        set(ref(db, 'usuarios/' + cedula), {
            name: nombre,
            age: edad,
            email: correo
        });
    }

    return (
        <View>
            <Text>FormularioScreen</Text>
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

           

            <Button title='GUARDAR' onPress={() => guardar()} />
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