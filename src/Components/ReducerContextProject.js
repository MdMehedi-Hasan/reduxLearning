import React from 'react';
import { useProducts } from './Context/ProductProvider';

const ReducerContextProject = () => {
    /* useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => console.log(data))
    },[]) */
    const data = useProducts()
    console.log(data.state.data);
    return (
        <div>
            <div className="navbar bg-green-100 text-black rounded-full">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Thunder Tech</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Top rated</a></li>
                        <li><a>About</a></li>
                        <li><a>Cart</a></li>
                    </ul>
                </div>
            </div>
            <section className='grid grid-cols-4 gap-y-20 mt-20 justify-items-center'>
                {data?.state?.data?.map(product=>
                    <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-36' src={product?.images[0]} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-black">{product?.title}</h2>
                      <p className='text-black'>{product?.description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                    )}
            </section>
        </div>
    );
};

export default ReducerContextProject;