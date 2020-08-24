// server.js
'use strict'
const fastify = require('fastify');

module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
    console.log("HI, I am your server");
  })
}