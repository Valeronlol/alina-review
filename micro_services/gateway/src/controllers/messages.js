const { getMessagesList } = require('../services/data-client');

exports.getMessages = async (req, res) => {
    const messagesList = await getMessagesList();
    res.send(messagesList);
}