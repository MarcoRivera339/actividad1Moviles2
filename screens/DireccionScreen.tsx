import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-paper'

export default function RegistroUsuarioScreen() {

    const [calle, setcalle] = useState("")
    const [numeroexterior, setnumeroexterior] = useState("")
    const [cuidad, setciudad] = useState("")
    const [referencia, setreferencia] = useState("")

    const [datos, setdatos] = useState({
        calle: "",
        numeroexterior: "",
        ciudad: "",
        referencia: "",
        direccionfiscal: false
    })
    const [activado, setactivado] = useState(false)
    const [aceptarter, setaceptarter] = useState(false)

    // Estados de error
    const [errorCalle, setErrorCalle] = useState(false);
    const [errorNumero, setErrorNumero] = useState(false);
    const [errorCiudad, setErrorCiudad] = useState(false);
    const [errorReferencia, setErrorReferencia] = useState(false);

    function guardar() {
        let valido = true;

        if (calle.trim() === "") {
            setErrorCalle(true);
            valido = false;
        } else {
            setErrorCalle(false);
        }

        if (numeroexterior.trim() === "") {
            setErrorNumero(true);
            valido = false;
        } else {
            setErrorNumero(false);
        }

        if (cuidad.trim() === "") {
            setErrorCiudad(true);
            valido = false;
        } else {
            setErrorCiudad(false);
        }

        if (referencia.trim() === "") {
            setErrorReferencia(true);
            valido = false;
        } else {
            setErrorReferencia(false);
        }

        if (valido) {
            setdatos({
                calle: calle.trim(),
                numeroexterior: numeroexterior.trim(),
                ciudad: cuidad.trim(),
                referencia: referencia.trim(),
                direccionfiscal: aceptarter
            });
            Alert.alert("Mensaje", "Los datos se han guardado correctamente");
        } else {
            Alert.alert("Error", "Todos los campos son obligatorios");
        }
    }

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }} >Dirección</Text>

            {/* Calle */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Ingresar Calle'
                    style={[styles.input, errorCalle && styles.inputError]}
                    onChangeText={(texto) => setcalle(texto)}
                />
                {errorCalle && <Text style={styles.iconoAdvertencia}>❗</Text>}
            </View>
            {errorCalle && <Text style={styles.errorText}>La calle es obligatoria</Text>}

            {/* Número exterior */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Ingresar número exterior'
                    style={[styles.input, errorNumero && styles.inputError]}
                    onChangeText={(texto) => setnumeroexterior(texto)}
                    keyboardType='numeric'
                />
                {errorNumero && <Text style={styles.iconoAdvertencia}>❗</Text>}
            </View>
            {errorNumero && <Text style={styles.errorText}>El número exterior es obligatorio</Text>}

            {/* Ciudad */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Ingresar ciudad'
                    style={[styles.input, errorCiudad && styles.inputError]}
                    onChangeText={(texto) => setciudad(texto)}
                />
                {errorCiudad && <Text style={styles.iconoAdvertencia}>❗</Text>}
            </View>
            {errorCiudad && <Text style={styles.errorText}>La ciudad es obligatoria</Text>}

            {/* Referencia */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Ingresar referencia'
                    style={[styles.input, errorReferencia && styles.inputError]}
                    onChangeText={(texto) => setreferencia(texto)}
                    multiline
                />
                {errorReferencia && <Text style={styles.iconoAdvertencia}>❗</Text>}
            </View>
            {errorReferencia && <Text style={styles.errorText}>La referencia es obligatoria</Text>}

            {/* Switch dirección fiscal */}
            <View style={styles.option}>
                <Text style={styles.txt}>¿Es dirección fiscal?</Text>
                <Switch
                    value={aceptarter}
                    onValueChange={() => setaceptarter(!aceptarter)}
                />
            </View>

            <Button title='Guardar' onPress={() => guardar()} />

            {/* Línea divisoria */}
            <View style={styles.linea} />
            <Text style={styles.txt}>Ver datos</Text>
            <Switch
                value={activado}
                onValueChange={() => setactivado(!activado)}
            />
            <View style={styles.linea} />

            {
                activado
                    ? <View>
                        <Text style={styles.txt}>Calle: {datos.calle}</Text>
                        <Text style={styles.txt}>Número Exterior: {datos.numeroexterior}</Text>
                        <Text style={styles.txt}>Ciudad: {datos.ciudad}</Text>
                        <Text style={styles.txt}>Referencia: {datos.referencia}</Text>
                        <Text style={[styles.txt, { color: datos.direccionfiscal ? 'green' : 'red' }]}>
                            Dirección fiscal: {datos.direccionfiscal ? 'Sí' : 'No'}
                        </Text>
                    </View>
                    : <Text style={styles.txt}>Alerta de Spoiler</Text>
            }

            <Divider style={{ width: "80%" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        textAlign: 'center'
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
        fontSize: 18,
        backgroundColor: '#eee',
        width: "80%",
        marginVertical: 5,
        padding: 8,
        borderRadius: 5,
    },

    inputError: {
        borderColor: 'red',
        borderWidth: 2,
    },

    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 5,
        width: '80%',
        textAlign: 'left',
    },

    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },

    iconoAdvertencia: {
        fontSize: 18,
        color: 'red',
        marginLeft: 5,
    },

    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    }
})
