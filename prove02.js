const path = require('path');
const PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/prove02/admin');
const shopRoutes = require('./routes/prove02/shop');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
});

app.listen(PORT);