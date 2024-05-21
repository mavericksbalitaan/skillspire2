const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

let products = [
  {
    id: 1,
    name: "Product 1",
    price: 25.99,
    description: "Description of Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    description: "Description of Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 15.49,
    description: "Description of Product 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    description: "Description of Product 4",
  },
  {
    id: 5,
    name: "Product 5",
    price: 9.99,
    description: "Description of Product 5",
  },
];

const middleware = (req, res, next) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({
      error: "Missing required properties: name, price, or description",
    });
  }

  next();
};

// 1 Retrieve a list of all products
app.get("/products", (req, res) => {
  res.send(products);
});

// 2 Retrieve details of a specific product by ID
app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id == id);
  res.send(product);
});

// 3 Add a new product to the collection
app.post("/products", middleware, (req, res) => {
  const { name, price, description } = req.body;
  const id = Math.floor(Math.random() * (100 - 0) + 0);
  const newproduct = {
    id,
    name,
    price,
    description,
  };

  products.push(newproduct);

  res.send(products);
});

// 4 Update details of a product by ID
app.put("/products/:id", middleware, (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const index = products.findIndex((product) => product.id == id);

  const newproduct = {
    id,
    name,
    price,
    description,
  };

  products.splice(index, 1, newproduct);

  res.send(products);
});

// 5 Delete a product by ID
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  const index = products.findIndex((product) => product.id == id);

  products.splice(index, 1);

  res.send(products);
});

app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});
