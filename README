# Doce Encanto — site da confeitaria

Site estático (HTML, CSS e JavaScript puro). Não usa framework, build, banco de dados, login nem pagamento online.
Os pedidos são montados no site e enviados pelo WhatsApp; o pagamento é feito na retirada ou entrega.

## Estrutura

```
doce-encanto/
├── index.html          → página (estrutura e textos fixos)
├── css/
│   └── style.css       → todo o visual (cores, tipografia, animações, responsividade)
├── js/
│   ├── config.js       → CONFIG: dados da confeitaria (EDITE AQUI)
│   └── script.js       → funcionamento: carrinho, Monte seu bolo, checkout, WhatsApp, galeria, menu
├── images/
│   └── favicon.svg     → ícone da aba
├── .gitignore
└── README.md
```

A ordem dos scripts no `index.html` importa: `config.js` é carregado antes de `script.js`.

## Onde editar as informações

Tudo fica em **`js/config.js`**, no objeto `CONFIG`:

- `whatsapp` — número que recebe os pedidos (só dígitos, com DDI e DDD, ex.: `5511960286476`)
- `phoneDisplay` — número como aparece escrito na tela
- `instagram`, `address`, `hours` — contato, endereço e horários
- `products`, `kits` — nomes, descrições, preços e imagens
- `builder` — opções e preços do "Monte seu bolo"
- `customCakeAdvanceDays` — antecedência mínima (em dias) para bolo personalizado
- `gallery`, `testimonials`, `stats`, `about` — conteúdo das seções

### Imagens

As ilustrações dos produtos, kits e galeria são geradas pelo próprio código em `js/script.js` (não há arquivos de foto).
Para usar fotos reais, coloque as fotos na pasta `images/` e troque o campo `image` do item no `CONFIG` pelo caminho da foto:

```js
image: 'images/bolo-de-chocolate.jpg'
```

## Recursos externos

A única dependência externa são as fontes **Bodoni Moda** e **Jost**, carregadas do Google Fonts.
Sem internet, o site funciona normalmente com fontes de sistema parecidas.

## Executar localmente

Opção 1 — abrir direto: dê dois cliques em `index.html`.

Opção 2 — servidor local (recomendado, igual ao ambiente publicado). Na pasta do projeto, rode um dos comandos:

```bash
python3 -m http.server 8000
# ou, com Node.js instalado:
npx serve .
```

Depois acesse `http://localhost:8000` (ou o endereço mostrado pelo `serve`).

## Publicar no GitHub

1. Crie um repositório novo no GitHub (pode ser privado).
2. Envie os arquivos desta pasta para o repositório: pelo site do GitHub ("Add file → Upload files") ou pelo terminal:

```bash
git init
git add .
git commit -m "Site Doce Encanto"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/doce-encanto.git
git push -u origin main
```

O `index.html` precisa ficar na raiz do repositório (não dentro de outra pasta).

## Deploy na Vercel

1. Acesse vercel.com e entre com a conta do GitHub.
2. Clique em **Add New… → Project** e importe o repositório `doce-encanto`.
3. Nas configurações:
   - **Framework Preset:** `Other`
   - **Build Command:** deixe vazio
   - **Output Directory:** deixe vazio (ou `.`)
4. Clique em **Deploy**.

Cada novo `git push` na branch `main` publica a atualização automaticamente.
Para usar um domínio próprio, vá em **Project → Settings → Domains**.
