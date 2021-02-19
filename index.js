const server = require("./api/server");

const PORT = process.env.PORT || 4500;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
