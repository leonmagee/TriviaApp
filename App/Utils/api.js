/**
 * Get Data from Trivia API
 * @type {{getQuestions: (())}}
 */
const api = {
    getQuestions() {

        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        //const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        //const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=base64';

        return fetch(url).then((res) => res.json());

    },
}

module.exports = api;