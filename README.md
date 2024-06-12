# 🚀 Front end challenge

Este é um projeto de fonted test forked de https://github.com/Rocketseat/frontend-challenge

# 🧠 Contexto

![Protótipo](https://storage.googleapis.com/xesque-dev/challenge-images/prototipo.png?42)

O desafio será implementar um e-commerce para venda de canecas e camisetas que deverá ter as seguintes funcionalidades:

- [X] Catálogo de produtos com paginação
- [X] Filtragem produtos por categoria
- [X] Busca por nome do produto
- [X] Adicionar e remover produtos do carrinho
- [ ] Finalizar compra

## 📋 Instruções

Chegou a hora de colocar a mão na massa!

- Siga [esse protótipo](https://www.figma.com/file/rET9F2CeUEJdiVN7JRu993/E-commerce---capputeeno?node-id=680%3A6449) √
- Utilize Next.js e Typescript √
- Faça a estilização com styled-components √
- Utilize o local storage para gerenciar o carrinho
- Por favor, inclua no README as instruções de instalação do projeto √
- Sinta-se livre para incluir quaisquer observações
- Consuma nossa **API GraphQL** rodando o comando `yarn start` na pasta `api` √

## ✔️ Critérios de Avaliação

Além dos requisitos levantados acima, iremos olhar para os seguintes critérios durante a correção do desafio:

- Gerenciamento de estado √
- Componentização √
- Responsividade √
- Preocupação com usabilidade
- Preocupação com acessibilidade
- Testes e2e
- Padrões de código √
- Padrão de commits (_Conventional_) √

## 😎 Seria legal

- Fazer deploy na vercel ou em outro local de sua preferência e disponibilizar um link de visualização, se necessário utilize esse servidor para a API GraphQL:  https://rocketseat-frontend-challenge.herokuapp.com/
- Testes unitários
- Utilização de cache do Next.js

---

### Instalação

Para instalar o projeto é necessário o NodeJs, projeto desenvolvido na versão 20.10.0 LTS

```sh {"id":"01HZPE89G0RV70WJS4H8QG10T0"}
npm install
npm run dev
```

O aplicativo irá subir automaticamente a aplicação na porta 3000 

para pagamentos utilizar os seguintes cartões:

4242 4242 4242 4242 Succeeds and immediately processes the payment.

4000 0000 0000 3220 Requires 3D Secure 2 authentication for a successful payment.

4000 0000 0000 9995 Always fails with a decline code of insufficient_funds.

Deploy realizado na Vercel: https://frontend-challenge-5tzjnes2b-arnoldosilvas-projects.vercel.app/
