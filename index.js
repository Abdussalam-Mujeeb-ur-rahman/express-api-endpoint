const app = require('./app');
const { dbconnection } = require('./config/dbconfig');

dbconnection();

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));