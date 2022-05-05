

import ProductsList from '../../components/Products/ProductsList/ProductsList'
import FilterBox from "../../components/UIElements/FilterBox/FilterBox";
import PozaProdus1 from "../../img/medicament1.jpg";
import PozaProdus2 from "../../img/medicament2.jpg";
import PozaProdus3 from "../../img/medicament3.jpg";
import PozaProdus4 from "../../img/medicament4.jpg";
import PozaProdus5 from "../../img/medicament5.jpg";
import PozaProdus6 from "../../img/medicament6.jpg";
import PozaProdus7 from "../../img/medicament7.jpg";
import PozaProdus8 from "../../img/medicament8.jpg";
import PozaProdus9 from "../../img/medicament9.jpg";
import PozaProdus10 from "../../img/Happy-Golden-Retriever-at-Woodside-Animal-Welfare-Trust.jpg";
import backgroundImage from '../../img/patternbackground.jpg';
import { StyledFilterCheckboxes, StyledProductsListing } from "./ProductListing.styled";


import { ProductListingLayout } from "../../components/Layout/ProductListing/ProductListing.styled";

const DUMMY_PRODUCTS = [
  {
    id: "prod1",
    title: "Mancare pentru caissni",
    price: 15,
    image: PozaProdus1
  },
  {
    id: "prod2",
    title: "Brit Care Pisica Tuna and Turkey conserva 80 grssssssssssssssssssssss",
    price: 26,
    image: PozaProdus2
  },
  {
    id: "prod3",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus3
  },
  {
    id: "prod4",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus4
  },
  {
    id: "prod5",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus5
  },
  {
    id: "prod6",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus6
  },
  {
    id: "prod7",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus7
  },
  {
    id: "prod8",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus8
  },
  {
    id: "prod9",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus9
  },
  {
    id: "prod10",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus1
  },
  {
    id: "prod11",
    title: "Mancare pentru piscii",
    price: 129,
    image: PozaProdus10
  },
  {
    id: "prod12",
    title: "Mancare pentru piscii",
    price: 66,
  },
];

const DUMMY_FILTER = [
  {
    key: "pret",
    denumire: "pret",

    valori: [
      {
        key: 'low',
        value: "10-30"
      },
      {
        key: 'mid',
        value: "10-30"
      },
      {
        key: 'high',
        value: "10-30"
      },
    ]
  },
  {
    key: "pret2",
    denumire: "Ceva titlu mai lung zic",

    valori: [
      {
        key: 'low',
        value: "ceva valoare mai lunga zic zic "
      },
      {
        key: 'mid',
        value: "catena v2 "
      },
      {
        key: 'high',
        value: "catena v3"
      },{
        key: 'lowhigh',
        value: "ceva valoare mai lunga zic zic "
      },
      {
        key: 'mi55d',
        value: "catena v2 "
      },
      {
        key: 'hi55gh',
        value: "catena v3"
      },
    ]
  },
  {
    key: "pret3",
    denumire: "pret",

    valori: [
      {
        key: 'low',
        value: "10-30"
      },
      {
        key: 'mid',
        value: "10-30"
      },
      {
        key: 'high',
        value: "10-30"
      },
    ]
  },
  {
    key: "pret4",
    denumire: "pret",

    valori: [
      {
        key: 'low',
        value: "10-30"
      },
      {
        key: 'mid',
        value: "10-30"
      },
      {
        key: 'high',
        value: "10-30"
      },
    ]
  },
];

const ProductListing = () => {
  return (
    <ProductListingLayout background={backgroundImage}>
    
      <StyledFilterCheckboxes>
        <FilterBox items={DUMMY_FILTER} />
      </StyledFilterCheckboxes>
      <StyledProductsListing>
        <ProductsList items={DUMMY_PRODUCTS} />
      </StyledProductsListing>
    </ProductListingLayout>
  );
};

export default ProductListing;
