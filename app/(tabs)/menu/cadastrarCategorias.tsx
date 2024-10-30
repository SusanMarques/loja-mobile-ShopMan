import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button, Image } from 'react-native';
import { db } from '../../../firebase'; // Importe o arquivo de configuração Firebase

interface Categoria {
  id: string;
  title: string;
  cover: string;
}

export default function CadastrarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');

  // Carregar as categorias do Firestore
  useEffect(() => {
    const unsubscribe = db.collection('categorias').onSnapshot((snapshot) => {
      const categoriasData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Categoria[];
      setCategorias(categoriasData);
    });

    return unsubscribe; // Limpa o listener quando o componente é desmontado
  }, []);

  // Função para cadastrar nova categoria
  const cadastrarCategoria = async () => {
    await db.collection('categorias').add({
      title,
      cover
    });

    // Limpar os campos
    setTitle('');
    setCover('');
  };

  return (
    <ScrollView style={styles.contentContainer}>
      {/* Formulário de cadastro de categoria */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da Categoria"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={cover}
          onChangeText={setCover}
        />
        <Button title="Cadastrar Categoria" onPress={cadastrarCategoria} />
      </View>

      {/* Lista de categorias cadastradas */}
      <View>
        {categorias.map((categoria) => (
          <View style={styles.categoryItem} key={categoria.id}>
            <Text style={styles.categoryText}>
              {categoria.title}
            </Text>
            {categoria.cover ? (
              <Image
                source={{ uri: categoria.cover }}
                style={styles.categoryImage}
                resizeMode="contain"
              />
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  categoryText: {
    fontSize: 16,
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
