const { createPasswordHash } = require('../utils/hashing');
const { createJwtTokenAsync } = require('../services/jwt');
const { AppError } = require('../utils/app-errors');
const { findUserByLogin, createNewUser } = require('../services/data-client');

exports.addNewUser = async (req, res) => {
    const { email, password, name } = req.body;
    const passwordHash = await createPasswordHash(password);
    const { passwordHash: _, ...newUser } = await createNewUser({
        email,
        passwordHash,
        name
    });
    res.send(newUser);
}

exports.loginUser = async (req, res) => {
   const { email, password } = req.body;
    const user = await findUserByLogin(email);
    if (!user) {
        throw new AppError({ message: 'User not found', code: 404 });
    }
    const passwordHash = await createPasswordHash(password);
    if (!user || user.passwordHash !== passwordHash) {
        throw new AppError({ message: 'Authorized error', code: 401 });
    }
    const token = await createJwtTokenAsync({
        sub: user.id,
        iat: Math.floor(Date.now() / 1000),
    });
    res.send({ token });
}