import ProductItem from "./ProductItem";

export default function ReactEArrays() {
  const products = [
    {
      name: "Detergente",
      price: 2.15,
      id: 1,
    },
    {
      name: "Azeite",
      price: 21.0,
      id: 2,
    },
    {
      name: "Chocolate",
      price: 5.0,
      id: 3,
    },
  ];
  return (
    <>
      <h1>ReactEArrays</h1>
      {products.map((product) => (
        <ProductItem
          //  name={product.name} price={product.price}
          key={product.id}
          {...product}
        />
      ))}
    </>
  );
}
