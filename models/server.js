const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Paths
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Listen
    this.listen();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Parse and read body
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
