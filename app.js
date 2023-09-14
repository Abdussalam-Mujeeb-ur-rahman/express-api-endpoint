const express = require('express');
const moment = require('moment');
const logger = require('morgan');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(helmet());


const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.get('/', (req, res) => {
        res.status(200).send('welcome to express-api-endpoint. add your "slack_name" and "track" as query params to "/api" get your details!. Apart from that, you can perform CRUD operation on Persons, visit the documentation.md on how to do it.');
        return;
});

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const current_day = moment().utc().format('dddd');
    const utc_time = moment().utc().format();

    const github_file_url = "https://github.com/Abdussalam-Mujeeb-ur-rahman/express-api-endpoint/blob/main/index.js";
    const github_repo_url = "https://github.com/Abdussalam-Mujeeb-ur-rahman/express-api-endpoint"; // replace with your actual GitHub repo URL
    const status_code = 200;

    const response = {
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code
    };

    res.json(response);
})

app.use('/api', require('./routes/personRoutes'));

app.get('*' || '/*/*', (req, res) => {
    // Send a 404 Not Found response
    res.status(404).send('Not Found');
  });

app.use((err, req, res, next) => {
    res.status(500).send('Connection timeout!. Please try again later.');

    console.log(err);

    next();
})

module.exports = app;
