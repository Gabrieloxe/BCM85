module.exports = (app) => {
  app.use("/api/beloveds", require("./beloveds"));
  app.use("/api/events", require("./event"));
  app.get("/api", (req, res) => {
    res.send({ message: "Express api health check!" });
  });
};
