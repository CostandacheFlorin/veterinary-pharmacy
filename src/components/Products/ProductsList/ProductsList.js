
import Product from '../Product/Product';

import { StyledProductsList, StyledProductsError } from './ProductsList.styled';

const ProductsList = (props) => {

  


    if (props.items.length === 0) {
        return (
          <StyledProductsError>
            Nu s-au gasit produse.
          </StyledProductsError>
        );
      }
    
      return (
        <StyledProductsList>
          {props.items.map((produs) => {
            
            return (
              <Product
                key={produs.id}
                id={produs.id}
                title={produs.name}
                price={produs.price}
                image={produs.image}
                name={produs.name}
              />
            );
          })}
        </StyledProductsList>
      );
    };



export default ProductsList;