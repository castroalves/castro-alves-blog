---
title: "Usando datas no Postman"
date: "2020-01-01"
---

Esses dias, precisei testar uma API de pagamento no Postman para desenvolver uma integração na [nextbike](https://nextbike.com).

Um dos valores obrigatórios é a data da transação no formato `2020-07-30 12:00:00`.

No Postman, você pode manipular os dados da requisição na aba Pre-request Script, escrevendo código JavaScript.

Pra resolver esse problema, eu precisava:

1. Gerar a data dinamicamente, em cada requisição;
2. Atribuir esse valor a uma variável no Postman;
3. Passar o valor da variável na requisição.

No Postman, isso é super simples.

## Passo 1: Gerar a data dinamicamente, em cada requisição

Você deve adicionar os códigos na aba Pre-request Script. Você tem duas opções:

JavaScript Puro

```
var dt = new Date();
var isoDate = dt.toISOString();
var date = isoDate.substring(0, 10);
var time = isoDate.substring(date.length + 1, date.length + 9);
var orderDate = `${date} ${time}`;
pm.environment.set('ORDER_DATE', orderDate);
```

Mas se você usa o aplicativo do Postman no Windows, macOS ou Linux, você pode importar algumas bibliotecas JS e do próprio NodeJS usando o método [require](https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/#require).

Então, eu usei a biblioteca [moment](http://momentjs.com/docs/) e substitui o código anterior por esse:

```
var moment = require('moment');
var orderDate = moment().format('YYYY-MM-DD hh:mm:ss');

```

Muito mais simples, né?

## Passo 2: Atribuir esse valor a uma variável no Postman

Pra criar valores dinamicamente, basta usar o método pm.environment.set('NOME_DA_VARIAVAL', 'Valor').

Então, no meu caso, eu adionei a linha abaixo na aba Pre-request Script:

```
pm.environment.set('ORDER_DATE', orderDate);
```

## Passo 3: Passar o valor da variável na requisição.

No Postman, você pode enviar dados via GET, POST e outros métodos HTTP. No meu caso, eu preciso simular uma requisição POST enviada por um formulário. Na aba Body, eu selecionei a opção form-data. Em seguida, criei a variável chamada ORDER_DATE (conforme descrito na documentação da API).

Para resgatar o valor de uma variável dinâmica no Postman, é só usar o formato {{NOME_DA_VARIAVEL}}. Então eu preenchi o campo valor com {{ORDER_DATE}}.

Pronto!
