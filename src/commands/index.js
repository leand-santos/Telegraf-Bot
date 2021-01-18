const start = require('./start')
const help = require('./help')
const newList = require('./lists/newList')
const lists = require('./lists/lists')
const list = require('./lists/list')
const deleteList = require('./lists/deleteList')
const insertItem = require('./lists/insertItem')
const deleteItems = require('./lists/deleteItems')
const messages = require('./messages')
const dice = require('./dice')

module.exports = {
    start,
    help,
    newList,
    lists,
    list,
    deleteList,
    insertItem,
    deleteItems,
    messages,
    dice
}