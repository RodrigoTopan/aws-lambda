#AWS LAMBDA COM SERVERLESS
Fomos no painel da AWS, selecionamos o serviço AWS lambda
Adicionamos uma trigger (API Gateway)
Criamos um evento de teste,clicando no botão teste, e selecionamos o templeta de API Gateway

- Em resources, fomos na API Gateway, ACTIONS, deploy API, pega a url base + o nome da sua função e joga no navegador selecionamos o método ANY

LAMBDA
função handler

API Gateway
Trigger

###Trabalhando com Serverless Framework

-> Instalar o serverless -> npm i -g serverless
-> Para criar um projeto com o seu template
`serverless create --template aws-nodejs --path nomeDaPasta`

`serverless create --template aws-nodejs --path heroes`

- Alteramos o arquivo serverless adicionando o array de events
- Alteramos e adicionamos a rota http /cadastrar
- Por boa prática, geramos o template do nosso serviço, em seguida, fazemos deploy para verificar se as credenciais estão corretas

AWS_KEY=AWS_KEY
AWS_SECRET=MINHA_KEY

```shell
serverless config credentials --provider aws \
--key $AWS_KEY \
--secret $AWS_SECRET
```

- Para fazer deploy de nossas funções existem duas formas

1. `serverless deploy` deploy de todas as funções
2. `serverless deploy -f heroes-create` deploy de uma função
3. `serversss logs -f heroes-create` logs de uma função
   Quando estamos trabalhando na mesma conta, é importante não fazer
   deploy da mesma função ao mesmo tempo
   para casos de estudo, podemos alterar de stage para cada integrante da equipe

Cada pasta dentro de functions é um projeto separado, ou seja, um npm init pra cada
