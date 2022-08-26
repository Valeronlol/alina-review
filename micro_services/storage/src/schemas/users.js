exports.createUser = {
    type: 'object',
    properties: {
        passwordHash: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
    },
    required: ['passwordHash', 'email', 'name'],
    additionalProperties: true,
}

exports.loginUser = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
        },
    },
    required: ['email'],
    additionalProperties: true,
}