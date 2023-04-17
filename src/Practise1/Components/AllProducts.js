import React from 'react';
import { useProducts } from './Context/ProductProvider';

const AllProducts = () => {
    const {state:{data,error,loading}} = useProducts()
    console.log(data)
    let content;
    if(loading){
        content = <p>Loading</p>
    }
    else if(error){
        content = <p>Something went wrong!</p>
    }
    else{
       content = data?.map(product=>
            <div key={product?.id} className="card w-auto bg-base-100 shadow-xl text-black">
            <figure><img className='h-36' src={product?.images[0]} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{product?.title}</h2>
              <p>{product?.description}</p>
              <p>Rating: {product?.rating}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
            )
    }
    return (
        <div className='container mx-auto min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-20 justify-items-center'>
            {content}
        </div>
    );
};

export default AllProducts;