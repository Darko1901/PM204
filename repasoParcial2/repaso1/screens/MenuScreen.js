// Zona 1: Importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import RegistroEventoScreen from './RegistroEventoScreen';

// Zona 2: Es el main, o mejor dicho, el lugar donde irán los componentes, y todo eso
export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'RegistroEvento':
            return <RegistroEventoScreen />;
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <View>
                        <Button title='Practica Registro de Evento' onPress={() => setScreen('RegistroEvento')} />
                    </View>
                    <StatusBar style="auto" />
                </View>
            );
    }
}

// Zona 3: Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
});
