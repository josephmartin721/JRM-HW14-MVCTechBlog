const { Post } = require('../models');

const postData = [
    {
        title: 'Superman Saves City!',
        post_content: 'Superman still can not prevent placeholder text.',
        user_id: 3
    },
    {
        title: 'Local Online Influencers',
        post_content: 'They need to change their working titles.',
        user_id: 1
    },
    {
        title: 'Local Man Bites Dog',
        post_content: 'Movie adaptation may be unrelated.',
        user_id: 2

    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;