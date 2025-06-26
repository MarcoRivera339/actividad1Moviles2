import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Snackbar } from 'react-native-paper'

export default function RegistroUsuarioScreen() {

    const [calle, setcalle] = useState("")
    const [numeroexterior, setnumeroexterior] = useState("")
    const [cuidad, setciudad] = useState("")
    const [referencia, setreferencia] = useState("")

    const [datos, setdatos] = useState({ "calle": "", "numeroexterior": "", "ciudad": "", "referencia": ""})
    const [activado, setactivado] = useState(false)

    function guardar() {
        if (calle.trim() != "" && numeroexterior.trim() != "" && cuidad.trim() != "" && referencia.trim() != "") {
            setdatos(
                {
                    "calle": calle.trim(),
                    "numeroexterior": numeroexterior.trim(),
                    "ciudad": cuidad.trim(),
                    "referencia": referencia.trim(),
                }
            )
            Alert.alert("Mensaje", "Los datos se han guardado correctamente")
        } else {
            Alert.alert("Error", "NO se permiten campos en blanco")
        }
    }

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }} >Direccion</Text>
            <TextInput
                placeholder='Ingresar Calle'
                style={styles.input}
                onChangeText={(texto) => setcalle(texto)}
            />
            <TextInput
                placeholder='Ingresar numero exterior'
                style={styles.input}
                onChangeText={(texto) => setnumeroexterior(texto)}
            />
            <TextInput
                placeholder='Ingresar ciudad'
                style={styles.input}
                onChangeText={(texto) => setciudad(texto)}
            />
            <TextInput
                placeholder='Ingresar referencia'
                style={styles.input}
                onChangeText={(texto) => setreferencia(texto)}
            />
            <Button title='Guardar' onPress={() => guardar()} />
            {/* ------------------------------------------------------------------------------------------------*/}
            <View style={styles.linea} />
            <Text style={styles.txt} >Ver datos</Text>
            <Switch
                value={activado}
                onValueChange={() => setactivado(!activado)}
            />
            <Text style={styles.txt} >Es direccion fiscal ?</Text>
            <View style={styles.linea} />
            {
                activado == true
                    ? <View>
                        <Text style={styles.txt} >Calle: {datos.calle}</Text>
                        <Text style={styles.txt} >Numero Exterior: {datos.numeroexterior}</Text>
                        <Text style={styles.txt} >Ciudad: {datos.ciudad}</Text>
                        <Text style={styles.txt} >Referencia: {datos.referencia}</Text>
                    </View>
                    : <Text style={styles.txt} >Alerta de Spoiler</Text>
            }

            <Divider style={{ width: "80%" }} />
            {/* <Snackbar
                visible={activado}
                onDismiss={() => setactivado(!activado)}
                action={{
                    label: 'Cerrar',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar> */}
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
    },

    linea: {
        backgroundColor: 'black',
        width: 150,
        borderWidth: 1,
        margin: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        fontSize: 25,
        backgroundColor: '#6666',
        width: "80%",
        margin: 2,
    }
})