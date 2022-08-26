const { got } = require('got-cjs');

exports.createNewUser = (json) => {
    return got.post('http://localhost:4000/reg', { json }).json();
}

exports.findUserByLogin = async (email) => {
    return await got.post('http://localhost:4000/login', { json: { email } })
        .json()
        .then(data => data ? data.user : null);
}

exports.createNewReview = (json) => {
    return got.post('http://localhost:4000/upload', { json }).json();
}

/*exports.fetchReviews = async () => {
    return await got.get('http://localhost:4000/reviews', { }).json().then(data => data ? data.review : null);
}*/

exports.createNewMessage = (json) => {
    return got.post('http://localhost:4000/chat', { json }).json();
}