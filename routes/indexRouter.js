const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];



indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
})

indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.msg, user: req.body.author, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  res.render("open", {message: messages[req.params.id]});
})


module.exports = indexRouter;