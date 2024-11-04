import { Tabs } from "expo-router"; // Importa o componente de abas do expo-router
import { View, Text } from "react-native"; // Importa componentes do React Native
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Importa ícones da biblioteca FontAwesome

// Componente que define o layout das abas
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fff', // Cor do ícone/texto da aba ativa
        tabBarInactiveTintColor: '#DEE6F3', // Cor do ícone/texto da aba inativa
        tabBarStyle: {
          backgroundColor: '#004398', // Cor de fundo da barra de abas (azul)
          borderTopWidth: 0, // Remove a borda superior
          borderRadius: 15, // Adiciona borda arredondada na tab bar
          margin: 10, // Adiciona margem para dar espaço entre a tab bar e a borda da tela
          position: 'absolute', // Deixa a tab bar flutuante
          left: 10,
          right: 10,
          bottom: 10,
        },
        headerStyle: {
          backgroundColor: '#004398', // Cor da barra superior (header)
          borderBottomLeftRadius: 20, // Borda arredondada no canto inferior esquerdo
          borderBottomRightRadius: 20, // Borda arredondada no canto inferior direito
          height: 100, // Ajusta a altura do header para caber o estilo arredondado
        },
        headerTintColor: '#fff', // Cor do texto e dos ícones no header
        headerTitleStyle: {
          fontWeight: 'bold', // Estilo do título
        },
      }}
    >
      {/* Definição da aba "Início" */}
      <Tabs.Screen
        name="home" // Nome da rota
        options={{
          title: 'Início', // Título exibido na aba
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />, // Ícone da aba
          headerTitle: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Início</Text> // Título do header
            </View>
          ),
        }}
      />
      {/* Definição da aba "Categorias" */}
      <Tabs.Screen
        name="categories" // Nome da rota
        options={{
          title: 'Categorias', // Título exibido na aba
          headerShown: false, // Não exibe o header para esta aba
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="table" color={color} />, // Ícone da aba
        }}
      />
      {/* Definição da aba "Sobre" */}
      <Tabs.Screen
        name="about" // Nome da rota
        options={{
          title: 'Sobre', // Título exibido na aba
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />, // Ícone da aba
        }}
      />
      {/* Definição da aba "Menu" */}
      <Tabs.Screen
        name="menu" // Nome da rota
        options={{
          title: 'Menu', // Título exibido na aba
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bars" color={color} />, // Ícone da aba
        }}
      />
    </Tabs>
  );
}
