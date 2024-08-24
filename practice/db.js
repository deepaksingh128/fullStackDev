const mongoose = require('mongoose');


const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@cluster0.makubps.mongodb.net/practiceDB`);

const UserSchema = mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}