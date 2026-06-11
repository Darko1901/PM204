// Perfil usando desestructuración
import { Text, View, Button,StyleSheet} from "react-native";
import React, {useState} from "react";

export const Perfil = ({nombre, carrera, materia, cuatri, style}) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[styles.tarjeta, style]}>
            <Text style={styles.nombre}>{nombre}</Text>

            {mostrar && 
                <>
                <Text style={styles.carrera}>{carrera}</Text>
                <Text style={styles.otroTexto}>{materia}</Text>
                <Text style={styles.otroTexto}>{cuatri}</Text>
                </>
            }
            <Button title="Ver Perfil" onPress={()=>setMostrar(!mostrar)}></Button>
        </View>
    )
} 

const styles = StyleSheet.create({
    nombre: {
        fontSize:24,
        fontWeight: 500,
        textTransform: 'uppercase',
    },
    tarjeta: {
        borderWidth: 2,
        padding: 15,
        margin: 10,
    },
    carrera: {
        fontSize: 18,
        color: 'blue',
        fontFamily: 'Roboto',
    },
    otroTexto: {
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
});



/*
import { Text, View} from "react-native";

export const Perfil = (props) => {
    return (
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatri}</Text>
        </View>
    )
} */