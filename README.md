# Alerta Justiça

Um site moderno e responsivo para informar, conscientizar e combater o trabalho análogo à escravidão no Brasil, por meio de uma perspectiva interdisciplinar: Direito, Linguística e Engenharia.

## Sobre o Projeto

O Alerta Justiça é uma iniciativa interdisciplinar que visa combater o trabalho análogo à escravidão no Brasil, promovendo informação, denúncia segura e acesso à justiça para as populações vulneráveis.

O site contém as seguintes seções:
- **Página Inicial**: Apresentação da iniciativa com imagem de impacto
- **Sobre o Problema**: Informações sobre o trabalho análogo à escravidão, legislação e dados
- **A Plataforma**: Apresentação da ideia da plataforma, formulário de denúncia e conteúdos educativos
- **A Interdisciplinaridade**: Como Direito, Linguística e Engenharia se unem no projeto
- **Denuncie Aqui**: Formulário para denúncias anônimas
- **Recursos e Contato**: Links para organizações e informações de contato

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui (componentes)

## Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/alerta-justica.git
cd alerta-justica
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm run dev
```

4. Acesse o site em `http://localhost:5173`

## Deploy na Vercel

Este projeto está configurado para fácil deploy na Vercel. Siga os passos abaixo:

1. Faça fork ou clone este repositório para sua conta GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub
3. Clique em "New Project" e selecione o repositório do Alerta Justiça
4. Mantenha as configurações padrão e clique em "Deploy"
5. Aguarde o build e deploy automático

A Vercel irá automaticamente detectar que é um projeto Vite/React e configurar o build adequadamente.

## Estrutura do Projeto

```
alerta-justica/
├── public/             # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   │   └── ui/         # Componentes de UI (shadcn)
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Ponto de entrada
├── .gitignore          # Arquivos ignorados pelo Git
├── index.html          # Template HTML
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração TypeScript
└── vite.config.ts      # Configuração do Vite
```

## Licença

Este projeto está sob a licença MIT.
