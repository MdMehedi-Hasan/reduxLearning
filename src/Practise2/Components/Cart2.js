import React from 'react';
import { useItems } from './State/Context';
import { actionTypes } from './State/ActionTypes2';

const Cart = () => {
    const {state:{cart2},dispatch} = useItems()
    // console.log(cart2);
    const test = useItems()
    // console.log(test);
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
                {cart2?.map(product=><div key={product.idMeal} className="card bg-base-100 shadow-xl text-black">
                    <figure><img src={product?.strMealThumb} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product?.strTags?product.strTags : 'Unavailable'}</h2>
                        <p>{product?.strInstructions?.slice(0,200)}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error" onClick={()=>dispatch({type:actionTypes.REMOVE_CART,payload:product})}>Remove</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Cart;