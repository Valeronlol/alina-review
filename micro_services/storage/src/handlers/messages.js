const { Message } = require('../services/db');

exports.createNewMessage = async (ctx) => {
    ctx.body = await Message.create(ctx.request.body);
}