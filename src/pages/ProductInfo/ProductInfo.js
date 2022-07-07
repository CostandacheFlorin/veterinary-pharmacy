import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInformation from "../../components/Products/ProductInformation/ProductInformation";
import ProductDescription from "../../components/Products/ProductDescription/ProductDescription";
import ProductReviews from "../../components/Products/ProductReviews/ProductReviews";
import AddReview from "../../components/Products/ProductAddReview/AddReview";
import { useHttpClient } from "../../hooks/http-hook";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
import LoadingSpinner from "../../components/UIElements/Loading/LoadingSpinner";
import { Link } from 'react-router-dom';
import { StyledBackButton } from "./ProductInfo.styled";
import  Text from "../..//components/UIElements/Typography/Text";
import { useAuth } from "../../hooks/auth-hook";

const ProductInfo = () => {
  const { token, login, logout, userId } = useAuth();
  const [product, setProduct] = useState();
  const { productname } = useParams();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/products/get-product-by-name/${productname}`
        );
        setProduct(responseData.product);
        
      } catch (err) {}
    };
    fetchProduct();
  }, [sendRequest,  productname]);

 
  return (
    <>
      <StyledBackButton><Link to="/produse"><Text type="subtitle" align="center" margin="1rem 0" >Inapoi la produse </Text></Link> </StyledBackButton>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner size={100} />}
      {!isLoading && product && (
        <>
          {" "}
          <ProductInformation
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
          <ProductDescription
            name={product.name}
            usage={product.usage}
            description={product.description}
            species={product.species}
            ingredients={product.ingredients}
          />
        </>
      )}

      <ProductReviews productname={productname} />
      {token && <AddReview productname={product?.name} />}
    </>
  );
};

export default ProductInfo;
