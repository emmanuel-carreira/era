# GEMINI.md - Era da Papelaria Website

Este arquivo serve como um guia para desenvolvedores e IAs que trabalham neste repositório, detalhando a finalidade do projeto, sua organização interna e como utilizá-lo.

## 🌟 Visão Geral do Projeto

O site **Era da Papelaria** é uma plataforma digital para um ateliê de papelaria personalizada. Ele funciona como uma "landing page" sofisticada e um portfólio interativo para apresentar serviços de convites digitais, "save the dates", cardápios e outros itens de papelaria para eventos (casamentos, aniversários, etc.).

### Principais Funcionalidades:
- **Portfólio Interativo:** Galeria de trabalhos realizados.
- **Calculadora de Preços/Kits:** Exibição de pacotes (Kit Pronto, Kit Personalizado).
- **Produtos Exclusivos:** Seção dedicada ao "Jornal dos Noivos".
- **Integração de Pedidos:** Formulário (Google Forms) integrado para captação de novos pedidos.
- **Seção de FAQ:** Respostas para dúvidas comuns dos clientes.
- **Design Responsivo:** Otimizado para dispositivos móveis e desktop com foco em estética minimalista e romântica.

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS (com suporte a animações personalizadas)
- **UI Components:** Radix UI & Lucide React (ícones)
- **Gerenciamento de Estado/Formulários:** React Hook Form & Zod
- **Build Tool:** pnpm (conforme `pnpm-lock.yaml`)

## 📂 Estrutura de Diretórios

```text
/
├── app/                  # Estrutura principal da aplicação (App Router)
│   ├── components/       # Componentes específicos da lógica de negócio (ex: FAQ, Galeria)
│   ├── extras/           # Página de itens adicionais de papelaria
│   ├── portfolio/        # Página dedicada ao portfólio de trabalhos
│   ├── globals.css       # Estilos globais da aplicação
│   ├── layout.tsx        # Layout raiz
│   └── page.tsx          # Landing page principal
├── components/           # Componentes reutilizáveis de UI
│   ├── ui/               # Componentes atômicos (Button, Card, Input, etc. - baseados no shadcn/ui)
│   └── theme-provider.tsx # Gerenciamento de tema (claro/escuro)
├── hooks/                # Hooks customizados (ex: use-mobile, use-toast)
├── lib/                  # Utilitários e configurações (ex: utils.ts para tailwind-merge)
├── public/               # Ativos estáticos (Imagens, Logos, Favicons)
│   └── images/           # Fotos dos produtos e convites
├── styles/               # Arquivos CSS adicionais
├── components.json       # Configuração do shadcn/ui
├── tailwind.config.ts    # Configurações de cores e temas do Tailwind
└── tsconfig.json         # Configurações do TypeScript
```

## 🚀 Instruções de Uso

### Pré-requisitos
- Node.js (v18+)
- pnpm (recomendado) ou npm/yarn

### Instalação
Clone o repositório e instale as dependências:
```bash
pnpm install
# ou
npm install
```

### Desenvolvimento
Inicie o servidor local:
```bash
pnpm dev
# ou
npm run dev
```
O site estará disponível em `http://localhost:3000`.

### Build e Produção
Para gerar a versão otimizada para produção:
```bash
pnpm build
pnpm start
```

### Adicionando Novos Componentes
O projeto utiliza o padrão **shadcn/ui**. Para adicionar novos componentes de UI base, você pode usar o comando `npx shadcn-ui@latest add [component-name]`.

## 🎨 Guia de Estilo (Cores Principais)
As cores são definidas no `tailwind.config.ts` e refletem a identidade visual da marca:
- **Cream:** Fundo principal suave.
- **Mystical Purple:** Cor principal para textos e destaques.
- **Romantic Pink:** Cor secundária para elementos delicados e animações.
- **Soft Blue:** Tons de apoio para variação visual.

---
*Este documento foi gerado para auxiliar na manutenção e evolução do site Era da Papelaria.*
