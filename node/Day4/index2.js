 //excercise
const express=require('express');
const app=express();
const PORT=8080;
app.use(express.json());

let products=[];
let productIndex=1;

//get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// //get  product by id 
app.get('/products/:id', (req, res) => {
  const productKaIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productKaIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(products[productKaIndex]);
});

 //delete product by id
app.delete('/products/:id', (req, res) => {
  const productKaIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productKaIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }
  products.splice(productKaIndex, 1);
  res.json({ message: "Product deleted successfully" });
});

//post a product


app.post('/products', (req, res) => {
  const { name, description, price, quantity } = req.body;
  if (!name || !description || price == null || quantity == null) {
    return res.status(400).json({ error: "name, description, price, and quantity fields are required" });
  }
  const newProduct = { id: productIndex++, name, description, price, quantity };
  products.push(newProduct);
  res.json(newProduct);
});

// //update a product
app.put('/products/:id', (req, res) => {
  const productKaIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productKaIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const product = products[productKaIndex];
  const { name, description, price, quantity } = req.body;

  if (name) product.name = name;
  if (description) product.description = description;
  if (price !== undefined && price !== null) product.price = price;
  if (quantity !== undefined && quantity !== null) product.quantity = quantity;

  res.json(product);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));








