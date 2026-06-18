// Zona 1: Importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuScreen from './screens/MenuScreen';

// Zona 2: Es el main, o mejor dicho, el lugar donde irán los componentes, y todo eso
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
          <MenuScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
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
