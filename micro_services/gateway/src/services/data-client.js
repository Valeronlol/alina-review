const { got } = require('got-cjs');

exports.createNewUser = (json) => {
    return got.post('http://localhost:4000/reg', { json }).json();
}

exports.findUserByLogin = (email) => {
    return got.post('http://localhost:4000/login', { json: { email } })
        .json()
        .then(data => data ? data.user : null);
}

exports.createNewMessage = (json) => {
    return got.post('http://localhost:4000/chat', { json }).json();
}