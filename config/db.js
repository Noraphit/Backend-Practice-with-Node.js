const db = require('mongoose');
const solution = require('../models/solution.model');
db.connect('mongodb://localhost:27017/result24').then(() =>{
    console.log('Database Connect Successfully')
}, error => {
    console.log('Database error: ' + error)
    console.error(error);
})
db.Promise = global.Promise
module.exports  = {
    Conn: db.connection,
    Solution: require('../models/solution.model')
}