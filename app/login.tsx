import { View, Text, StyleSheet, SafeAreaView , Image, StatusBar, TextInput, TouchableOpacity} from "react-native";
import { Button } from "../components/button"; // importa Botão personalizado para o app
import FontAwesome from "@expo/vector-icons/FontAwesome"; // importa Ícones da biblioteca FontAwesome
import { router } from "expo-router";

export default function Screen(){
// Função chamada ao clicar no botão "Entrar"
    const entrar = () => {
       alert("Entrar")
    };
// Navega para a tela de redefinição de senha
    const redefinirSenha = () => {
        router.push('/reset-senha');  
    };
// Navega para a tela de registro de conta
    const registrar = () => {
        router.push('/registrar');  
    };
// Navega para a tela principal da loja
    const start = () => {
        router.replace('/home');
    };

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar /> // Garante que a barra de status seja exibida
            
            {/* Imagem de fundo da tela */}
            <Image
            source={require('../assets/fundoapp.jpg')}
            style={styles.banner}
            resizeMode="cover"
            />
            {/* Logo da loja */}
            <Image
                source={require('../assets/shop-logo.png')}
                style={styles.logo}
            />
            {/* Link para levar a página home que exibe os produtos*/}
             <TouchableOpacity onPress={start}>
                    <Text style={styles.LinkTexto}>Ver produtos</Text>
            </TouchableOpacity>
            {/* Campos de input para login */}
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
                {/* Link para redefinir a senha */}
                <TouchableOpacity onPress={redefinirSenha}>
                    <Text style={styles.LinkTexto}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                
            </View>
            {/* Botão "Entrar" */}
            <Button
                title="Entrar"
                onPress={entrar}
            />
            {/* Link para a tela de registro de nova conta */}
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
        ...StyleSheet.absoluteFillObject, // Preenche toda a tela com a imagem de fundo
        width: '100%',
        height: '100%',
    },
    logo:{
        width: 100,
        height: 100,
        zIndex: 1, // Mantém a logo acima da imagem de fundo
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
        flexDirection: 'row' // Alinha ícone e campo de entrada na horizontal
    },
    ico:{
        color: '#004398', // Cor azul para ícones
        paddingRight: 10 // Espaçamento entre ícone e campo de entrada

        
    }

})