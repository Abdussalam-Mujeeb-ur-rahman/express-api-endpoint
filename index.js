const express = require('express');
const moment = require('moment');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    if(!slack_name || !track) {
        res.status(200).send('welcome to express-api-endpoint. add your "slack_name" and "track" as query params to get your details!');
        return;
    }

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
});

app.get('*' || '/*/*', (req, res) => {
    // Send a 404 Not Found response
    res.status(404).send('Not Found');
  });

app.use((err, req, res, next) => {
    res.status(500).send('Connection timeout!. Please try again later.');

    console.log(err);

    next();
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
