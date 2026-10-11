import express from "express";
import routes from "./routes/index.ts";

const app = express();

app.use("/", routes);

export { app };
export default app;
