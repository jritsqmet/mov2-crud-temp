import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import {  ref, onValue } from "firebase/database";
import { db } from '../config/Config';


export default function ListaSree() {

    const [datos, setdatos] = useState()

    /////// LEER ////
    function leer() {
        
        const starCountRef = ref(db, 'usuarios/'  );
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setdatos(data)
            
            let lista : any = Object.keys(data).map( cedula => ({
                cedula, ...data[cedula],
        }) )

            setdatos(lista);
            
        });
    }

    useEffect(() => {
        
        leer()
        console.log( datos );    

    }, [])


    type Item={
        cedula: String,
        name: String,
        edad: number,
        correo: String
    }


    return (
        <View>
            <Text>ListaSree</Text>
            <FlatList 
                data = {datos}
                renderItem={ ( {item}:{item: Item} )=>
                    <View>
                         <Text>{item.name}</Text>
                    </View>
                   
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})