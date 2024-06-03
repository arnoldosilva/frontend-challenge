import express from "express";
import jsonGraphqlExpress from "json-graphql-server";
import cors from "cors";
import { products } from "./db.js";

const HOST = "localhost";
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(
  "/",
  jsonGraphqlExpress({
    data: { products },
    url: "/products",
  }).getHandler()
);
app.listen(PORT, HOST);
let msg = `GraphQL server running with your data at http://${HOST}:${PORT}/`;
console.log(msg);
