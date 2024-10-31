import { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { ProductItem } from '../../components/product-item';
import { Product } from '../../types/product';
import { db } from '../../firebase';

interface Categoria {
  id: string;
  title: string;
  cover: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {
    const unsubscribeProducts = db.collection('produtos').onSnapshot((snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(productsData);
    });

    const unsubscribeCategories = db.collection('categorias').onSnapshot((snapshot) => {
      const categoriesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Categoria[];
      setCategories(categoriesData);
    });

    return () => {
      unsubscribeProducts();
      unsubscribeCategories();
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
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 10 }} // Adiciona espaçamento
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
