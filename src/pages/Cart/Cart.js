
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import FilledCart from '../../components/Cart/FilledCart/FilledCart';

const CartItems = [
    {
        test: "ceva"
    }

]

const Cart = () => {

    if(CartItems.length === 0){
        return (
            <EmptyCart/>
        )
    }
    if(CartItems.length !== 0) {
        return (
            <FilledCart/>
        )
    }

    
}




export default Cart;