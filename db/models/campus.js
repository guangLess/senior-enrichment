//FIXME: clean out Sequlize

const Sequelize = require('sequelize')
const db = require('../index') // or just './'

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: { type: Sequelize.STRING }
})

module.exports = Campus
