import { Pressable, Text, StyleSheet, Image, View } from "react-native"; // Importa componentes do React Native
import { Category } from "../types/category"; // Importa o tipo Category definido em um arquivo de tipos
import { router } from "expo-router"; // Importa o roteador do expo-router para navegação
import { useFonts, FiraSans_400Regular } from '@expo-google-fonts/fira-sans'; // Importa a função de uso de fontes do Expo

// Define o tipo de propriedades esperadas pelo componente
type Props = {
  data: Category; // A propriedade data é do tipo Category
};

// Componente que representa um item de categoria
export const CategoryItem = ({ data }: Props) => {
  // Função que navega para a tela da categoria correspondente ao ser clicada
  const click = () => {
    router.navigate(`/categories/${data.id}`);
  };

  // Carrega fontes (Fira Sans)
  let [fontsLoaded] = useFonts({
    FiraSans_400Regular, // Define a fonte a ser carregada
  });

  // Verifica se as fontes foram carregadas antes de renderizar o componente
  if (!fontsLoaded) {
    return null; // Retorna null enquanto as fontes não estão carregadas
  }
  
  // ---------------------------------

  return (
    <Pressable onPress={click} style={styles.container}>
      <Image source={{ uri: data.cover }} style={styles.image} /> {/* Exibe a imagem da categoria */}

      {/* Aplica a fonte Fira Sans no título */}
      <Text style={styles.title}>{data.title}</Text> {/* Exibe o título da categoria */}
    </Pressable>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    margin: 10, // Margem ao redor do item da categoria
    alignItems: "center", // Centraliza o texto e a imagem
    backgroundColor: '#DEE6F3', // Cor de fundo do item da categoria
  },
  image: {
    width: 120, // Largura da imagem/círculo
    height: 120, // Altura da imagem/círculo
    borderRadius: 60, // Faz a imagem ficar circular
  },
  title: {
    marginTop: 5, // Espaço entre a imagem e o título
    fontSize: 16, // Tamanho da fonte do título
    color: "#000", // Cor do texto do título
    textAlign: "center", // Centraliza o texto abaixo da imagem
    fontFamily: 'FiraSans_400Regular', // Aplica a fonte Fira Sans ao título
  },
});
