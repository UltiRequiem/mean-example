import express, { static as staticMiddleware, json } from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import Routes from "./app/routes.js";

const app = express();

app.use(
  staticMiddleware(`${dirname(fileURLToPath(import.meta.url))}/app/public`)
);

app.use(json());

Routes(app);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
