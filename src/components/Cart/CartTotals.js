import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({value, history}) {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
            {/* link user to home page after the cart is empty button is clicked */}
            <Link to='/'>
              <button
                className='btn btn-outline-danger txt-uppercase mb-3 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>Subtotal :</span>
              <strong>€ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className='text-title'>Btw :</span>
              <strong>€ {cartTax}</strong>
            </h5>
            <h5>
              <span className='text-title'>Total :</span>
              <strong>€ {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            ></PayPalButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// gestopt op 6:00:02
