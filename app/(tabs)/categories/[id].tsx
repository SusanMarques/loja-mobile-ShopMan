// import { View, Text, StyleSheet, FlatList } from "react-native";
// import { db } from "../../../firebase"; // Certifique-se de importar sua configuração do Firebase
// import { ProductItem } from "../../../components/product-item";
// import { router, Stack, useLocalSearchParams } from "expo-router";
// import { useEffect, useState } from "react"; // Importar useState e useEffect
// import { Category } from "../../../types/category";

// export default function Screen() {
//     const { id } = useLocalSearchParams();
//     const idCategory = parseInt(id as string);

//     const [category, setCategory] = useState(null); // Para armazenar a categoria
//     const [products, setProducts] = useState([]); // Para armazenar os produtos

//     // Carregar a categoria e os produtos da Firestore
//     useEffect(() => {
//         const fetchCategoryAndProducts = async () => {
//             // Obter categoria pelo ID
//             const categoryDoc = await db.collection('categorias').doc(id).get();
//             if (categoryDoc.exists) {
//                 setCategory({ id: categoryDoc.id, ...categoryDoc.data() });

//                 // Obter produtos associados à categoria
//                 const productsSnapshot = await db.collection('produtos').where('idCategory', '==', idCategory).get();
//                 const productsData = productsSnapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data(),
//                 }));
//                 setProducts(productsData);
//             } else {
//                 router.back(); // Voltar se a categoria não existir
//             }
//         };

//         fetchCategoryAndProducts();
//     }, [id, idCategory]);

//     if (!category) return null; // Retornar null enquanto a categoria não é carregada

//     return (
//         <View style={styles.container}>
//             <Stack.Screen options={{ title: category.title }} />
//             <FlatList
//                 data={products}
//                 renderItem={({ item }) => <ProductItem data={item} />}
//                 keyExtractor={item => item.id}
//                 style={styles.list}
//                 ListEmptyComponent={<Text style={styles.emptyText}>Nenhum produto encontrado nesta categoria.</Text>}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     list: {
//         flex: 1,
//         width: '100%',
//         padding: 20,
//     },
//     emptyText: {
//         textAlign: 'center',
//         marginTop: 20,
//         fontSize: 16,
//         color: '#555',
//     },
// });
