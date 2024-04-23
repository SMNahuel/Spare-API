// controllers/UserController.js
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const { User } = require("../db");

 
// Controlador para agregar un nuevo usuario
const addUser = async (req, res) => {
  const { email, password, dni, dateBorth, paymentMethod, name, lastName, photo, country } = req.body;
  // Verificar si el usuario ya existe en la base de datos
  const existingUser = await User.findOne({
    where: {
      [Op.or]: [{ email }, { dni }],
    },
  });

  if (existingUser) {
    return res.status(409).json({ error: 'El usuario ya existe' });
  }

  // Cifrar la contraseña antes de almacenarla
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      email,
      password: hashedPassword,
      dni,
      dateBorth,
      paymentMethod,
      name,
      lastName,
      photo,
      country,
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para consultar un usuario por su ID
const getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para actualizar un usuario por su ID
const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { email, password, dni, dateBirth, paymentMethod, name, lastName, photo, country } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await user.update({
      email,
      password,
      dni,
      dateBirth,
      paymentMethod,
      name,
      lastName,
      photo,
      country,
    });

    res.json({ message: 'Usuario actualizado exitosamente', user });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Controlador para eliminar un usuario por su ID
const deleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    await user.destroy();

    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  addUser,
  getUserById,
  updateUser,
  deleteUser,
};
