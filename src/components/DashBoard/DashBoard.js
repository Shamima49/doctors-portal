import React,{ useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tables from '../Tables/Tables';
import Schedules from '../Schedules/Schedules';

const DashBoard = () => {
    const [allAppointments, setAllAppointments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/allAppointments')
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setAllAppointments(data)
        })
    },[])

    const getTotalApp = () => {
        const data = {
            count: allAppointments.length,
            text: 'Total Appointments',
            backgroundColor: 'green'
        }
        return data
    }

    const getTodayApp = () => {
        const date = new Date()
        const newArray = allAppointments.filter(app => {
            return app.appointmentDate === date.toDateString()
        })
        const data = {
            count: newArray.length,
            text: "Today's Appointments",
            backgroundColor: 'blue'
        }
        return data
    }

    const getPendingToday = () => {
        const date = new Date()
        const newArray = allAppointments.filter(app => {
            return app.appointmentDate === date.toDateString() && !app.visited
        })
        const data = {
            count: newArray.length,
            text: "Pending Appointments",
            backgroundColor: 'brown'
        }
        return data
    }

    const getPatient = () => {
        const patientArray = [];
        allAppointments.forEach(app => {
            if(patientArray.indexOf(app.email) === -1){
                patientArray.push(app.email)
            }
        })
        const data = {
            count: patientArray.length,
            text: "Total Patients",
            backgroundColor: 'goldenrod'
        }
        return data
    }

    return (
        <div className='container'>
            <h4 className="text-primary mt-3 mb-1">Dashboard</h4>
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    <Schedules data={getPendingToday()}></Schedules>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <Schedules data={getTodayApp()}></Schedules>
                </div> 
                <div className="col-md-3 d-flex justify-content-center">
                    <Schedules data={getTotalApp()}></Schedules>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <Schedules data={getPatient()}></Schedules>
                </div>
            </div>
            
            {
                isLoading ? <CircularProgress className='mt-3' disableShrink>
                </CircularProgress>:<Tables allAppointments={allAppointments}>
                </Tables>
            }
            
        </div>
    );
};

export default DashBoard;