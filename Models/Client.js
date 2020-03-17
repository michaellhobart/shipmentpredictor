const Sequelize = require('sequelize');
const sequelize = require('../sequelize-config')

const Design = require('./Design')
const Shipment = require('./Shipment')


const Model = Sequelize.Model;
class Client extends Model {}
Client.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  phone: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'client'
  // options
});

Client.hasMany(Design);
Client.hasMany(Shipment);

module.exports = Client
