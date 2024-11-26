import "dotenv/config";
import express from "express";
import mainRouter from "./routes/main";
const app = express();
const port = process.env.PORT || 3000;
import cors from "cors";
import bodyParser from "body-parser";

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
