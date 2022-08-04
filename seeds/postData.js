const { Post } = require('../models');

const postData = [
  {
    title: 'Handlebars make life easier.',
    user_id: 1,
    blog_text: 'Let me tell you why...'
  },
  {
    title: 'Jane Austen is awesome.',
    user_id: 2,
    blog_text: 'You may think this is not a very tech-y post subject. And you would be right. But it bears saying nonetheless.'
  },
  {
    title: 'Here I go again.',
    user_id: 3,
    blog_text: 'On my own. Going down the only road I\'ve ever known.'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;