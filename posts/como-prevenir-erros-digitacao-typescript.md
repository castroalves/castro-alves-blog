---
title: "Como previnir erros de digitação (ou tipagem) no TypeScript"
date: "2020-12-11"
language: "pt"
---

Quantas vezes você já perdeu HORAS tentando entender um bug e no final descobriu que foi um simples erro de digitação?

Isso aconteceu comigo e com um colega de trabalho essa semana.

E o pior: a clássica confusão entre usar uma variável `camelCase` e `snake_case`.

**Atenção**: por questões de privacidade e segurança, todas os exemplos contidos nesse artigo são fictícios e não refletem o sistema da nextbike.

## Entendendo o problema

Nas últimas semanas, estive trabalhando em uma nova integração do sistema de pagamento da [nextbike](https://nextbike.com) com a [Stripe](https://stripe.com).

Numa etapa da integração, eu precisava enviar alguns dados de nosso backend para a API da Stripe.

De forma bem resumida, o processo é o seguinte:

1. Cliente faz um pagamento em nosso site ou app
2. Stripe processa a transação
3. Stripe envia pra gente uma notificação com informações sobre a transação (se foi aprovada, rejeitada etc)
4. Sistema de pagamento da nextbike processa esses dados e envia pro backend (sim, são 2 aplicações separadas)

Para criar o pagamento na Stripe, usamos o seguinte código:

```js
const setupIntent = await stripe.setupIntents.create({
  customer_id: "cus_123456abcdef",
  metadata: {
    customerAge: 25,
    customer_company: "XPTO Ltda",
    customer_position: "Web Developer",
  },
});
```

Já no último passo, quando recebemos a notificação da Stripe no sistema de pagamento da nextbike, nós processamos os dados assim:

```js
const age: number = notificationData["metadata"]["customer_age"];
const company: string = notificationData["metadata"]["customer_company"];
const position: string = notificationData["metadata"]["customer_position"];
```

### Só de bater o olho, você conseguiu identificar o problema?

Estamos enviando a variável `data['metadata']['customerAge']` (camelCase), mas quando recebemos a notificação, tentamos recuperar o valor com `notificationData['metadata']['customer_age']` (snake_case).

Por mais óbvio que possa parecer, eu te digo que éramos 2 programadores investigando o problema e demoramos um bocado de tempo para detectar isso!

Aliás, o problema foi justamente porque um de nós costuma usar `camelCase`, enquanto outro está mais acostumado com `snake_case`!

Não existe um culpado. Na pressão do dia-a-dia, e com o tanto de trabalho que temos, é super normal isso passar batido numa revisão de código.

Mas, claro, poderia ter sido evitado.

## Como prevenir esse erro no TypeScript?

Dentre todos os recursos de tipagem que o TypeScript oferece, existem as [Type Aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases) e as [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html).

Se você tiver um conjunto de dados, como um array ou objeto, no qual você sabe exatamente os tipos de dados que serão enviados, o ideal é que você crie um **Type Alias** ou uma **Interface** pra ele.

Isso não apenas garante que todos os dados sejam enviados corretamente, como a própria IDE também te mostra quais são esses dados, enquanto você escreve o código.

Seguindo com nosso exemplo, usando **Type Alias** o código ficaria assim:

```js
type CreateSetupIntentType = {
  customer_id: string,
  metadata: {
    customer_age: number,
    customer_company: string,
    customer_position: string,
  },
};
```

Ou assim, usando **Interface**:

```js

interface CreateSetupIntentInterface = {
    customer_id: string,
    metadata: {
        customer_age: number,
        customer_company: string,
        customer_position: string
    }
};
```

O próximo passo é declarar a variável que vai receber esses dados, passando pra ela o tipo de dado (ou interface) esperado.

Então, seria assim:

```js
const createData: CreateSetupIntentType = {
  // ou const createData: CreateSetupIntentInterface
  customer_id: "cus_123456abcdef",
  metadata: {
    customer_age: 25,
    customer_company: "XPTO Ltda",
    customer_position: "Web Developer",
  },
};
const setupIntent = await stripe.setupIntents.create(createData);
```

Só um detalhe aqui: embora pareça, [**Type Alias** e **Interface** são diferentes](https://pawelgrzybek.com/typescript-interface-vs-type/). Mas nesse exemplo, podemos usar qualquer um dos dois.

Observe, ainda, que além do nome de cada dado (`customer_id`, `customer_age`, etc), você também pode definir o tipo de dado que deverá ser passado (`number`, `string`, etc).

Isso significa que se você colocar uma `string` onde deve ser `number` (ou vice-versa), sua IDE ou mesmo o compilador do TypeScript já acusariam o erro.

Essa é uma das principais vantagens de programar usando TypeScript!

## Conclusão

O TypeScript é uma tecnologia (linguagem?) muito poderosa. Se você souber como usar seu sistema de tipagem, muitos erros bobos podem ser prevenidos.

Se você já desenvolve em JavaScript, mas ainda não usa TypeScript, eu **super recomendo** que você dedique um tempo para aprendê-lo.

Não é tão complicado quanto parece, é muito mais seguro e produtivo, e te oferece uma série de vantagens que, infelizmente, o JavaScript não te dá.

Mas se você ainda não conhece JavaScript, você também precisará aprendê-lo, talvez até antes de aprender TypeScript. Isso fica a seu critério.

## Gostou?

Compartilhe nas suas redes sociais, em grupos de desenvolvimento ou mesmo com seus colegas de trabalho!
