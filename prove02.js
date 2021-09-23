const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("First middleware!");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second middleware");
//     res.send('<p>Assignment solved (almost!)</p>');
// });

// "/users" must be first because "/" applies to all paths that start with "/"
app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The Middleware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware that handles just /</p>');
});

app.listen(3000);