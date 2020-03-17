const Sequelize = require('sequelize');
const sequelize = require('../sequelize-config')

const Client = require('./Client')


const Model = Sequelize.Model;
class Design extends Model {}
Design.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'design'
  // options
})

module.exports = Design
