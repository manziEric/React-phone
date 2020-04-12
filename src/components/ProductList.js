import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='py-5 product-head'>
          <div className='container'>
            <Title name='our' title='products' />

            <div className='row'>
              <ProductConsumer>
                {/* de value komt van context.js <ProductContext.Provider value='...'> */}
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>

      // <Product />
    );
  }
}
