import React from 'react';
import { useProducts } from './Context/ProductProvider';
import { types } from './States/ProductsState/actiontype';

const Cart = () => {
  const { state: { cart, error, loading }, dispatch } = useProducts()
  let content;
  if (loading) {
    content = <p>Loading</p>
  }
  else if (error) {
    content = <p>Something went wrong!</p>
  }
  else {
    content = cart?.map(product =>
      <div key={product?.product?.id} className="card w-auto bg-base-100 shadow-xl text-black">
        <figure><img className='h-36' src={product?.product?.images[0]} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{product?.product?.title}</h2>
          <p>{product?.product?.description}</p>
          <p>Rating: {product?.product?.rating}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-error" onClick={() => dispatch({ type: types.DELETE_FROM_CART, payload: product })}>Delete</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-20 justify-items-center'>
        {content}
      </div>
    </div>
  );
};

export default Cart;