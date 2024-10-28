// import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
// import { db } from "../../../firebase"; // Importando a configuração do Firebase
// import { CategoryItem } from "../../../components/category-item";
// import { useEffect, useState } from "react"; // Importando useState e useEffect

// export default function Screen() {
//     const [categories, setCategories] = useState([]); // Estado para armazenar as categorias
//     const [loading, setLoading] = useState(true); // Estado de carregamento

//     // Carregar as categorias do Firestore
//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const snapshot = await db.collection('categorias').get();
//                 const categoriesData = snapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data(),
//                 }));
//                 setCategories(categoriesData);
//             } catch (error) {
//                 console.error("Erro ao buscar categorias: ", error);
//             } finally {
//                 setLoading(false); // Atualiza o estado de carregamento
//             }
//         };

//         fetchCategories();
//     }, []);

//     // Exibe um indicador de carregamento enquanto as categorias estão sendo carregadas
//     if (loading) {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#004398" />
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={categories}
//                 renderItem={({ item }) => <CategoryItem data={item} />}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2} // Define 2 colunas para exibir as categorias
//                 columnWrapperStyle={styles.row} // Ajusta o espaçamento entre as colunas
//                 style={styles.list}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#DEE6F3',
//     },
//     loadingContainer: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: '#DEE6F3',
//     },
//     list: {
//         flex: 1,
//         padding: 25,
//     },
//     row: {
//         justifyContent: "space-between", // Espaça as categorias igualmente
//     },
// });
