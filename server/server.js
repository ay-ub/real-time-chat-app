const { app, io, server } = require("./socket");
const { join } = require("path");

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
