const Sequelize = require ('sequelize')
const config = require('config')

const instanciaBD = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    { 
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)

module.exports = instanciaBD