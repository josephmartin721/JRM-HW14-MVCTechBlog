const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Awesome work! Great job!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I like to comment placeholder text.",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "I can't believe they only comment placeholder text.",
        user_id: 3,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;