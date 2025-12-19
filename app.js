const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'tajny_klucz',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    res.locals.user = req.session.user;
    next();
});

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.render('index');
});


const PORT =3020;

    app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));