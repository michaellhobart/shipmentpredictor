const Sequelize = require('sequelize');
const sequelize = require('../sequelize-config')

const Shipment = require('./Shipment')


const Model = Sequelize.Model;
class Event extends Model {}
Event.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  eventDate: {
    type: Sequelize.DATEONLY
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
  market: {
    type: Sequelize.ENUM('a','b','c')
    // allowNull defaults to true
  },
}, {
  sequelize,
  modelName: 'event'
  // options
});

// Event.hasMany(Shipment)

module.exports = Event
