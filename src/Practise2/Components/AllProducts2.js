import React, { useEffect, useState } from 'react';

const AllProducts2 = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://themealdb.com/api/json/v1/1/search.php?s")
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    console.log(products);
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
                {products.map(product=><div key={product.idMeal} class="card bg-base-100 shadow-xl text-black">
                    <figure><img src={product?.strMealThumb} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product?.strTags}</h2>
                        <p>{product?.strInstructions.slice(0,200)}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AllProducts2;