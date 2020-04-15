import React from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faChartLine } from '@fortawesome/free-solid-svg-icons'

const SideMenu = () => {
    return (
        <div>
            <div className="sidenav">
                <Link to='/doctorPanel/dashboard' className="menu-link">
                    <FontAwesomeIcon icon={faChartLine} /> Dashboard
                </Link>
                <Link to='/doctorPanel/appointmentList' className="menu-link">
                    <FontAwesomeIcon icon={faCalendarCheck} /> Appointment
                </Link>
            </div>
        </div>
    );
};

export default SideMenu;