const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...
const handleGetAllClient = (req, res) => {
  console.log("/client hit");
  res.status(200).json(clients);
};
const handleGetClientById = (req, res) => {
  const { clientId } = req.params;
  const client = clients.find((c) => c.id === clientId);

  client
    ? res.status(200).json(client)
    : res.status(404).json({ message: "Client not found" });
};

const handlePostClient = (req, res) => {
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    return res
      .status(400)
      .json({ message: "Name, age, and email are required" });
  }

  if (clients.some((client) => client.email === email)) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newClient = {
    id: uuidv4(),
    isActive: true,
    ...req.body,
  };

  clients.push(newClient);
  res.status(201).json(newClient);
};

const handleDeleteClient = (req, res) => {
  const client = clients.find((c) => c.id === req.params.clientId);
  const indexOf = clients.findIndex((i) => i.id === client.id);

  if (!client) {
    return res.status(404).json({ message: "Client not found" });
  }

  res.json(clients.splice(indexOf, 1));
};
module.exports = {
  handleGetAllClient,
  handleGetClientById,
  handlePostClient,
  handleDeleteClient,
};