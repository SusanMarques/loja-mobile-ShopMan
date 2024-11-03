import { View, Text, StyleSheet, SafeAreaView , Image, StatusBar, TextInput, TouchableOpacity} from "react-native";
import { Button } from "../components/button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

export default function Screen(){

    const entrar = () => {
       alert("Entrar")
    };

    const redefinirSenha = () => {
        router.push('/reset-senha');  // Navega para a tela de redefinição de senha
    };
    const registrar = () => {
        router.push('/registrar');  // Navega para a tela de redefinição de senha
    };

    const start = () => {
        router.replace('/home');
    };

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <Image
            source={require('../assets/fundoapp.jpg')}
            style={styles.banner}
            resizeMode="cover"
            />
            
            <Image
                source={require('../assets/shop-logo.png')}
                style={styles.logo}
            />

             <TouchableOpacity onPress={start}>
                    <Text style={styles.LinkTexto}>Ver produtos</Text>
            </TouchableOpacity>
            
            <View style={styles.blocoCampo}>

                <View style={styles.campo}>
                    <FontAwesome size={25} name="user"  style={styles.ico}/>
                    <TextInput 
                    placeholder="Usuário"
                    />
                </View>

                <View style={styles.campo}>
                    <FontAwesome size={25} name="lock"  style={styles.ico}/>
                    <TextInput 
                    placeholder="Senha"
                    />
                </View>

                <TouchableOpacity onPress={redefinirSenha}>
                    <Text style={styles.LinkTexto}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                
            </View>
            <Button
                title="Entrar"
                onPress={entrar}
            />
            <TouchableOpacity onPress={registrar}>
                    <Text style={styles.LinkTexto}>Registrar conta</Text>
            </TouchableOpacity>

           
            


            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner: {
        ...StyleSheet.absoluteFillObject, 
        width: '100%',
        height: '100%',
    },
    logo:{
        width: 100,
        height: 100,
        zIndex: 1,
        marginBottom: 40
    },
    blocoCampo:{
        marginBottom: 10
    },
    LinkTexto:{
        color: '#004398'
    },
    campo:{
        borderWidth: 1,
        borderColor: '#004398',
        backgroundColor: '#FFFEFF',
        borderRadius: 10,
        width: 200,
        margin: 5,
        padding: 2,
        flexDirection: 'row'
    },
    ico:{
        color: '#004398',
        paddingRight:10

        
    }

})