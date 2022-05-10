import React from "react";
import ProductInformation from "../../components/Products/ProductInformation/ProductInformation";
import ProductDescription from "../../components/Products/ProductDescription/ProductDescription";

const DUMMY_PRODUCT = {
  name: "Nume misto",
  description:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
  usage: "O data la 3 ore.",
  species: "Caini, pisici, viezuri",
  ingredients: [
   { name: "urzica tare",
    quantity: "200g"},
    {name: "altceva",
    quantity: "100g"

    }
  ]
  };


const ProductInfo = () => {
  return (
    <>
      <ProductInformation />
      <ProductDescription
        name={DUMMY_PRODUCT.name}
        usage={DUMMY_PRODUCT.usage}
        description={DUMMY_PRODUCT.description}
        species={DUMMY_PRODUCT.species}
        ingredients={DUMMY_PRODUCT.ingredients}
      />
      
    </>
  );
};

export default ProductInfo;
