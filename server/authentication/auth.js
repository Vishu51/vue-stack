var express = require('express');
const authApi = express.Router();
const bodyParser = require('body-parser')

authApi.use(bodyParser.json());

const users = [
    {
      id: 1,
      username: 'user1',
      password: 'password1'
    },
    {
      id: 2,
      username: 'user2',
      password: 'password2'
    }
  ];

authApi.post('/login', (req, res) => {
    res.json('3333333333333333333333333')
    console.log('running');
    const {username, password} = req.body;

    const user = users.find((el) => el.username === username && el.password === password);

    if (user) {
        res.send({message: 'Login Successful'});
    } else {
        res.status(401).send({message: 'Invalid Login'})
    }
})

module.exports = authApi
