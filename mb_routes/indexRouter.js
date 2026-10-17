import { Router } from "express";

const indexRouter = Router({ mergeParams: true });

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

// TODO: Do we need the "/" or can it be an empty string?
indexRouter.get("{/index}", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// indexRouter.get("/:indexId", (req, res) => {
//   const { indexId } = req.params;
//   res.send(`ID: ${indexId}`);
// });

// TODO: Delete the "res.send" code if we get an error about it conflicting with "res.redirect"

// ReferenceError: messageText is not defined (when const variable for it using req.body was commented out)
// TypeError: Cannot destructure property 'authorName' of 'req.body' as it is undefined (after turning req.body const variable back on)

indexRouter.post("/new", (req, res) => {
  // const { form } = req.params;
  // res.send(`New Message: ${form}`);

  const { messageText, authorName } = req.body;
  messages.push({ text: messageText, user: authorName, added: new Date() });
  // res.send("message sent"); // Do we need this?
  res.redirect("/");
});

export { indexRouter };