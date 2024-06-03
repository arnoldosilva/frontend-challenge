import express from "express";
import jsonGraphqlExpress from "json-graphql-server/node";
import cors from "cors";
import { products } from "./db.js";

const HOST = "localhost";
const PORT = 4000;
const app = express();

app.use(cors());
app.use("/products", jsonGraphqlExpress({ products }));
app.listen(PORT, HOST);
let msg = `GraphQL server running with your data at http://${HOST}:${PORT}/`;
console.log(msg);
