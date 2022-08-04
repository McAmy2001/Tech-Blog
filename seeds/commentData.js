const { Comment } =require('../models');

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment_text: 'I also enjoy Handlebars.'
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: 'She\'s very witty and observant.'
  },
  {
    user_id: 1,
    post_id: 3,
    comment_text: 'Like a drifter I was born to walk alone.'
  },
  {
    user_id: 1,
    post_id: 2,
    comment_text: 'I read her novels every year.'
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;