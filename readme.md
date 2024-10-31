# [APP Mobile de uma loja de moda masculina Shop Man]

<img src="/assets/loja-shop-man-capa-apresentacao.jpg">

> Descrição do projeto: Este sistema trata-se de uma aplicação mobile feita utilizando React Native, Expo, e Firebase para o banco de dados. Esta primeira versão do sistema permite cadastrar produtos e categorias e listá-los na página Home, na página de Categorias e na página de Produtos. O APP possui tabs com várias seções, incluindo uma dedicada às categorias de produtos, onde o usuário pode visualizar informações detalhadas de cada produto. Há também uma tab de informações sobre a loja, uma tab de menu com opções de cadastro e outras funcionalidades em desenvolvimento, como carrinho, configurações e ofertas. A página de login também está em progresso. ".

[![Autor](https://img.shields.io/badge/SusanMarques-SusanMarques-ff9000?style=flat-square)](https://github.com/SusanMarques)
[![Languages](https://img.shields.io/github/languages/count/SusanMarques/loja-mobile-ShopMan?color=%23ff9000&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/SusanMarques/loja-mobile-ShopMan?color=ff9000&style=flat-square)](https://github.com/SusanMarques/loja-mobile-ShopMan/stargazers)
[![Forks](https://img.shields.io/github/forks/SusanMarques/loja-mobile-ShopMan?color=%23ff9000&style=flat-square)](https://github.com/SusanMarques/loja-mobile-ShopMan/network/members)
[![Contributors](https://img.shields.io/github/contributors/SusanMarques/loja-mobile-ShopMan?color=ff9000&style=flat-square)](https://github.com/SusanMarques/loja-mobile-ShopMan/graphs/contributors)

# :pushpin: Sumario deste projeto

- [Título e Imagem de capa](#APP-Mobile-de-uma-loja-de-moda-masculina-Shop-Man)
- [Descrição do Projeto](#APP-Mobile-de-uma-loja-de-moda-masculina-Shop-Man)
- [Badge](#APP-Mobile-de-uma-loja-de-moda-masculina-Shop-Man)
- [Índice](#sumario-deste-projeto)
- [Features](#rocket-features)
- [Encontrou algum bug?](#bug-bugs)
- [Contribuição](#tada-contribuição)
- [Licença](#closed_book-licença)
- [Documento de Requisitos](#documento-de-requisitos)

<br />

# :rocket: Features

# Funcionalidades do Projeto

1. **Cadastro e Gestão de Produtos**
   - Adicionar novos produtos com título, descrição, preço, categoria, e imagem.
   - Exibir uma lista de produtos cadastrados com informações principais, como nome, descrição e preço.
   - Página de detalhes do produto, incluindo imagem, preço, título, descrição e um botão de "Comprar".

2. **Cadastro e Exibição de Categorias**
   - Adicionar novas categorias com título e imagem de capa.
   - Exibir categorias na página inicial acima dos produtos, permitindo rolagem horizontal.
   - Página de categorias dedicada, onde o usuário pode navegar e visualizar os produtos por categoria.

3. **Navegação com Tabs**
   - **Tab Home**: Lista de categorias e produtos com rolagem horizontal para cada um.
   - **Tab Categorias**: Página dedicada às categorias, onde ao clicar em uma, o usuário é levado à lista de produtos correspondentes.
   - **Tab Sobre a Loja**: Informações sobre a loja e políticas da empresa.
   - **Tab Menu**: Inclui opções como cadastro de produtos, cadastro de categorias, informações sobre a conta e acesso às futuras funcionalidades, como carrinho e ofertas.

4. **Sistema de Autenticação (em desenvolvimento)**
   - Página de login em desenvolvimento para controlar o acesso de usuários.

5. **Banco de Dados com Firebase**
   - Armazenamento de dados de produtos e categorias no Firestore do Firebase, permitindo acesso rápido e seguro.
   - Atualização em tempo real dos dados cadastrados, mantendo o aplicativo sincronizado.

6. **Design e Experiência do Usuário**
   - Interface intuitiva e amigável com design responsivo para melhorar a experiência do usuário.
   - Utilização de listas com rolagem horizontal e exibição visual dos produtos e categorias.

7. **Funcionalidades Futuras (Planejadas)**
   - **Carrinho de Compras**: Adicionar produtos ao carrinho e visualizar os itens selecionados.
   - **Ofertas e Promoções**: Área dedicada a ofertas e descontos da loja.
   - **Configurações**: Ajustes personalizados da conta e preferências do usuário.
   - **Histórico de Compras**: Permitir que o usuário visualize suas compras anteriores.


# :framed_picture: UI Interface do Usuário

<p align="left">
    <img src="/assets/capa-apresentacao-do-projeto.jpg" /> 
    <img src="/assets/logo-identidade-visual.jpg" /> 
    <img src="/assets/tela-pagina-inicial.jpg" /> 
    <img src="/assets/tela-pagina-de-login.jpg" /> 
    <img src="/assets/tela-pagina-home.jpg" /> 
    <img src="/assets/tela-pagina-de-produtos.jpg" /> 
    <img src="/assets/tela-pagina-de-menu.jpg" /> 
    <img src="/assets/tela-pagina-cadastro-de-categorias.jpg" /> 
    <img src="/assets/tela-pagina-cadastro-de-produtos.jpg" /> 
    <img src="/assets/tela-categorias.jpg" /> 
    <img src="/assets/tela-categoria-especifica.jpg" /> 
    <img src="/assets/tela-dados-do-usuario.jpg" /> 
    <img src="/assets/tela-sobre-a-loja.jpg" /> 
    
</p>

# :construction_worker: Guia de instalação

# Guia de Instalação do Projeto "Loja Moda Masculina Shop Man"

Siga os passos abaixo para configurar e iniciar o projeto no seu ambiente local.

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina. Além disso, crie um projeto no **Firebase** para obter as credenciais necessárias.

### Passo a Passo

1. **Clonar o Repositório**
   - No terminal, execute o comando para clonar o repositório:
     ```bash
     git clone https://github.com/SusanMarques/loja-mobile-ShopMan.git
     ```
   - Navegue até o diretório do projeto:
     ```bash
     cd loja-mobile-ShopMan
     ```
     

2. **Instalar Dependências**
   - Instale as dependências do projeto com o comando:
     ```bash
     npm install
     ```

3. **Configurar o Firebase**
   - No seu projeto Firebase, obtenha as credenciais de configuração e cole-as no trecho do código `firebaseConfig` em `firebase.js`, que está na raiz do projeto, substituindo pelos dados do seu banco:
     ```javascript
     let firebaseConfig = {
         apiKey: "SUA_API_KEY",
         authDomain: "SEU_AUTH_DOMAIN",
         projectId: "SEU_PROJECT_ID",
         storageBucket: "SEU_STORAGE_BUCKET",
         messagingSenderId: "SEU_MESSAGING_SENDER_ID",
         appId: "SEU_APP_ID"
     };
     ```

4. **Executar o Projeto**
   - Agora, inicie o projeto com o Expo:
     ```bash
     npm expo start
     ```

### Observação
Esse projeto utiliza Firebase para autenticação e banco de dados em tempo real. Verifique se a chave de API do Firebase tem as permissões corretas configuradas no console do Firebase para garantir o funcionamento.


# :runner: Vamos começar

Execute o seguinte comando para iniciar o app em um ambiente de desenvolvimento:

`npm expo start`

# :postbox: FAQ

**Pergunta:** Quais tecnologias foram utilizadas neste projeto?

**Resposta:** As tecnologias utilizadas são: [ReactNative](https://reactnative.dev/), [Expo](https://expo.dev/), [Firebase](https://firebase.google.com).

# :bug: Bugs

Sinta-se à vontade para **registrar um novo problema** com o respectivo título e descrição no repositorio [loja-mobile-ShopMan](https://github.com/SusanMarques/loja-mobile-ShopMan/issues). Se você já encontrou uma solução para o seu problema, **adoraria revisar sua solicitação de pull request**! Dê uma olhada em nosso **gia de contribuição abaixo**.

# :tada: Contribuição

### Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature `git checkout -b feat/NomeDaSuaFeature`.
3. Faça commit das suas alterações `git commit -am "[add/edit/del]/feat: Descrição da feature"`.
4. Faça push para a branch `git push origin feat/NomeDaSuaFeature`.
5. Crie um novo Pull Request.

# :closed_book: Licença

Lançado em 2024.
Este projeto esta sob a licença [MIT license](https://github.com/SusanMarques/loja-mobile-ShopMan/blob/master/LICENSE).


# [Documento de requisitos]

Para abrir o documento de requisitos do sistema Shop Man: [documento](https://drive.google.com/).
