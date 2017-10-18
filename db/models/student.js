const Sequelize = require('sequelize')
const db = require('../index') // or just './'

const Student = db.define('student', {
    name: { type: Sequelize.STRING },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

module.exports = Student
