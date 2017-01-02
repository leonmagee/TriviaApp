/**
 * API - get data from trivia api?
 * @type {{getToken: (function()), getListings: (function(*=, *=, *=))}}
 */

const api = {
    getQuestions() {

        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

        return fetch(url).then((res) => res.json());

        // return fetch(url, {
        //     headers: {
        //         'header': token
        //     }
        // }).then((res) => res.json());

    },
}

module.exports = api;