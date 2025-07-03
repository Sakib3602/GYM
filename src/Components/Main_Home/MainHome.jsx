import React from 'react';
import Nav from '../Nav/Nav';
import Sli from './Sli';
import Second_page from '../2nd_page/Second_page';
import Single_image from '../2nd_page/Single_image';
import Services from '../Services/Services';
import Trainers from '../Trainer/Trainers';
import Gellary from '../Gellary/Gellary';
import Price from '../Deal/Price';
import Contact from '../Contact/Contact';

const MainHome = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <Sli></Sli>
            <Second_page></Second_page>
            <Single_image></Single_image>
            <Services></Services>
            <Trainers></Trainers>
            <Gellary></Gellary>
            <Price></Price>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default MainHome;