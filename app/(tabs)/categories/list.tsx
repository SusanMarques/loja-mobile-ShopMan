import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native"; // Importa componentes do React Native
import { db } from "../../../firebase"; // Importa a instância do Firebase
import { CategoryItem } from "../../../components/category-item"; // Importa o componente para exibir cada categoria
import { useEffect, useState } from "react"; // Importa hooks do React para gerenciar estado e efeitos

// Define a interface para a estrutura de dados de cada categoria
interface Category {
    id: string; // Identificador único da categoria
    title: string; // Título da categoria
    cover: string; // URL da imagem de capa da categoria
}

// Componente principal da tela
export default function Screen() {
    // Estado para armazenar as categorias e o estado de carregamento
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    // Hook useEffect para buscar categorias ao montar o componente
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Faz a consulta ao Firestore para buscar categorias
                const snapshot = await db.collection('categorias').get();
                // Mapeia os documentos retornados para o formato Category[]
                const categoriesData: Category[] = snapshot.docs.map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    cover: doc.data().cover,
                }));
                // Atualiza o estado com as categorias recebidas
                setCategories(categoriesData);
            } catch (error) {
                // Captura e exibe erros de busca
                console.error("Erro ao buscar categorias: ", error);
            } finally {
                // Define o estado de carregamento como false ao final da operação
                setLoading(false);
            }
        };

        fetchCategories(); // Chama a função para buscar categorias
    }, []); // Dependências vazias para rodar apenas na montagem do componente

    // Se ainda estiver carregando, exibe um indicador de carregamento
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#004398" />
            </View>
        );
    }

    // Renderiza a lista de categorias
    return (
        <View style={styles.container}>
            <FlatList
                data={categories} // Dados a serem exibidos na lista
                renderItem={({ item }) => <CategoryItem data={item} />} // Componente para renderizar cada item
                keyExtractor={(item) => item.id} // Extrai a chave única para cada item
                numColumns={2} // Define o número de colunas na lista
                columnWrapperStyle={styles.row} // Estilo para o contêiner de cada linha
                style={styles.list} // Estilo da lista
            />
        </View>
    );
}

// Estilos do componente
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        backgroundColor: '#DEE6F3', // Cor de fundo da tela
    },
    loadingContainer: {
        flex: 1, // Ocupa todo o espaço disponível
        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center", // Centraliza horizontalmente
        backgroundColor: '#DEE6F3', // Cor de fundo da tela de carregamento
    },
    list: {
        flex: 1, // Ocupa todo o espaço disponível na lista
        padding: 25, // Preenchimento ao redor da lista
    },
    row: {
        justifyContent: "space-between", // Espaça as colunas uniformemente
    },
});
