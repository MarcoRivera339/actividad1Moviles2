import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Snackbar } from 'react-native-paper'

export default function RegistroUsuarioScreen() {

    const [nombre, setnombre] = useState("")
    const [apellido, setapellido] = useState("")
    const [email, setemail] = useState("")
    const [telefono, settelefono] = useState("")
    const [contrasenia, setcontrasenia] = useState("")
    const [confirmarcontrasenia, setconfirmarcontrasenia] = useState("")

    const [datos, setdatos] = useState({ "nombre": "", "apellido": "", "email": "", "telefono": "", "contrasenia": "", "confirmarcontrasenia": "" })
    const [activado, setactivado] = useState(false)

    function guardar() {
        if (nombre.trim() != "" && apellido.trim() != "" && email.trim() != "" && telefono.trim() != "" && contrasenia.trim() != "" && confirmarcontrasenia.trim() != "") {
            setdatos(
                {
                    "nombre": nombre.trim(),
                    "apellido": apellido.trim(),
                    "email": email.trim(),
                    "telefono": telefono.trim(),
                    "contrasenia": contrasenia.trim(),
                    "confirmarcontrasenia": confirmarcontrasenia.trim(),
                }
            )
            Alert.alert("Mensaje", "Los datos se han guardado correctamente")
        } else {
            Alert.alert("Error", "NO se permiten campos en blanco")
        }
    }

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }} >Registro De Usuario</Text>
            <TextInput
                placeholder='Ingresar Nombre'
                style={styles.input}
                onChangeText={(texto) => setnombre(texto)}
            />
            <TextInput
                placeholder='Ingresar Apellido'
                style={styles.input}
                onChangeText={(texto) => setapellido(texto)}
            />
            <TextInput
                placeholder='Ingresar Email'
                style={styles.input}
                onChangeText={(texto) => setemail(texto)}
            />
            <TextInput
                placeholder='Ingresar Telefono'
                style={styles.input}
                onChangeText={(texto) => settelefono(texto)}
            />
            <TextInput
                placeholder='Ingresar Contraseña'
                style={styles.input}
                onChangeText={(texto) => setcontrasenia(texto)}
            />
            <TextInput
                placeholder='Confirmar Contraseña'
                style={styles.input}
                onChangeText={(texto) => setconfirmarcontrasenia(texto)}
            />
            <Button title='Guardar' onPress={() => guardar()} />
            {/* ------------------------------------------------------------------------------------------------*/}
            <View style={styles.linea} />
            <Text style={styles.txt} >Ver datos</Text>
            <Switch
                value={activado}
                onValueChange={() => setactivado(!activado)}
            />
            <Text style={styles.txt} >Aceptar terminos y condiciones</Text>
            <View style={styles.linea} />
            {
                activado == true
                    ? <View>
                        <Text style={styles.txt} >Nombre: {datos.nombre}</Text>
                        <Text style={styles.txt} >Apellido: {datos.apellido}</Text>
                        <Text style={styles.txt} >Email: {datos.email}</Text>
                        <Text style={styles.txt} >Telefono: {datos.telefono}</Text>
                        <Text style={styles.txt} >Contraseña: {datos.contrasenia}</Text>
                        <Text style={styles.txt} >Confirmar Contraseña: {datos.confirmarcontrasenia}</Text>
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