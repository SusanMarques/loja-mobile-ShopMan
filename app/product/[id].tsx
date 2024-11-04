import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { db } from '../../firebase';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../types/product';

// Componente principal da tela de Produto
export default function ProductScreen() {
// Obtém o ID do produto a partir dos parâmetros da URL
  const { id } = useLocalSearchParams();
  // Estado para armazenar o produto e controle de carregamento
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

// Efeito que busca os dados do produto do banco de dados
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const docRef = db.collection("produtos").doc(id as string);
        const doc = await docRef.get();
        // Se o documento existe, atualiza o estado com os dados do produto
        if (doc.exists) {
          setProduct({ id: doc.id, ...doc.data() } as Product);
        } else {
          // Retorna à tela anterior se o produto não for encontrado
          router.back(); 
        }
        setLoading(false); // Termina o carregamento
      }
    };

    fetchProduct();
  }, [id]);

// Exibe indicador de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#004398" />
      </SafeAreaView>
    );
  }
// Se o produto não foi encontrado, não renderiza nada
  if (!product) return null;
// Função de exemplo para manipular o evento de compra
  const comprar = () => {
    alert("Você clicou no item: " + product.title);
  };
 // Função para retornar à tela anterior
  const voltar = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
       {/* Remove o título da barra superior */}
      <Stack.Screen options={{ title: '' }} />
      
      <ScrollView style={styles.Area} contentContainerStyle={{ alignItems: 'center' }}>
        
        <View style={styles.imageContainer}>
           {/* Imagem do produto */}
          <Image
            style={styles.img}
            source={{ uri: product.image }}
            resizeMode="cover"
          />
          {/* Botão para voltar */}
          <TouchableOpacity style={styles.backButton} onPress={voltar}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.tituloPreco}>
            {/* Título e preço do produto */}
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          </View>
          {/* Descrição do produto */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      
      {/* Botão de compra */}
      <View style={styles.buttonArea}>
        <Button
          title="comprar"
          onPress={comprar}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE6F3',
  },
  Area: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    width: '100%',
    height: 450,
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: -50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 50,
  },
  contentContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonArea: {
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 20,
    textAlign: 'justify',
  },
  price: {
    fontSize: 22,
    textAlign: 'center',
  },
  tituloPreco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  }
});
