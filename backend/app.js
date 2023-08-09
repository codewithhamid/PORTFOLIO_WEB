import express from "express";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import cors from 'cors';
import { fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,"../frontend/build/index.html"))

})
