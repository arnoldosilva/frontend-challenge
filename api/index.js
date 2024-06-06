import express from "express";
import jsonGraphqlExpress from "json-graphql-server/node";
import cors from "cors";
import { products } from "./db.js";
import { Stripe } from "stripe";

const stripe = Stripe(
  "sk_test_51LmbcrEjPMUOzEi9aeyKAYodT1c1BzEDtb3wokZZsIO4jGCFy2NiK5LatLZzo6zzHBkPiytKXSRjZXk5ziwgX5r100Jdbm95xV"
);
const YOUR_DOMAIN = "http://localhost:3000";

const HOST = "localhost";
const PORT = 4000;
const app = express();

app.use(cors());
app.use("/products", jsonGraphqlExpress({ products }));
app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1POlnpEjPMUOzEi97vKBa8jb",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/checkout/success`,
    cancel_url: `${YOUR_DOMAIN}/checkout/cancel`,
  });

  res.json({ url: session.url });
});
app.listen(PORT, HOST);
let msg = `GraphQL server running with your data at http://${HOST}:${PORT}/`;
console.log(msg);
