const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
var path = require('path');
var fs = require('fs');

const app = express();

var allSettled;

if (process.env.NODE_ENV === 'production') {
    allSettled = require('promise.allSettled');
    allSettled.shim();
    app.use(cors());
} else {
    app.use(cors());
}
app.use(bodyParser.json());
app.use(express.static(__dirname));

const returnHome = (res) => {
    const homePage = new Promise((resolve, reject) => {
        fs.readFile('./public/index.html', 'utf8', function (err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });

    Promise.allSettled([homePage]).then(values => {
        res.setHeader("Content-Type", "text/html");
        res.status(200).send(values[0].value);
    });
};

app.get('/', (req, res) => {
    returnHome(res);
});

app.get('/home', (req, res) => {
    returnHome(res);
});

const returnLogin = (res) => {
    const loginPage = new Promise((resolve, reject) => {
        fs.readFile('./public/pages/login.html', 'utf8', function (err, data) {
            if (err) reject(err);
            resolve(data);
        });
    });

    Promise.allSettled([loginPage]).then(values => {
        res.setHeader("Content-Type", "text/html");
        res.status(200).send(values[0].value);
    });
};

app.get('/login', (req, res) => {
    returnLogin(res);
});


if (process.env.NODE_ENV === 'production') {
    app.listen();
} else {
    console.log(process.versions.node);
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}