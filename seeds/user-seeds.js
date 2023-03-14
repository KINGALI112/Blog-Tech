const { User } = require('../models');

const userData = [
  {
    username: 'Jhon Snow',
    password: 'test1'

  },
  {
    username: 'Syed',
    password: 'test2'
  },
  {
    username: 'Mike',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;