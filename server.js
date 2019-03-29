const express = require('express');
// const bodyParser = require('body-parser')

const PORT = 8000 || process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.listen(PORT, err => {
    if (err) console.error();
    else(console.log(`Server is listening on port ${PORT}`));
})