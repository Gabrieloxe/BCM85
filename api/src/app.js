const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("./config/db")();

const api = require("./api");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/healthz", async (req, res) =>
  res.status(200).send({ message: "Health check", status: true }),
);

app.get("/", async (req, res) =>
  res.status(200).send({ message: "Express api ready", status: true }),
);

require("./api")(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started and istening on ${port}`));
