const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
  const {
    q,
    nombre = "No name",
    apikey,
    page = 1,
    limit,
    other = 99,
  } = req.query;
  res.status(200).json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
    other,
  });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.status(200).json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};
7;

const usuariosPut = (req = request, res = response) => {
  const id = req.params.id;
  res.status(200).json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosPatch = (req = request, res = response) => {
  res.status(200).json({
    msg: "patch API - controlador",
  });
};

const usuariosDelete = (req = request, res = response) => {
  res.status(200).json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
