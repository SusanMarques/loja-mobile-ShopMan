import { Stack } from "expo-router"; // Importa a navegação em pilha (stack navigation) da biblioteca expo-router

export default function RootLayout(){ // Componente RootLayout, responsável por definir a estrutura principal de navegação do aplicativo
    return(
        <Stack screenOptions={{headerShown: false}}> // Esconde o cabeçalho padrão para todas as telas do Stack
            {/* Tela inicial do aplicativo */}
            <Stack.Screen name="index"/> 
            {/* Tela de login */}
            <Stack.Screen name="login"/>
            {/* Conjunto de telas de navegação em abas (tabs), que contém outras telas organizadas por abas */}
            <Stack.Screen name="(tabs)"/>

            
            
        </Stack>
    );  
}

