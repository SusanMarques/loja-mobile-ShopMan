// Arquivo Home.tsx
import { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ProductItem } from '../../components/product-item';
import { Product } from '../../types/product'; // Ajuste para usar 'Product' em vez de 'Produto'
import { db } from '../../firebase';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); // Altere para 'Product'

  useEffect(() => {
    // Carregar produtos do Firestore
    const unsubscribe = db.collection('produtos').onSnapshot((snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({
        id: doc.id, // O id é uma string do Firestore
        ...doc.data(),
      })) as Product[]; // Use 'Product' em vez de 'Produto'
      setProducts(productsData);
    });

    return unsubscribe; // Limpar listener ao desmontar o componente
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id} // O id deve ser uma string
        renderItem={({ item }) => <ProductItem data={item} />}
      />
    </View>
  );
}
