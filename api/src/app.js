const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("./config/db")();
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

require("./api")(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started and istening on ${port}`));
