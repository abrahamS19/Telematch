const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
routerApi(app);

app.listen(port, () => console.log('Listening on port 3000'))