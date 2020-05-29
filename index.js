const polka = require("polka");

function one(req, res, next) {
  req.hello = "world";
  next();
}

function two(req, res, next) {
  req.foo = "...needs better demo 😔";
  next();
}

polka()
  .use(one, two)
  .get("/", (req, res) => {
    res.end("Home page");
  })
  .get("/users/:id", (req, res) => {
    console.log(`~> Hello, ${req.hello}`);
    res.end(`User: ${req.params.id}`); // id = :id in the URL
  })
  .listen(3000, (err) => {
    if (err) throw err;
    console.log("Open localhost:3000 to try it out.");
  });
