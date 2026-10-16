const showUsers = (req, res) => {
  res.render('users/index', { title: 'Users' });
};

const showNewUserForm = (req, res) => {
  res.render('users/new', { title: 'Create user' });
};

const showUser = (req, res) => {
  res.render('users/show', { title: 'User', id: req.params.id });
};

const showEditUserForm = (req, res) => {
  res.render('users/edit', { title: 'Edit user', id: req.params.id });
};

module.exports = {
  showUsers,
  showNewUserForm,
  showUser,
  showEditUserForm,
};
