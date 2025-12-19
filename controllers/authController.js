const bcrypt = require('bcrypt');
const { data, save } = require('../data/store');

exports.showLogin = (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/tasks');
    }

    res.render('auth/login', {
        error: req.query.error,
        success: req.query.success
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = data.users.find(u => u.email === email);

    if (!user) {
        return res.redirect('/auth/login?error=Nieprawidłowy email lub hasło');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.redirect('/auth/login?error=Nieprawidłowy email lub hasło');
    }

    req.session.isLoggedIn = true;
    req.session.user = {
        id: user.id,
        email: user.email
    };

    res.redirect('/tasks');
};

exports.showRegister = (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/tasks');
    }

    res.render('auth/register', {
        error: req.query.error
    });
};

exports.register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.redirect('/auth/register?error=Uzupełnij wszystkie pola');
    }

    if (data.users.find(u => u.email === email)) {
        return res.redirect('/auth/register?error=Użytkownik już istnieje');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    data.users.push({
        id: Date.now(),
        email,
        password: hashedPassword
    });

    save();

    res.redirect('/auth/login?success=Konto utworzone, możesz się zalogować');
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login?success=Wylogowano poprawnie');
    });
};
