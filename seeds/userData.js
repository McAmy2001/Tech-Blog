const { User } =require('../models');

const userData = [
  {
    username: 'User1',
    email: 'user1@yahoo.com',
    password: 'user1pw'
  },
  {
    username: 'User2',
    email: 'user2@yahoo.com',
    password: 'user2pw'
  },
  {
    username: 'User3',
    email: 'user3@yahoo.com',
    password: 'user3pw'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;