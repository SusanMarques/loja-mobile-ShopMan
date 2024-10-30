import { View, Text, StyleSheet, SafeAreaView , Image, StatusBar, TextInput, TouchableOpacity} from "react-native";
import { Button } from "../components/button";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Screen(){

    const entrar = () => {
       alert("Entrar")
    };


    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <Image
            source={require('../assets/background-loja.jpg')}
            style={styles.banner}
            resizeMode="cover"
            />
            
            <Image
                source={require('../assets/shop-logo.png')}
                style={styles.logo}
            />
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
                
            </View>
            <Button
                title="Entrar"
                onPress={entrar}
            />
            
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