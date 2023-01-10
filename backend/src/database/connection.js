const knex = require('knex');
const configuration = require('../../knexfile');

const connecttion = knex(configuration.development);

module.exports = connecttion;
