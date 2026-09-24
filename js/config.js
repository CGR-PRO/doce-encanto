
/* =====================================================================
   CONFIG — EDITE AQUI.
   Todas as informações da confeitaria ficam neste objeto:
   nome, cores, contatos, horários, produtos, preços e imagens.

   Imagens: cada item aceita "image" como:
     • um objeto de ilustração  →  { art: 'cake', ...opções }
     • uma foto                 →  'https://seusite.com/fotos/bolo.jpg'
       (ou 'fotos/bolo.jpg' quando o site for hospedado junto das fotos)
   ===================================================================== */
const CONFIG = {
  brand: {
    name: 'DOCE ENCANTO',          // exibido no logo
    nameTitle: 'Doce Encanto',     // usado em textos e na mensagem
    tagline: 'Confeitaria artesanal',
    city: 'São Paulo'
  },
  theme: {
    // Deixe vazio para usar a paleta padrão. Ex.: rose: '#A8656B'
    colors: { /* bg:'#FAF4EC', ink:'#3A241D', rose:'#A8656B', gold:'#BE9A5B' */ }
  },
  whatsapp: '5511960286476',       // DDI + DDD + número, só dígitos
  phoneDisplay: '(11) 99999-9999',
  instagram: { user: '@doceencanto', url: 'https://instagram.com/doceencanto' },
  address: {
    street: 'Rua das Flores, 123',
    cityLine: 'São Paulo — SP',
    mapsQuery: 'Rua das Flores, 123, São Paulo - SP'
  },
  hours: [
    { label: 'Segunda a sexta', days: [1,2,3,4,5], open: '09:00', close: '19:00' },
    { label: 'Sábado',          days: [6],         open: '09:00', close: '18:00' },
    { label: 'Domingo',         days: [0],         open: null,    close: null }
  ],
  currency: 'BRL',
  customCakeAdvanceDays: 2,        // antecedência mínima para bolo personalizado

  nav: [
    ['Início', '#inicio'], ['Cardápio', '#cardapio'], ['Monte seu bolo', '#monte'],
    ['Kits', '#kits'], ['Sobre', '#sobre'], ['Contato', '#contato']
  ],

  categories: [
    { title: 'Aniversários', text: 'Bolos e doces para comemorar.', target: '#cardapio',
      image: { art: 'cake', bg: '#EDE1D4', table: '#E1D0BF', frost: '#F5E7DA', drip: '#6B3A2A', deco: ['candles','sprinkles'], stand: false } },
    { title: 'Presentes', text: 'Kits preparados para surpreender.', target: '#kits',
      image: { art: 'kitRomantico', bg: '#E9DBCC', table: '#DCC8B4' } },
    { title: 'Casamentos & Eventos', text: 'Doces finos e bolos personalizados.', target: '#monte',
      image: { art: 'tiered', bg: '#E9E2D8', table: '#DDD2C3' } },
    { title: 'Café da tarde', text: 'Bolos, brownies e sobremesas artesanais.', target: '#cardapio',
      image: { art: 'kitCafe', bg: '#E4D8C6', table: '#D6C4AA' } }
  ],

  products: [
    { id: 'bolo-chocolate', name: 'Bolo de Chocolate', price: 89.90, tag: 'Mais pedido',
      description: 'Massa de chocolate, brigadeiro cremoso e cobertura artesanal.',
      image: { art: 'cake', bg: '#E9D9C8', table: '#DDC7AF', frost: '#4A2A1E', top: '#4A2A1E', drip: '#3A2016', deco: ['brigadeiros'] } },
    { id: 'red-velvet', name: 'Red Velvet', price: 109.90,
      description: 'Massa red velvet, creme de cream cheese e frutas vermelhas.',
      image: { art: 'cake', bg: '#EADCCF', table: '#DDC9B8', bands: [['#F6EEE3',6],['#9B2A34',24,'crumb'],['#F6EEE3',9],['#9B2A34',24,'crumb'],['#F6EEE3',9],['#9B2A34',24,'crumb']], semi: true, top: '#F7EFE4', deco: ['berries'] } },
    { id: 'ninho-morango', name: 'Bolo de Ninho com Morango', price: 99.90,
      description: 'Massa branca, creme de Ninho e morangos frescos.',
      image: { art: 'cake', bg: '#EFE5D9', table: '#E3D3C3', frost: '#FBF4EA', top: '#FBF4EA', deco: ['piped','strawberries'] } },
    { id: 'bento-cake', name: 'Bento Cake', price: 49.90, tag: 'Para presentear',
      description: 'Mini bolo personalizado para momentos especiais.',
      image: { art: 'bento', bg: '#E9DCCF', table: '#DCCAB6', frost: '#F1D2CE' } },
    { id: 'brigadeiros', name: 'Caixa de Brigadeiros', price: 42.90,
      description: '12 brigadeiros artesanais variados.',
      image: { art: 'brigadeiros', bg: '#E6D4C1' } },
    { id: 'brownie', name: 'Brownie Especial', price: 29.90,
      description: 'Brownie artesanal com chocolate e cobertura cremosa.',
      image: { art: 'brownie', bg: '#E8D8C5', table: '#DAC4AA' } }
  ],

  kits: [
    { id: 'kit-cafe', name: 'Kit Café da Tarde', price: 79.90,
      description: 'Brownies, brigadeiros e uma fatia de bolo do dia, com cartão.',
      image: { art: 'kitCafe', bg: '#DCCDB9', table: '#CDB99E' } },
    { id: 'kit-parabens', name: 'Kit Parabéns', price: 94.90,
      description: 'Bento cake com vela, 4 brigadeiros e caixa com laço.',
      image: { art: 'kitParabens', bg: '#E8DACB', table: '#DAC6B2' } },
    { id: 'kit-romantico', name: 'Kit Romântico', price: 119.90,
      description: 'Caixa com 9 brigadeiros finos, brownie e rosa desidratada.',
      image: { art: 'kitRomantico', bg: '#E5D3C6', table: '#D6BFAE' } },
    { id: 'caixa-premium', name: 'Caixa Premium', price: 159.90,
      description: 'Seleção de doces finos com acabamento dourado e cartão escrito à mão.',
      image: { art: 'premium', bg: '#2F221D', table: '#3B2B24' } }
  ],

  // Monte seu bolo: preços em reais. "add" soma ao valor base do tamanho.
  builder: {
    sizes:   [ { id: '10', label: '10 fatias', sub: 'serve até 10 pessoas', price: 120, r: 84, h: 78 },
               { id: '15', label: '15 fatias', sub: 'serve até 15 pessoas', price: 165, r: 94, h: 84 },
               { id: '20', label: '20 fatias', sub: 'serve até 20 pessoas', price: 210, r: 104, h: 90 },
               { id: '30', label: '30 fatias', sub: 'serve até 30 pessoas', price: 290, r: 116, h: 100 } ],
    doughs:  [ { id: 'chocolate', label: 'Chocolate', color: '#5A3526', add: 0 },
               { id: 'baunilha',  label: 'Baunilha',  color: '#EFD7A6', add: 0 },
               { id: 'redvelvet', label: 'Red Velvet', color: '#9B2A34', add: 15 },
               { id: 'cenoura',   label: 'Cenoura',   color: '#DE9B55', add: 0 } ],
    fillings:[ { id: 'brigadeiro', label: 'Brigadeiro', color: '#4A2A1E', add: 0 },
               { id: 'ninho',      label: 'Ninho',      color: '#FBF3E4', add: 0 },
               { id: 'doce-leite', label: 'Doce de leite', color: '#C98A4B', add: 0 },
               { id: 'ninho-morango', label: 'Ninho com morango', color: '#F5D3D2', add: 20, tex: 'berry' },
               { id: 'chocolate',  label: 'Chocolate',  color: '#35201A', add: 0 } ],
    decors:  [ { id: 'classica',  label: 'Clássica',  sub: 'bicos de confeitar', add: 0,  deco: ['piped'] },
               { id: 'elegante',  label: 'Elegante',  sub: 'folha de ouro e pérolas', add: 35, deco: ['gold','pearls'] },
               { id: 'flores',    label: 'Flores',    sub: 'flores comestíveis', add: 55, deco: ['flowers'] },
               { id: 'personalizada', label: 'Personalizada', sub: 'topo e tema', add: 80, deco: ['piped','topper'] },
               { id: 'ideia',     label: 'Tenho uma ideia diferente', sub: 'valor sob consulta', add: 80, deco: ['sparkles'], idea: true } ]
  },

  gallery: [
    { caption: 'Brigadeiros gourmet', h: 1, image: { art: 'brigadeiros', bg: '#DCC7B2', seed: 11 } },
    { caption: 'Detalhe das flores de açúcar', h: 1, image: { art: 'roses', bg: '#EBDFD2' } },
    { caption: 'Bolo com frutas vermelhas', h: 1, image: { art: 'cake', bg: '#E9DCCF', table: '#DAC7B5', frost: '#F8F0E6', top: '#F8F0E6', drip: '#8E2835', deco: ['berries'] } },
    { caption: 'Brownie com cobertura cremosa', h: 1.2, image: { art: 'brownie', bg: '#E1CDB6', table: '#D1B99C' } },
    { caption: 'Cupcakes do dia', h: 0.85, image: { art: 'cupcakes', bg: '#EADDD0', table: '#DCC9B8' } },
    { caption: 'Bento cake', h: 0.9, image: { art: 'bento', bg: '#E2D4C4', table: '#D3C0AA', frost: '#E9D9B8' } },
    { caption: 'Bolo de casamento com flores', h: 1.3, image: { art: 'tiered', bg: '#E6DED3', table: '#D9CDBD' } },
    { caption: 'Caixa de presente', h: 1.25, image: { art: 'premium', bg: '#32241E', table: '#3E2D25' } }
  ],

  about: {
    text: 'Na Doce Encanto, acreditamos que cada celebração merece um sabor especial. Por isso, cada receita é preparada artesanalmente, com ingredientes selecionados e atenção aos pequenos detalhes.',
    text2: 'Começamos na cozinha de casa, fazendo bolos para amigos. Hoje são centenas de festas por ano, e o cuidado continua o mesmo: nada sai daqui sem ser provado antes.',
    sign: 'Helena, confeiteira e fundadora',
    image: { art: 'cake', bg: '#E8DCCD', table: '#DACBB7', frost: '#F3E6D6', top: '#F3E6D6', deco: ['flowers'] },
    image2: { art: 'cupcakes', bg: '#EADCCE', table: '#DCC8B5', single: true }
  },
  stats: [
    { value: 5,    prefix: '+', label: 'anos de experiência' },
    { value: 2000, prefix: '+', label: 'pedidos realizados' },
    { value: 4.9,  prefix: '+', decimals: 1, label: 'avaliação dos clientes' }
  ],
  testimonials: [
    { text: 'Tudo estava maravilhoso. O bolo ficou exatamente como eu imaginava.', name: 'Mariana', note: 'Aniversário de 30 anos', stars: 5 },
    { text: 'Os doces fizeram o maior sucesso na festa. Com certeza vou pedir novamente.', name: 'Ana', note: 'Chá de bebê', stars: 5 },
    { text: 'Além de lindo, estava delicioso.', name: 'Lucas', note: 'Bolo personalizado', stars: 5 }
  ],
  howItWorks: [
    { title: 'Escolha seus doces', text: 'Veja o cardápio, os kits ou monte um bolo do seu jeito.' },
    { title: 'Monte seu pedido', text: 'Ajuste quantidades e informe data e forma de recebimento.' },
    { title: 'Envie pelo WhatsApp', text: 'A mensagem sai pronta. Confirmamos tudo com você por lá.' },
    { title: 'Retire ou receba', text: 'Na data combinada, retire na loja ou receba em casa.' }
  ],
  paymentMethods: ['Dinheiro', 'Pix na entrega/retirada', 'Cartão na entrega/retirada']
};

