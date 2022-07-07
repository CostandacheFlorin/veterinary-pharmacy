import React, { useState, useEffect } from "react";
import ProductsList from "../../components/Products/ProductsList/ProductsList";
import FilterBox from "../../components/UIElements/FilterBox/FilterBox";
import ErrorModal from "../../components/UIElements/ErrorModal/ErrorModal";
import {
  StyledFilterCheckboxes,
  StyledProductsListing,
} from "./ProductListing.styled";
import LoadingSpinner from "../../components/UIElements/Loading/LoadingSpinner";
import { ProductListingLayout } from "../../components/Layout/ProductListing/ProductListing.styled";
import { useHttpClient } from "../../hooks/http-hook";
import PriceFilter from "../../components/UIElements/PriceFilter/PriceFilter";

import { StyledPagination } from "./ProductListing.styled";
import PaginationBar from "../../components/UIElements/Pagination/PaginationBar";
import CheckboxGroup from "../../components/UIElements/CheckboxGroup/CheckboxGroup";

const ProductListing = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState({
    caini: true,
    pisici: true,
    pasari: true,
    altele: true,
    rozatoare: true,
  });
  const [speciesOptions, setSpeciesOptions] = useState([
    "caini",
    "pisici",
    "pasari",
    "rozatoare",
    "altele",
  ]);

  const [filteredSpeciesArray, setFilteredSpeciesArray] = useState([
    "caini",
    "pisici",
    "pasari",
    "rozatoare",
    "altele",
  ]);

  const fetchProducts = async () => {
    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/products/get-all-products"
      );

      setLoadedProducts(responseData.products);
      setFilteredProducts(responseData.products);
      setCount(responseData.total);
      setPagesNumber(Math.ceil(count / productsPerPage));
    } catch (err) {}
  };
  useEffect(() => {
    fetchProducts();
  }, [sendRequest, count, productsPerPage]);

  useEffect(() => {
    const getSpecies = (item, i) => {
      const listaSpecii = [];
      item[i].species.map((item) => listaSpecii.push(item.specie));
      return listaSpecii;
    };

    if (loadedProducts.length > 5) {
      const species33 = getSpecies(loadedProducts, 1);
      console.log(species33);
      if(filteredSpeciesArray.some((ai) => species33.includes(ai))) {
        console.log("sarmale");
      }
    }

    console.log(filteredSpeciesArray);

    const array3 = loadedProducts.filter((item, index) => {
      if (item.price > priceRange[0] && item.price < priceRange[1]) {
        return item;
      }
    });

    const finalFilteredArray = [];
      for(let i=0; i<array3.length;i++) {
        let extractedSpecies = getSpecies(array3, i);
        console.log(extractedSpecies);
        if(filteredSpeciesArray.some((ai) => extractedSpecies.includes(ai))) {
          finalFilteredArray.push(array3[i]);
        }
      }
      ;


    setFilteredProducts(finalFilteredArray);
  }, [priceRange, filteredSpeciesArray]);



  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const changePage = (event, value) => {
    setCurrentPage(value);
    console.log(currentPage);
  };

  return (
    <>
      <ProductListingLayout background={null}>
        <StyledFilterCheckboxes>
          <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
          <CheckboxGroup
            options={speciesOptions}
            title={"animale"}
            state={filteredSpeciesArray}
            setState={setFilteredSpeciesArray}
          />
        </StyledFilterCheckboxes>
        <StyledProductsListing>
          <ErrorModal error={error} onClear={clearError} />
          {isLoading && <LoadingSpinner size={100} />}

          {!isLoading && loadedProducts && (
            <ProductsList items={currentProducts} />
          )}
          <StyledPagination>
            <PaginationBar
              page={currentPage}
              count={pagesNumber}
              onChangeHandler={changePage}
            />
          </StyledPagination>
        </StyledProductsListing>
      </ProductListingLayout>
    </>
  );
};

export default ProductListing;
