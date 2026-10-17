import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  // const { form } = req.params;
  // res.send(`New Message: ${form}`);

  // const { authorName, messageText } = req.body;
  res.render("new");
});

// TODO: Delete the "res.send" code if we get an error about it conflicting with "res.redirect"
// TODO: ReferenceError: messages is not defined (when using this POST version)

// newMessageRouter.post("/", (req, res) => {
//   // const { form } = req.params;
//   // res.send(`New Message: ${form}`);

//   // const { authorName, messageText } = req.body;
//   indexRouter.messages.push({ text: messageText, user: authorName, added: new Date() });
//   // res.send("message sent"); // Do we need this?
//   res.redirect("..");
// });

export { newMessageRouter };