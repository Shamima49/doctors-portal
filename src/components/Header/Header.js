import React from 'react';
import banner from '../../images/MaskGroup1.png';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='p-5 Header-page'>
            <div className="row">
                <div className="col-md-6 text-left pt-5">
                    <h1 className='text-primary'>Your New Smile</h1>
                    <h1 className='text-primary'>Starts Here</h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam, soluta nesciunt molestiae natus accusamus minus exercitationem omnis animi ex eaque tenetur magni aspernatur? Nisi culpa soluta molestias unde dolor!</p>
                    <Link to='/getAppointment'>
                        <button className="btn btn-primary m-1">Get Appointment</button>
                    </Link>
                    <Link to='/doctorPanel'>
                        <button className="btn btn-primary m-1">Doctor Panel</button>
                    </Link>
                </div>
                <div className="col-md-6 pt-3">
                    <img className='w-100 mt-5' src={banner} alt=""/>
                </div>
            </div>
            

        </div>
    );
};

export default Header;