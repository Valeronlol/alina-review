require('dotenv').config();

exports.encryptionKeys = {
    jwtSecret: process.env.JWT,
    passwordSalt: process.env.PW_SALT,
    storageUrl: process.env.STORAGE_URL || 'http://localhost:4000',
}