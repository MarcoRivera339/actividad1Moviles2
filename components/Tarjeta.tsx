import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {
    console.error(props.informacion.name.first);

    function mostrarDatos(   dato: any ){
        Alert.alert(dato.name.last,"El usuario proviene de"+dato.homePlanet)
        //alert("El usuario proviene de"+dato.homePlanet)
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={() => mostrarDatos(props.informacion)} >
            <Text>{props.informacion.name.first}  {props.informacion.name.last}</Text>
            <Image
                source={{ uri: props.informacion.images.main }}
                style={styles.img}
            />
            <Text>Ocupacion: {props.informacion.occupation}</Text>
            <Text>Edad: {props.informacion.age}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "skyblue",
        margin: 5,
        padding: 10,
        borderRadius: 20,

    },

    img: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    }
})