import React from 'react';
import { useProducts } from './Context/ProductProvider';
import { Link, Outlet } from 'react-router-dom';

const ReducerContextProject = () => {
    /* useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => console.log(data))
    },[]) */
    // console.log(data.state.data);
    return (
        <div>
            <div className="navbar bg-green-100 text-black rounded-full">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Thunder Tech</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/products">Home</Link></li>
                        <li><Link to="toprated">Top rated</Link></li>
                        <li><a>About</a></li>
                        <li><Link to="wishlist"><img className='w-8' src="https://png.pngtree.com/template/20191025/ourmid/pngtree-love-interface-line-vector-single-icon-image_319675.jpg" alt="icon"/></Link></li>
                        <li><Link to="cart"><img className='w-8' src="https://www.vhv.rs/dpng/d/428-4287684_background-shopping-cart-transparent-transparent-background-shopping-cart.png" alt="icon"/></Link></li>
                    </ul>
                </div>
            </div>
            <section>
                <Outlet/>
            </section>
        </div>
    );
};

export default ReducerContextProject;