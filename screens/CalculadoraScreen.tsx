import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalculadoraScreen() {
    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)

    useEffect(() => {
        if (numero1 <= -5) {
            setnumero1(-5)
        }
        if (numero1 >= 5) {
            setnumero1(5)
        }
        if (numero2 <= -5) {
            setnumero2(-5)
        }
        if (numero2 >= 5) {
            setnumero2(5)
        }

    }, [numero1, numero2])

    function sumar() {

        let suma = numero1 + numero2
        Alert.alert("Respuesta:"+ suma);
        console.log(suma);
    }


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 60 }}>Calculadora</Text>

            <View style={styles.fila}>
                <Button title='-' onPress={() => setnumero1(numero1 - 1)} />
                <Text style={{ fontSize: 60 }}> {numero1}   </Text>
                <Button title='+' onPress={() => setnumero1(numero1 + 1)} />
            </View>

            <View style={styles.fila}>
                <Button title='-' onPress={() => setnumero2(numero2 - 1)} color={'green'} />
                <Text style={{ fontSize: 60 }}> {numero2}   </Text>
                <Button title='+' onPress={() => setnumero2(numero2 + 1)} color={'green'} />
            </View>

            <View style={styles.linea} />

            <Button title='suma' onPress={sumar} />
        </View>
    )
}

const styles = StyleSheet.create({

    linea: {
        backgroundColor: 'black',
        width: 150,
        borderWidth: 1,
        margin: 10,
    },

    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    fila: {
        flexDirection: 'row',

    }
})