import { Router } from "express";

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "David",
    added: new Date()
  },
  {
    text: "What's good!",
    user: "Dante",
    added: new Date()
  },
  {
    text: "Wassup!",
    user: "Marlon",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => res.send("Read a book!"));
// indexRouter.get("/:indexId", (req, res) => {
//   const { indexId } = req.params;
//   res.send(`ID: ${indexId}`);
// });

// TODO: Delete the "res.send" code if we get an error about it conflicting with "res.redirect"
indexRouter.post("/new", (req, res) => {
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.send("message sent");
  res.redirect("/");
});

export { indexRouter };