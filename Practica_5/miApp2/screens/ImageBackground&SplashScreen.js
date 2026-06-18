// Zona 1: Importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// Zona 2: Es el main, o mejor dicho, el lugar donde irán los componentes, y todo eso
export default function ImageBackgroundSplashScreenScreen() {
    return (
        <View style={styles.container}>

        <Text> Aqui va la practica de ImageBackground&SplashScreen </Text>

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
});
