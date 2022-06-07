import React, { useState, useEffect } from "react";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import FilterBox from "../../components/UIElements/FilterBox/FilterBox";
// import PozaProdus1 from "../../img/medicament1.jpg";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
// import backgroundImage from "../../img/patternbackground.jpg";
import {
  StyledFilterCheckboxes,
  StyledProductsListing,
} from "./ProductListing.styled";
import LoadingSpinner from "../../components/UIElements/Loading/LoadingSpinner";
import { ProductListingLayout } from "../../components/Layout/ProductListing/ProductListing.styled";
import { useHttpClient } from "../../hooks/http-hook";

import { StyledPagination } from "./ProductListing.styled";
import PaginationBar from "../../components/UIElements/Pagination/PaginationBar";
const DUMMY_FILTER = [
  {
    key: "pret",
    denumire: "Pret",

    valori: [
      {
        key: "low",
        value: "0-30",
      },
      {
        key: "mid",
        value: "30-100",
      },
      {
        key: "high",
        value: "100-200",
      },
      {
        key: "very high",
        value: "200-500",
      },
      {
        key: "test",
        value: "500+",
      },
    ],
  },
  {
    key: "producator",
    denumire: "Producator",

    valori: [
      {
        key: "low",
        value: "ceva valoare mai lunga zic zic ",
      },
      {
        key: "mid",
        value: "catena v2 ",
      },
      {
        key: "high",
        value: "catena v3",
      },
      {
        key: "lowhigh",
        value: "ceva valoare mai lunga zic zic ",
      },
      {
        key: "mi55d",
        value: "catena v2 ",
      },
      {
        key: "hi55gh",
        value: "catena v3",
      },
    ],
  },
  {
    key: "pret3",
    denumire: "pret",

    valori: [
      {
        key: "low",
        value: "10-30",
      },
      {
        key: "mid",
        value: "10-30",
      },
      {
        key: "high",
        value: "10-30",
      },
    ],
  }
];

const ProductListing = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [pagesNumber, setPagesNumber] = useState(1);



  


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/products/get-all-products"
        );
  
        setLoadedProducts(responseData.products);
        setCount(responseData.total);
        setPagesNumber(Math.ceil(count / productsPerPage));
      } catch (err) {}
    };
  
   
    fetchProducts();
  }, [sendRequest, count, productsPerPage]);




  // console.log(loadedProducts);
  // console.log(count);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = loadedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  

  // console.log(currentProducts)

  const changePage = (event, value) => {
    setCurrentPage(value);
    console.log(currentPage);

  }


  return (
    <>
    <ProductListingLayout background={null}>
      <StyledFilterCheckboxes>
        <FilterBox items={DUMMY_FILTER} />
      </StyledFilterCheckboxes>
      <StyledProductsListing>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && <LoadingSpinner size={100} />}
        
        {!isLoading && loadedProducts && (
          <ProductsList items={currentProducts} />
        )}
        <StyledPagination>
        
      <PaginationBar page={currentPage} count={pagesNumber} onChangeHandler={changePage} />
        </StyledPagination>
      </StyledProductsListing>
     
    </ProductListingLayout>
    
    </>
  );
};

export default ProductListing;
