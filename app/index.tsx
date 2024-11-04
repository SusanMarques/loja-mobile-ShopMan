import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

// Tela inicial do aplicativo
export default function Screen() {
    // Função para navegar para a tela de produtos
    const start = () => {
        router.replace('/home');
    };
    // Função para navegar para a tela de login
    const entrar = () => {
        router.push('/login');  
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />// Garante que a barra de status seja exibida

            <Image
                source={require('../assets/background-loja.jpg')}
                style={styles.banner}
                resizeMode="cover"
            />
            
            <Image
                source={require('../assets/shop-logo.png')}
                style={styles.logo}
            />
            
            <View style={styles.content}>
                <Image
                    source={require('../assets/logo-titulo-shopman.png')}
                    style={styles.logoTitulo}
                />
                {/* Botão para levar para a página de produtos */}
                <Button
                    title="Ver produtos"
                    onPress={start}
                />
                {/* Botão de login */}
                <TouchableOpacity style={styles.login} onPress={entrar}>
                    <Text style={styles.tituloLogin}> Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    banner: {
        ...StyleSheet.absoluteFillObject,   // Ocupar toda a tela
        width: '100%',
        height: '100%',
    },
    login: {
        paddingVertical: 10,      
        paddingHorizontal: 30,    
    },
    tituloLogin:{
        color: '#004398',
        fontSize: 16,
        fontWeight: '700'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, 
        marginBottom: "40%"
    },
    h1: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white', 
    },
    logo: {
        width: 200,
        height: 200,
        zIndex: 1,
        marginBottom: 40
    },
    logoTitulo: {
        height: 50,
        width: 200
    }
});
