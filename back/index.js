const express = require('express');
const cors = require('cors');
const { searchProductsByKeyword, getProductById }  = require('./services/product.js'); 

const app = express();
const port = process.env.PORT || "8000";

app.use(cors());


/** endpoint to get list of products by keyword */
app.get("/api/items", (req, res) => {
    console.log("get items executed");
    const keyword = req.query.q;   
    keyword
        ? searchProductsByKeyword(keyword).subscribe(r => res.send(r))
        : res.sendStatus(400);
});

/** endpoint to get product by id */
app.get("/api/items/:productId", (req, res) => {
    console.log("get item by id executed");
    const productId = req.params.productId;
    productId
        ? getProductById(productId).subscribe(r => res.send(r))
        : res.sendStatus(400);
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});