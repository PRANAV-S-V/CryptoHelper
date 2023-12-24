import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const API_ENDPOINT = "https://api.blockchain.com/v3/exchange/tickers/"

app.use(express.static("public"))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index.ejs")
});
 
app.post("/coin", async(req,res) =>{
    const coinName = req.body["selectedValue"];
        try {
          const response = await axios.get(API_ENDPOINT+coinName+"-USD");
        //   console.log('Server response:', response.data);
          let price = response.data["last_trade_price"];
          res.send(price.toString());
        } catch (error) {
          console.error('Error:', error);
          console.log("error");
        }
      
});

app.listen(port, (req, res) =>{
    console.log("The server starts breathing")
})