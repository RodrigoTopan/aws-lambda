'use strict';

//serverless invoke local -f heroes-list-rodrigo
const { MongoClient } = require('mongodb');

const hello = async (event, context) => {
  try {
    const connection = await MongoClient.connect(
      'mongodb://root:root123@ds131932.mlab.com:31932/heroes',
    );
    const collection = connection.db('heroes').collection('heroes');
    const result = await collection.find().toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Erro interno do servidor',
        input: event,
      }),
    };
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports = { hello };
