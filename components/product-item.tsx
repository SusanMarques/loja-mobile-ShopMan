import { Link } from "expo-router"; // Importa o componente Link para navegação
import { Product } from "../types/product"; // Importa o tipo Product definido em um arquivo de tipos
import { Pressable, Text, StyleSheet, Image, View } from "react-native"; // Importa componentes do React Native
import { router } from "expo-router"; // Importa o roteador do expo-router para navegação

// Define o tipo de propriedades esperadas pelo componente
type Props = {
    data: Product; // A propriedade data é do tipo Product
}

// Componente que representa um item de produto
export const ProductItem = ({data}: Props) =>{

    return(
        // Rota dinâmica para a página do produto correspondente
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}> {/* Contêiner do item do produto */}
                <Image
                    style={styles.img} // Estilo da imagem do produto
                    source={{uri: data.image}} // Fonte da imagem do produto
                    resizeMode="cover" // Modo de redimensionamento da imagem
                />
                <View style={styles.info}> {/* Contêiner para informações do produto */}
                    <Text style={styles.title}>{data.title}</Text> {/* Título do produto */}
                    <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text> {/* Preço do produto formatado */}
                </View>
            </Pressable>
        </Link>
    );
}

// Estilos do componente
const styles = StyleSheet.create({
    container:{
        marginBottom: 20, // Margem inferior entre os itens do produto
        alignItems: 'center' // Centraliza os itens dentro do contêiner
    },
    img:{
        width: 200, // Largura da imagem do produto
        height: 250, // Altura da imagem do produto
        borderRadius: 30, // Bordas arredondadas na imagem
        backgroundColor: "#CCCCCC", // Cor de fundo padrão da imagem (caso não carregue)
        marginRight: 20 // Margem à direita da imagem
    },
    info:{
        flex: 1 // Permite que o contêiner de informações ocupe espaço disponível
    },
    title:{
        fontSize: 15, // Tamanho da fonte do título
        marginBottom: 1, // Margem inferior do título
        fontFamily: 'FiraSans_400Regular', // Fonte do título
        fontWeight: '700', // Peso da fonte (negrito)
        color: '#1D2B48' // Cor do texto do título
    },
    description:{
        fontSize: 13, // Tamanho da fonte da descrição (não utilizado no momento)
        color: "#555555", // Cor do texto da descrição
        marginBottom: 10, // Margem inferior da descrição
    },
    price:{
        fontSize: 16, // Tamanho da fonte do preço
        fontFamily: 'FiraSans_400Regular', // Fonte do preço
        color: '#1D2B48' // Cor do texto do preço
    }
});
