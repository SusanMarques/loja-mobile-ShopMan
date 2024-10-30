import { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { ProductItem } from '../../components/product-item';
import { Product } from '../../types/product'; // Ajuste para usar 'Product'
import { db } from '../../firebase';

// Defina o tipo de Categoria
interface Categoria {
  id: string;
  title: string;
  cover: string; // Campo para a URL da imagem da categoria
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categoria[]>([]); // Adicione um estado para categorias

  useEffect(() => {
    // Carregar produtos do Firestore
    const unsubscribeProducts = db.collection('produtos').onSnapshot((snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(productsData);
    });

    // Carregar categorias do Firestore
    const unsubscribeCategories = db.collection('categorias').onSnapshot((snapshot) => {
      const categoriesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Categoria[];
      setCategories(categoriesData);
    });

    return () => {
      unsubscribeProducts(); // Limpar listener de produtos
      unsubscribeCategories(); // Limpar listener de categorias
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Exibição das Categorias */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={{ uri: item.cover }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        )}
        horizontal // Ativa a rolagem horizontal
        showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }} // Adiciona espaçamento
      />

      {/* Exibição dos Produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem data={item} />
        )}
        horizontal // Ativa a rolagem horizontal
        showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
        contentContainerStyle={{ paddingHorizontal: 16 }} // Adiciona espaçamento
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    alignItems: 'center', // Centraliza o conteúdo dentro do item da categoria
  },
  categoryImage: {
    width: 100, // Defina a largura da imagem
    height: 100, // Defina a altura da imagem
    borderRadius: 50, // Bordas arredondadas para a imagem
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Espaço entre a imagem e o texto
  },
});
