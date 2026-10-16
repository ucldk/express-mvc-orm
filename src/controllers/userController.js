export const showUsers = (req, res) => {
  res.render('users/index', { title: 'Users' });
};

export const showNewUserForm = (req, res) => {
  res.render('users/new', { title: 'Create user' });
};

export const showUser = (req, res) => {
  res.render('users/show', { title: 'User', id: req.params.id });
};

export const showEditUserForm = (req, res) => {
  res.render('users/edit', { title: 'Edit user', id: req.params.id });
};
