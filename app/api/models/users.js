const mongoose = require('mongoose');
var passwordHash = require('password-hash');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
})

UserSchema.pre('save', async function () {
    this.password = await passwordHash.generate(this.password);
    console.log(this.password)
});


module.exports = mongoose.model('User', UserSchema);