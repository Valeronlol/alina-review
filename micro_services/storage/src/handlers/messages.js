const { Message } = require('../services/db');

exports.createNewMessage = async (ctx) => {
    ctx.body = await Message.create(ctx.request.body);
}

exports.getMessages = async (ctx) => {
    const messages = await Message.findAll();
    ctx.body = { messages };
}