const usermodel = require('../models/users');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

module.exports = {
    create: async function (req, res) {
        usermodel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
            function (err, result) {
                if (err) await err;
                else {
                    res.json({ status: "success", message: "user added successfully!!", data: null })
                }
            })
    }
}
