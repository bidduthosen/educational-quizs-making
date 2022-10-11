import React from 'react';
import { Outlet } from 'react-router-dom';
import Navs from '../components/Nav/Navs';

const Main = () => {
    return (
        <div>
            <Navs></Navs>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;