import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import GLOBAL_CONTEXT from './State/Context'
import Context from './State/Context';

const Main = () => {
    return (
        <div className='min-h-screen'>
            <div>
                <div className="container mx-auto navbar bg-purple-500 rounded-full">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Thunder 2</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 gap-10 mr-10">
                            <Link to="/practise"><li>Home</li></Link>
                            <Link to="toprated2"><li>Top Rated</li></Link>
                            <Link to="/practise"><li>About</li></Link>
                            <Link to="wishlist2"><li>Wishlist</li></Link>
                            <Link to="cart2"><li>Cart</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Context>
                    {<Outlet />}
                </Context>
            </div>
        </div>
    );
};

export default Main;