import { Mongoose } from "mongoose";

var passwordHash = require('password-hash');
const Schema = Mongoose.Schema;

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
    this.password = await passwordHash.isHashed(this.password);
});

module.exports = Mongoose.model('User', UserSchema);