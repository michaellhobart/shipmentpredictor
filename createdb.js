const Sequelize = require('sequelize');

const sequelize = new Sequelize('mpc', 'michaellhobart', 'olaaqies99', {
  host: 'mlhdb.cx2dztx373n0.us-east-1.rds.amazonaws.com',
  dialect: 'postgres'
});

const Client = require('./Models/Client')
const Design = require('./Models/Design')
const Event = require('./Models/Event')
const Shipment = require('./Models/Shipment')

Client.sync({force: true})
.then(() => Design.sync({force: true}))
.then(() => Event.sync({force:true}))
.then(() => Shipment.sync({force:true}))
.then(() => {
  return Client.create({
    name: 'Sanshee',
    email: 'arty@sanshee.com',
    phone: '777-777-7777'
  });
})
.then( data => {
  return Design.create({
      title: "Team Rocket",
      clientId: data.dataValues.id
  })
})
