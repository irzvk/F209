const { data, save } = require('../data/store');

exports.list = (req, res) => {
    const userTasks = data.tasks.filter(
        t => t.userId === req.session.user.id
    );

    res.render('tasks/list', { tasks: userTasks });
};

exports.showAdd = (req, res) => {
    res.render('tasks/add');
};

exports.add = (req, res) => {
    const { title } = req.body;

    data.tasks.push({
        id: Date.now(),
        title,
        completed: false,
        userId: req.session.user.id
    });

    save();
    res.redirect('/tasks');
};

exports.showEdit = (req, res) => {
    const task = data.tasks.find(
        t => t.id == req.params.id && t.userId === req.session.user.id
    );

    if (!task) return res.redirect('/tasks');

    res.render('tasks/edit', { task });
};

exports.edit = (req, res) => {
    const task = data.tasks.find(
        t => t.id == req.params.id && t.userId === req.session.user.id
    );

    if (!task) return res.redirect('/tasks');

    task.title = req.body.title;
    save();

    res.redirect('/tasks');
};

exports.toggleComplete = (req, res) => {
    const task = data.tasks.find(
        t => t.id == req.params.id && t.userId === req.session.user.id
    );

    if (!task) return res.redirect('/tasks');

    task.completed = !task.completed;
    save();

    res.redirect('/tasks');
};

exports.delete = (req, res) => {
    data.tasks = data.tasks.filter(
        t => !(t.id == req.params.id && t.userId === req.session.user.id)
    );

    save();
    res.redirect('/tasks');
};
