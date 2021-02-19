const server = require("./api/server");

const port = process.env.PORT || 4500;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
