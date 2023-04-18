import React from 'react';
import { useItems } from './State/Context';
import { actionTypes } from './State/ActionTypes2';

const AllProducts2 = () => {
    /* const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://themealdb.com/api/json/v1/1/search.php?s")
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    console.log(products); */
    /* const test = useContext(GLOBAL_CONTEXT)
    console.log(test) */
    const {state:{allItems},dispatch} = useItems()
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10'>
                {allItems.map(product=><div key={product.idMeal} className="card bg-base-100 shadow-xl text-black">
                    <figure><img src={product?.strMealThumb} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product?.strTags}</h2>
                        <p>{product?.strInstructions.slice(0,200)}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={()=>dispatch({type:actionTypes.ADD_TO_CART2,payload:{product}})}>Add to cart</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AllProducts2;