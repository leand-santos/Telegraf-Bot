const { Schema, model } = require('mongoose')

const ListSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    items: [{
        title: String
    }]
})

module.exports = model('List', ListSchema)