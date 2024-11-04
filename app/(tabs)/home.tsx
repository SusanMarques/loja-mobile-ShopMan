import { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { ProductItem } from '../../components/product-item'; // Importa o componente ProductItem para exibir produtos
import { Product } from '../../types/product'; // Importa a interface Product para tipar os produtos
import { db } from '../../firebase'; // Importa a instância do Firebase banco de dados

// Define a interface Categoria que representa a estrutura de uma categoria
interface Categoria {
  id: string;
  title: string;
  cover: string; // URL da imagem de capa da categoria
}
// Componente principal da tela inicial
export default function Home() {
  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState<Product[]>([]);
  // Estado para armazenar a lista de categorias
  const [categories, setCategories] = useState<Categoria[]>([]);

// Efeito colateral para buscar produtos e categorias do Firestore
  useEffect(() => {
    // Listener para obter atualizações em tempo real dos produtos
    const unsubscribeProducts = db.collection('produtos').onSnapshot((snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Obtém os dados do documento e adiciona o ID
      })) as Product[];
      setProducts(productsData);// Atualiza o estado com os produtos
    });
// Listener para obter atualizações em tempo real das categorias
    const unsubscribeCategories = db.collection('categorias').onSnapshot((snapshot) => {
      const categoriesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Obtém os dados do documento e adiciona o ID
      })) as Categoria[];
      setCategories(categoriesData);// Atualiza o estado com as categorias
    });
// Limpeza dos listeners quando o componente é desmontado
    return () => {
      unsubscribeProducts();
      unsubscribeCategories();
    };
  }, []);// Executa o efeito apenas uma vez, ao montar o componente

  return (
    <View style={{ flex: 1 }}>
      {/* Exibição das Categorias */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id} // Usando o ID da categoria como chave única
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>  
            <Image source={{ uri: item.cover }} style={styles.categoryImage} /> {/* Imagem da categoria */}
            <Text style={styles.categoryText}>{item.title}</Text> {/* Título da categoria */}
          </View>
        )}
        horizontal // Exibição horizontal da lista de categorias
        showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 10 }} // Estilização do conteúdo, Adiciona espaçamento
      />

      {/* Título dos Produtos */}
      <Text style={styles.tituloProdutos}>Tendências do momento</Text>

      {/* Exibição dos Produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem data={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  tituloProdutos: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 10,
    marginTop: -10, // Reduzir o espaço entre o título e as categorias
  },
});
