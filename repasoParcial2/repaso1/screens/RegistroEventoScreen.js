// Zona 1: Importaciones de componentes y archivos
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Alert, Button, Platform, Switch } from 'react-native';

// Zona 2: Es el main, o mejor dicho, el lugar donde irán los componentes, y todo eso
export default function RegistroEventoScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const mostrarAlerta = (titulo, mensaje, botones) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
      return;
    }
    Alert.alert(titulo, mensaje, botones);
  };

  const enviarRegistro = () => {
    if (nombre === '' || carrera === '' || semestre === '') {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }
    if (isNaN(semestre)) {
      mostrarAlerta('Error', 'El semestre debe ser un número.');
      return;
    }
    mostrarAlerta(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registro de Evento Universitario</Text>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Artemio Hurtado"
        autoCapitalize="words"
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      <Text style={styles.label}>Carrera</Text>
      <TextInput
        value={carrera}
        onChangeText={setCarrera}
        placeholder="ISC"
        autoCapitalize="characters"
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      <Text style={styles.label}>Semestre</Text>
      <TextInput
        value={semestre}
        onChangeText={setSemestre}
        placeholder="9"
        keyboardType="numeric"
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      <Text style={styles.sectionTitle}>Opciones</Text>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <View style={styles.botonWrapper}>
        <Button title="Enviar Registro" onPress={enviarRegistro} color="#007AFF" />
      </View>
    </ScrollView>
  );
}

// Zona 3: Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafafa', padding: 20 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 20, color: '#222' },
  label: { fontSize: 13, color: '#666', marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6, padding: 12, fontSize: 15, marginBottom: 4 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginTop: 24, marginBottom: 8, color: '#222' },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#eee' },
  switchLabel: { fontSize: 15, color: '#444' },
  botonWrapper: { marginTop: 24, marginBottom: 40 },
});
