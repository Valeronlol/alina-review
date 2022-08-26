const { User } = require('../services/db');

exports.createNewUser = async (ctx) => {
    ctx.body = await User.create(ctx.request.body);
}

exports.findUserByLogin = async (ctx) => {
    const user = await User.findOne({
        where: { email: ctx.request.body.email },
        select: {
            passwordHash: true,
            id: true,
            name: true
        }
     });
     ctx.body = { user };
  }