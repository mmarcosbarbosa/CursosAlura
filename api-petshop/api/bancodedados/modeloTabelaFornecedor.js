const Sequelize = require ('Sequelize')
const instanciaDB = require ('./conexao')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timeStamps: true,         // Quando timeStamps = true, os campos abaixo são criados em ingles
    createdAt: 'dataCriacao', 
    updatedAt: 'dataAtualizacao',
    version:  'versao'
}

module.exports = instanciaDB.define('fornecedor', colunas, opcoes)