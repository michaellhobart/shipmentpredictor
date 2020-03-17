const Sequelize = require('sequelize');
const sequelize = require('../sequelize-config')

const Client = require('./Client')
const Event = require('./Event')


const Model = Sequelize.Model;
class Shipment extends Model {}
Shipment.init({
  // attributes
  landDate: {
    type: Sequelize.DATEONLY,
  },
  shippedDate: {
    type: Sequelize.DATEONLY
    // allowNull defaults to true
  },
  address1: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  address2: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  city: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  state: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  zip: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
}, {
  sequelize,
  modelName: 'shipment'
  // options
});

Shipment.belongsTo(Event)


module.exports = Shipment
