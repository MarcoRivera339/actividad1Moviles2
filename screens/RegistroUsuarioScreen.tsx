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


    const [datos, setdatos] = useState({ "nombre": "", "apellido": "", "email": "", "telefono": "", "contrasenia": "", "confirmarcontrasenia": "", aceptarcondiciones: false })
    const [activado, setactivado] = useState(false)
    const [aceptarter, setaceptarter] = useState(false)

    function guardar() {
        if (nombre.trim() != "" && apellido.trim() != "" && email.trim() != "" && telefono.trim() != "" && contrasenia.trim() != "" && confirmarcontrasenia.trim() != "" && aceptarter == true) {
            if (!validarContrasenia()) {
                return;
            }
            setdatos(
                {
                    "nombre": nombre.trim(),
                    "apellido": apellido.trim(),
                    "email": email.trim(),
                    "telefono": telefono.trim(),
                    "contrasenia": contrasenia.trim(),
                    "confirmarcontrasenia": confirmarcontrasenia.trim(),
                    "aceptarcondiciones": aceptarter

                }
            )
            Alert.alert("Mensaje", "Los datos se han guardado correctamente")
        } else {
            Alert.alert("Error", "NO se permiten campos en blanco")
        }
    }

    function validarContrasenia() {

        if (contrasenia.trim() !== confirmarcontrasenia.trim()) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return false;
        }
        if (contrasenia.length < 6) {
            Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
            return false;
        }
        return true;
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
                keyboardType='numeric'
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
            <View style={styles.option} >
                <Text style={styles.txt} >Aceptar terminos y condiciones</Text>
                <Switch
                    value={aceptarter}
                    onValueChange={() => setaceptarter(!aceptarter)}
                />
            </View>
            <Button title='Guardar' onPress={() => guardar()} />
            {/* ------------------------------------------------------------------------------------------------*/}
            <View style={styles.linea} />

            <View style={styles.option} >
                <Text style={styles.txt} >Ver datos</Text>
                <Switch
                    value={activado}
                    onValueChange={() => setactivado(!activado)}
                />
            </View>

            <View style={styles.linea} />
            {
                activado == true
                    ? <View>
                        <Text style={styles.txt} >Nombre: {datos.nombre}</Text>
                        <Text style={styles.txt} >Apellido: {datos.apellido}</Text>
                        <Text style={styles.txt} >Email: {datos.email}</Text>
                        <Text style={styles.txt} >Telefono: {datos.telefono}</Text>
                        <Text style={styles.txt} >Contraseña: {datos.contrasenia}</Text>
                        <Text style={styles.txt} >
                            Aceptó términos: {datos.aceptarcondiciones ? "Sí aceptó" : "No aceptó"}
                        </Text>
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
    option: {
        flexDirection: 'row',
    },
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