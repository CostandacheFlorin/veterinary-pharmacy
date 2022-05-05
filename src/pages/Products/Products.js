import ProductsList from "../components/Products/ProductsList";

const Products = (props) => {
  if (DUMMY_PRODUCTS) return <ProductsList items={DUMMY_PRODUCTS} />;
 
};

export default Products;
