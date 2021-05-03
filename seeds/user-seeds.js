const { User } = require('../models');

const userData = [{
        username: 'Tim',
        password: 'thom37'},
    {
        username: 'Lucy',
        password: 'sprinkles243'},
    {
        username: 'Emili',
        password: 'bratpack2'}
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;