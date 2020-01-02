const usermodel = require('../models/users');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    usermodel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
        function (err, result) {
            if (err) err;
            else {
                res.json({ status: "success", message: "user added successfully!!", data: null })
            }
        })
}

exports.getAllUser = async (req, res) => {
    var result = await usermodel.find().exec();
    res.send(result);
}

exports.authenticate = async (req, res) => {
    await usermodel.findOne({ email: req.body.email }, async function (err, userInfo) {
        if (err) {
            await err;
        } else {
            if (passwordHash.verify(req.body.password, userInfo.password)) {
                const token = jwt.sign({
                    id: userInfo._id
                }, 'secret', { expiresIn: '1h' });
                res.json({ status: "success", message: "user found!!!", data: { user: userInfo, token: token } });
            } else {
                res.json({ status: "error", message: "Invalid email/password!!!", data: null });
            }
        }
    })
}

exports.remove = async (req, res) => {
    //res.send("hello");
    var result = await usermodel.deleteMany();
    res.send(result);
}

exports.user = (req, res) => {

}

