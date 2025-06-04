# Instruções para Deploy no GitHub e Vercel

Este guia explica como fazer o deploy do site "Alerta Justiça" no GitHub e na Vercel para visualização online.

## 1. Preparando o Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login na sua conta
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Preencha os campos:
   - Nome do repositório: `alerta-justica`
   - Descrição: `Site para combate ao trabalho análogo à escravidão no Brasil`
   - Visibilidade: Pública (recomendado) ou Privada
   - Inicializar com README: Não marque (já temos um README)
4. Clique em "Create repository"

## 2. Enviando o Código para o GitHub

Execute os seguintes comandos no terminal, na pasta do projeto:

```bash
# Navegue até a pasta do projeto
cd alerta-justica/my-app

# Inicialize o repositório Git (se ainda não estiver inicializado)
git init

# Adicione todos os arquivos ao staging
git add .

# Faça o commit inicial
git commit -m "Versão inicial do site Alerta Justiça"

# Adicione o repositório remoto (substitua SEU-USUARIO pelo seu nome de usuário do GitHub)
git remote add origin https://github.com/SEU-USUARIO/alerta-justica.git

# Envie o código para o GitHub
git push -u origin main
```

Se o branch principal for chamado `master` em vez de `main`, use:
```bash
git push -u origin master
```

## 3. Deploy na Vercel

1. Acesse [Vercel](https://vercel.com) e faça login (pode usar sua conta GitHub)
2. Na dashboard, clique em "Add New..." e selecione "Project"
3. Encontre e selecione o repositório `alerta-justica` na lista
4. Na tela de configuração:
   - Framework Preset: Vite
   - Build Command: `pnpm run build` (já configurado)
   - Output Directory: `dist` (já configurado)
   - Install Command: `pnpm install` (já configurado)
5. Clique em "Deploy"

A Vercel irá automaticamente detectar as configurações do projeto Vite e realizar o deploy. Após alguns minutos, você receberá um link para acessar o site online (geralmente algo como `alerta-justica.vercel.app`).

## 4. Atualizações Contínuas

Sempre que quiser atualizar o site com novas funcionalidades:

1. Faça as alterações no código localmente
2. Execute `git add .` para adicionar as mudanças
3. Execute `git commit -m "Descrição das alterações"` 
4. Execute `git push` para enviar ao GitHub

A Vercel detectará automaticamente as mudanças no repositório e fará um novo deploy com as atualizações.

## 5. Visualizando o Progresso

Com este fluxo configurado, você poderá:
- Acompanhar cada etapa do desenvolvimento online
- Compartilhar o link do site com outras pessoas
- Ter um histórico de todas as alterações no GitHub
- Reverter para versões anteriores se necessário
