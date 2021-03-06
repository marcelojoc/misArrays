const products = [
    { title: "Pizza", price: 121, id: "π" },
    { title: "Burger", price: 121, id: "π" },
    { title: "Hot cakes", price: 121, id: "π₯" },
  ];
  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  const productIndex = products.findIndex(item => item.id === 'π'); // fingindex inmutable-- me devuelve  la posicion del elemento, si no lo encuentra  devuelve  un -1
  if (productIndex !== -1) {
      myProducts.push(products[productIndex]); // push muta el objeto original, aΓ±ade  un nuevo elemento
      products.splice(productIndex, 1); // splice elimina un elemento de un array, necesita el indice  de dodne esta el elemento y cuantos elementos  quiere eliminar
  }     // splice tambien es mutable
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  // Update
  
  const productsV2 = [
      { title: "Pizza", price: 121, id: "π" },
      { title: "Burger", price: 121, id: "π" },
      { title: "Hot cakes", price: 121, id: "π₯" },
    ];
  const update = {
      id: "π₯",
      changes: {
          price: 200,
          description: 'delicioso'
      }
  }
  const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
  productsV2[productIndexV2] = {
      ...productsV2[productIndexV2],
      ...update.changes,
  };
  console.log(productsV2);