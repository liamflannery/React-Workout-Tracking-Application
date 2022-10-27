const { getDatabase } = require('./mongo');
const User = require('./models/users')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
var jwt = require('jsonwebtoken');

async function insertUser(req, res) {

    const username = req.body.username
    const password = req.body.password
    const hashedPassword = bcrypt.hashSync(password, salt)

    // Create a Tutorial
    const user = new User({
        userName: username,
        password: hashedPassword
    });

    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: "Invalid request"
            });
        });
}

async function getUser(req, res) {
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({ userName: username })

    //if user id match param id send jwt token else throw error
    if (user) {
        bcrypt.compare(password, user.password, function(err, result) {
            if (result) {
                let u = {
                    id: user.id,
                    username: user.userName
                }
                token = jwt.sign(u, process.env.JWT_SECRET, {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours
                 });
                return res.send({
                    token: token
                })
            } else {
                res.status(401).send({
                    message: "Invalid request"
                });
            }
        });
    } else {
        res.status(404).json({ message: "User not found" })
        res.status(404)
        throw new Error('User not found')
    }
}

async function getUserDetail(req, res) {
    const userId = req.params.id

    const user = await User.findById(userId)

    //if user id match param id send jwt token else throw error
    if (user) {
        res.send(user)
    } else {
        res.status(404).json({ message: "User not found" })
        res.status(404)
        throw new Error('User not found')
    }
}

module.exports = {
    insertUser,
    getUser,
    getUserDetail
};