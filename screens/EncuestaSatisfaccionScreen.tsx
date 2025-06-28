import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import Slider from '@react-native-community/slider'
import { Divider, Snackbar } from 'react-native-paper'

type RadioButtonGroupProps = {
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
};
const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, selected, onSelect }) => (
    <View style={{ flexDirection: 'row', marginVertical: 8 }}>
        {options.map((option: string) => (
            <TouchableOpacity key={option} style={styles.radioOption} onPress={() => onSelect(option)}>
                <View style={[styles.radioCircle, selected === option && styles.radioSelected]} />
                <Text>{option}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

type CheckboxGroupProps = {
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
};
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, selected, onChange }) => {
    function toggle(option: string) {
        if (selected.includes(option)) onChange(selected.filter((o: string) => o !== option));
        else onChange([...selected, option]);
    }
    return (
        <View style={{ flexDirection: 'row', marginVertical: 8 }}>
            {options.map((option: string) => (
                <TouchableOpacity key={option} style={styles.checkOption} onPress={() => toggle(option)}>
                    <View style={[styles.checkBox, selected.includes(option) && styles.checkSelected]} />
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

type DatosEncuesta = {
    contacto: string;
    recomendacion: string;
    razon: string;
    permitirContacto: boolean;
    gustos: string[];
    valoracion: number;
    comentarios: string;
};

export default function RegistroUsuarioScreen() {
    const [contacto, setContacto] = useState<string>("")
    const [recomendacion, setRecomendacion] = useState<string>("Sí")
    const [razon, setRazon] = useState<string>("")
    const [permitirContacto, setPermitirContacto] = useState<boolean>(false)
    const [gustos, setGustos] = useState<string[]>([])
    const [valoracion, setValoracion] = useState<number>(5)
    const [comentarios, setComentarios] = useState<string>("")
    const [activado, setActivado] = useState<boolean>(false)

    // Estado para guardar los datos de la encuesta
    const [datos, setDatos] = useState<DatosEncuesta>({
        contacto: "",
        recomendacion: "",
        razon: "",
        permitirContacto: false,
        gustos: [],
        valoracion: 5,
        comentarios: ""
    })

    function guardar() {
        if (!contacto.trim() || !razon.trim()) {
            Alert.alert("Error", "No se permiten campos en blanco");
            return;
        }
        setDatos({
            contacto: contacto.trim(),
            recomendacion,
            razon: razon.trim(),
            permitirContacto,
            gustos,
            valoracion,
            comentarios: comentarios.trim()
        })
        Alert.alert("Mensaje", "La encuesta se ha guardado correctamente")
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{ fontSize: 30 }} >Encuesta de Satisfaccion</Text>

            <TextInput
                placeholder='Ingresar Contacto'
                style={styles.input}
                value={contacto}
                onChangeText={setContacto}
            />

            <Text style={styles.txt}>¿Recomendarías el producto?</Text>
            <RadioButtonGroup
                options={["Sí", "No", "Quizás"]}
                selected={recomendacion}
                onSelect={setRecomendacion}
            />

            <Text style={styles.txt}>Razón de la valoración</Text>
            <TextInput
                placeholder='¿Por qué das esa valoración?'
                style={styles.input}
                value={razon}
                onChangeText={setRazon}
                multiline
            />

            <View style={styles.switchRow}>
                <Text style={styles.txt}>Permitir contacto para seguimiento</Text>
                <Switch
                    value={permitirContacto}
                    onValueChange={setPermitirContacto}
                />
            </View>

            <Text style={styles.txt}>¿Qué te gustó?</Text>
            <CheckboxGroup
                options={["diseño", "usabilidad", "rendimiento"]}
                selected={gustos}
                onChange={setGustos}
            />

            <Text style={styles.txt}>Valoración: {valoracion}</Text>
            <View style={styles.sliderRow}>
                <Text style={{ fontSize: 20 }}>1</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={10}
                    step={1}
                    value={valoracion}
                    onValueChange={setValoracion}
                />
                <Text style={{ fontSize: 20 }}>10</Text>
            </View>

            <Text style={styles.txt}>Comentarios</Text>
            <TextInput
                placeholder='Agrega tus comentarios...'
                style={styles.input}
                value={comentarios}
                onChangeText={setComentarios}
                multiline
            />

            <Button title='Guardar encuesta' onPress={guardar} />

            <View style={styles.linea} />
            <Text style={styles.txt}>Ver datos</Text>
            <Switch
                value={activado}
                onValueChange={() => setActivado(!activado)}
            />
            <View style={styles.linea} />

            {
                activado === true
                    ? <View>
                        <Text style={styles.txt}>Contacto: {datos.contacto}</Text>
                        <Text style={styles.txt}>Recomendación: {datos.recomendacion}</Text>
                        <Text style={styles.txt}>Razón: {datos.razon}</Text>
                        <Text style={styles.txt}>Permitir contacto: {datos.permitirContacto ? "Sí" : "No"}</Text>
                        <Text style={styles.txt}>Gustos: {datos.gustos.join(", ")}</Text>
                        <Text style={styles.txt}>Valoración: {datos.valoracion}</Text>
                        <Text style={styles.txt}>Comentarios: {datos.comentarios}</Text>
                    </View>
                    : <Text style={styles.txt}>Alerta de Spoiler</Text>
            }

            <Divider style={{ width: "80%" }} />

            <Snackbar
                visible={activado}
                onDismiss={() => setActivado(!activado)}
                action={{
                    label: 'Cerrar',
                    onPress: () => setActivado(false),
                }}>
                ¡Datos cargados!
            </Snackbar>

        </ScrollView>
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
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        fontSize: 25,
        backgroundColor: '#6666',
        width: "80%",
        margin: 2,
        borderRadius: 6,
        padding: 6,
    },
    radioOption: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },
    radioCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#333', marginRight: 5 },
    radioSelected: { backgroundColor: '#333' },
    checkOption: { flexDirection: 'row', alignItems: 'center', marginRight: 15 },
    checkBox: { width: 20, height: 20, borderWidth: 1, borderColor: '#333', marginRight: 5 },
    checkSelected: { backgroundColor: '#333' },
    sliderRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 12 },
    switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%', marginVertical: 8 },
    slider: { flex: 1, marginHorizontal: 10, maxWidth: 200 },
});