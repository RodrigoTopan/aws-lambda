'use strict';

//instalamos o MONGODB
// npm i --save mongodb
// criamos uma conta na MLAB criamos uma database e um usuário
// para invocar nossa função localmente
// serverless invoke local -f heroes-create-rodrigo --data '{"body": {"nome": "Flash", "poder":"Velocidade"}}'
const { MongoClient } = require('mongodb');

const hello = async (event, context) => {
  try {
    console.log('EVENT***', event);
    const connection = await MongoClient.connect(
      'mongodb://root:root123@ds131932.mlab.com:31932/heroes',
    );
    const collection = connection.db('heroes').collection('heroes');
    //const { dados } = event.body;
    const { nome, poder } = JSON.parse(event.body);
    const result = collection.insert({ nome, poder, dataInsercao: new Date() });
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro interno do servidor',
        input: event,
      }),
    };
  }
};

//Movemos o module exports para baixo
// module.exports.hello = function()
// deixamos de uma form mais bonita
module.exports = { hello };
