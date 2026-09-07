import React from 'react';
import HeaderStyle from '../Components/Header/HeaderStyle';
import Footer from '../Components/Footer/Footer';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <HeaderStyle/>
            {children}
            <Footer/>
        </div>
    );
}; 

export default DefalultLayout;