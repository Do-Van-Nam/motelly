const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const VendorItem = new Schema({
    accId : {type: String},
    name : { type : String, },
    type : { type : String, },
    description : { type : String, },
    subInfo : { type : String, },
    priceFrom : {type: Number},
    priceTo : {type: Number},
    
})

module.exports = mongoose.model('VendorItem' , VendorItem)