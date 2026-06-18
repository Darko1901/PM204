// Zona 1: Importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Perfil} from '../components/Perfil';

// Zona 2: Es el main, o mejor dicho, el lugar donde irán los componentes, y todo eso
export default function TarjetasScreen() {
    return (
        <View style={styles.container}>

            <Perfil style={styles.tarjetaRoja} nombre="Ricardo"
            carrera = "ISC"
            materia="PM"
            cuatri="9"
            />

            <Perfil style={styles.tarjetaVerde} nombre="Ricardo"
            carrera = "ISC"
            materia="PM"
            cuatri="9"
            />

            <Perfil style={styles.tarjetaRoja} nombre="Ricardo"
            carrera = "ISC"
            materia="PM"
            cuatri="9"
            />

            <StatusBar style="auto" />
        </View>
    );
}

// Zona 3: Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    tarjetaVerde:{
        backgroundColor: 'green'
    },
    tarjetaRoja: {
        backgroundColor: 'red'
    }
});
