// keep online: (with up.repl.link)
const express = require('express');
const path = require('path');
const app = express();
const port = process.env['PORT'] || 42069;


app.use("/", express.static(path.join(__dirname, "site/")));
app.listen(port);