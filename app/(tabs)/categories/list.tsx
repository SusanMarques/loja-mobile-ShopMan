import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { db } from "../../../firebase"; // Certifique-se de importar corretamente o Firebase
import { CategoryItem } from "../../../components/category-item";
import { useEffect, useState } from "react";

// Definindo o tipo para a estrutura de dados de cada categoria
interface Category {
    id: string;
    title: string;
    cover: string;
}

export default function Screen() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const snapshot = await db.collection('categorias').get();
                const categoriesData: Category[] = snapshot.docs.map(doc => ({
                    id: doc.id,
                    title: doc.data().title,
                    cover: doc.data().cover,
                }));
                setCategories(categoriesData);
            } catch (error) {
                console.error("Erro ao buscar categorias: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#004398" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem data={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEE6F3',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#DEE6F3',
    },
    list: {
        flex: 1,
        padding: 25,
    },
    row: {
        justifyContent: "space-between",
    },
});
