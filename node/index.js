const express = require('express');
const axios = require('axios').default;
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'nodedb',
};

/**
 * 
 */
app.get('/', (req, res) => {
    insertPeopleName(res);
});

/**
 * 
 */
app.listen(PORT, () => {
    console.log(`STARTED AT ${PORT} 🖐️`);
});

/**
 * 
 * @returns 
 */
async function getPersonName() {
    const RANDOM = Math.floor(Math.random() * 10);
    const response = await axios.get('https://swapi.dev/api/people');
    return response.data.results[RANDOM].name;
}

/**
 * 
 * @param {*} res 
 */
async function insertPeopleName(res) {
    const name = await getPersonName();
    const connection = mysql.createConnection(config);
    connection.query(`INSERT INTO people(name) values('${name}')`);
    console.log(`${name} insert database 🟢`);
    getPeople(res, connection);
}

/**
 * 
 * @param {*} res 
 * @param {*} connection 
 */
function getPeople(res, connection) {
    const SQL = `SELECT id, name FROM people`;

    connection.query(SQL, (error, results, fields) => {
        if (error) {
            throw error
        };

        let table = '<table>';
        table += '<tr><th>#</th><th>Name</th></tr>';
        for (let people of results) {
            table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
        }
        table += '</table>';
        res.send('<h1>Full Cycle Rocks!</h1>' + table);
    });
    connection.end();
}
