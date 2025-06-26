import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Snackbar } from 'react-native-paper'

export default function RegistroUsuarioScreen() {

    const [contacto, setcontacto] = useState("")
    const [recomendacion, setrecomendacion] = useState("")
    const [valoracion, setvaloracion] = useState("")

    const [datos, setdatos] = useState({ "contacto": "", "recomendacion": "", "valoracion": ""})
    const [activado, setactivado] = useState(false)

    function guardar() {
        if (contacto.trim() != "" && recomendacion.trim() != "" && valoracion.trim() != "") {
            setdatos(
                {
                    "contacto": contacto.trim(),
                    "recomendacion": recomendacion.trim(),
                    "valoracion": valoracion.trim(),
                }
            )
            Alert.alert("Mensaje", "Los datos se han guardado correctamente")
        } else {
            Alert.alert("Error", "NO se permiten campos en blanco")
        }
    }

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }} >Encuesta de Satisfaccion</Text>
            <TextInput
                placeholder='Ingresar Contacto'
                style={styles.input}
                onChangeText={(texto) => setcontacto(texto)}
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
                        <Text style={styles.txt} >Calle: {datos.contacto}</Text>
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