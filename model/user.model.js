const mongo = require("mongoose");
const {Schema} = mongo;
const userSchema = new Schema({
    name:String,
    username: String,
    mobile : Number,
    password: String,
    isLogged: Boolean
});
module.exports = {
    user: mongo.model("User",userSchema)
}