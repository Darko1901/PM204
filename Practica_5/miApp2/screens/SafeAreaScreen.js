// Zona 1: Importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; //Para IOS y Android
import { useState } from 'react';

// Zona 2: Es el main, o mejor dicho, el lugar donde irán los componentes, y todo eso
export default function SafeAreaScreen() {
    const [mostrarMensaje, setMostrarMensaje] = useState(true);

    return (
        <SafeAreaView style={styles.safe} edges={['top','bottom']}>
            <View style={styles.encabezado}>

                <Text style={styles.titulo}> Mis tareas</Text>
            </View>

            {mostrarMensaje &&
                <View style= {styles.mensaje}>
                    <Text style={styles.mensajeTexto}>¡Bienvenido de nuevo!</Text>
                    <TouchableOpacity onPress={() => setMostrarMensaje(false)}>
                        <Text style={styles.mensajeCerrar}>x</Text>
                    </TouchableOpacity>
                </View>
            }

        <ScrollView style= {styles.scroll} contentContainerStyle={styles.listaContenido} showsVerticalScrollIndicator={false}>
            {['Comprar Pan', 'Estudiar React Native', 'Aprender importaciones', 'Llamar a alguien', 'Revisar un correo'].map((tarea, i)=> (
                <View key={i} style={styles.tarjeta}>
                    <Text style={styles.tarjetaTexto}>{tarea}</Text>
                </View>
            ))}
        </ScrollView>
        <StatusBar style="auto" />
        </SafeAreaView>
    );
}

// Zona 3: Estilos
const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#fff',
    },
    encabezado: {
        padding: 20,
        backgroundColor: '#111',
        width: '100%',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    mensaje: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff3cd',
        padding: 14,
        margin: 16,
        borderRadius: 8,
    },
    mensajeTexto: {
        fontSize: 14,
        color: '#856404',
    },
    mensajeCerrar: {
        fontSize: 16,
        fontWeight: '700',
        color: '#6644d03',
        paddingHorizontal: 6,
    },
    scroll: {
        flex: 1,
    },
    listaContenido: {
        padding: 16,
        paddingBottom: 40,
    },
    tarjeta: {
        backgroundColor: '#f4f4f4f4',
        borderRadius: 10,
        padding: 16,
        marginBottom: 10
    },
    tarjetaTexto:{
        fontSize: 15,
        color: '#222',
    }
});
