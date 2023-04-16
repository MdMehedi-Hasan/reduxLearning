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
                        <li><Link to="cart">Cart</Link></li>
                    </ul>
                </div>
            </div>
            <section>
                {/* {content} */}
                <Outlet/>
            </section>
        </div>
    );
};

export default ReducerContextProject;