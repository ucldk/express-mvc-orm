const { users } = require('../../data/users');

const findUser = (id) => users.find((user) => user.id === Number(id));

const getNextId = () => Math.max(0, ...users.map((user) => user.id)) + 1;

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const user = { id: getNextId(), name, email };
  users.push(user);

  res.status(201).json(user);
};

const updateUser = (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  user.name = name;
  user.email = email;

  res.json(user);
};

const deleteUser = (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(users.indexOf(user), 1);

  res.status(204).end();
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
