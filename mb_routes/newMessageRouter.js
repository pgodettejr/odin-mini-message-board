import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/new/:form", (req, res) => {
  const { form } = req.params;
  res.send(`New Message: ${form}`);
});

export { newMessageRouter };