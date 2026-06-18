// Zona 1: Importaciones de componentes y archivos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import TarjetasScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import ScrollViewScreen from './ScrollViewScreen';
import PressableSwitchScreen from './Pressable&SwitchScreen';
import TextInputAlertScreen from './TextInput&AlertScreen';
import FlatListSectionListScreen from './FlatList&SectionListScreen';
import ImageBackgroundSplashScreenScreen from './ImageBackground&SplashScreen';
import ActivityIndicatorKeyboardAvoidingViewScreen from './ActivityIndicator&KeyboardAvoidingViewScreen';
import ModalBottomSheetScreen from './Modal&BottomSheetScreen';

// Zona 2: Es el main, o mejor dicho, el lugar donde irán los componentes, y todo eso
export default function MenuScreen() {

        const [screen, setScreen] = useState('menu');

        switch(screen){
            case 'Tarjetas':
                return <TarjetasScreen/>
            case 'SafeArea':
                return <SafeAreaScreen/>
            case 'ScrollView':
                return <ScrollViewScreen/>
            case 'Pressable&Switch':
                return <PressableSwitchScreen/>
            case 'TextInput&Alert':
                return <TextInputAlertScreen/>
            case 'FlatList&SectionList':
                return <FlatListSectionListScreen/>
            case 'ImageBackGround&SplashScreen':
                return <ImageBackgroundSplashScreenScreen/>
            case 'ActivityIndicator&KeyboardAvoidingView':
                return <ActivityIndicatorKeyboardAvoidingViewScreen/>
            case 'Modal&BottomSheet':
                return <ModalBottomSheetScreen/>
            case 'menu':
            default:
                return (
                    <View style={styles.container}>
                        <View>
                            <Button title= 'Practica Tarjetas' onPress={()=>setScreen('Tarjetas')}/>
                        </View>

                        <View>
                            <Button title= 'Practica SafeArea' onPress={()=>setScreen('SafeArea')}/>
                        </View>

                        <View>
                        <Button title= 'Practica ScrollView' onPress={()=>setScreen('ScrollView')}/>
                        </View>

                        <View>
                        <Button title= 'Practica TextInput&Alert' onPress={()=>setScreen('TextInput&Alert')}/>
                        </View>

                        <View>
                        <Button title= 'Practica FlatList&SectionList' onPress={()=>setScreen('FlatList&SectionList')}/>
                        </View>

                        <View>
                        <Button title= 'Practica ImageBackground&Splash' onPress={()=>setScreen('ImageBackGround&SplashScreen')}/>
                        </View>

                        <View>
                        <Button title= 'Practica ActivityIndicator&KeyboardAvoidingView' onPress={()=>setScreen('ActivityIndicator&KeyboardAvoidingView')}/>
                        </View>

                        <View>
                        <Button title= 'Practica Modal&BottomSheet' onPress={()=>setScreen('Modal&BottomSheet')}/>
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
        flexDirection: 'row'
    },
});
