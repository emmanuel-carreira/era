# GEMINI.md - Era da Papelaria Website

## Visão Geral do Projeto

Este repositório contém o código-fonte do site da Era da Papelaria, uma plataforma online para exibição de produtos de papelaria, interação com clientes e apresentação do portfólio da empresa. O site foi desenvolvido com Next.js e utiliza uma arquitetura moderna com componentes React, estilização através de Tailwind CSS e uma variedade de componentes de UI da biblioteca Radix.

## Estrutura de Diretórios

A estrutura de diretórios do projeto é organizada da seguinte forma:

- **`/app`**: Contém a estrutura principal da aplicação, incluindo as páginas, layouts e componentes específicos de cada rota.
  - **`/app/components`**: Componentes reutilizáveis específicos para as páginas da aplicação.
  - **`/app/extras`**: Página com componentes adicionais.
  - **`/app/portfolio`**: Página do portfólio da empresa.
- **`/components`**: Armazena componentes de UI reutilizáveis em toda a aplicação.
  - **`/components/ui`**: Componentes de UI genéricos, como botões, modais e inputs.
- **`/public`**: Contém arquivos estáticos, como imagens, ícones e fontes.
- **`/lib`**: Funções e utilitários de uso geral.
- **`/styles`**: Arquivos de estilização globais.
- **`/hooks`**: Hooks customizados do React.

## Primeiros Passos

Para executar o projeto localmente, siga os passos abaixo:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Scripts Disponíveis

Os seguintes scripts estão disponíveis no arquivo `package.json`:

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera a versão de produção do site.
- **`npm run start`**: Inicia o servidor de produção.
- **`npm run lint`**: Executa o linter para verificar a qualidade do código.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no servidor e geração de sites estáticos.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework de CSS utilitário para estilização.
- **Radix UI**: Biblioteca de componentes de UI acessíveis e de baixo nível.
- **Lucide React**: Biblioteca de ícones.
- **ESLint**: Ferramenta de linting para JavaScript e TypeScript.
