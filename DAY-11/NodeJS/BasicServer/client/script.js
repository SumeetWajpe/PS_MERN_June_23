fetch("http://127.0.0.1:4000/products")
  .then(res => res.json())
  .then(products => console.log(products));
