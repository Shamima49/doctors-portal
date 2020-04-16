import React,{ useState, useEffect } from 'react';
import UpdateTable from '../UpdateTable/UpdateTable'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentList = () => {
    const [date, setDate] = useState(new Date())
    const [dailyAppointment, setDailyAppointment] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://vast-headland-19751.herokuapp.com/dailyAppointment/' + date.toDateString())
        .then(res => res.json())
        .then(data => {
            if(data.message){
                alert('Server Error! Reload the page.')
            } else{
                setDailyAppointment(data)
                setIsLoading(false)
            }
            
        })
    },[date])

    return (
        <div className='container'>
            <h3 className="text-primary">Appointments</h3>
            <div className="row m-5">
                <div className="col-md-5">
                    <Calendar
                        value={date}
                        onChange={d => setDate(d)}
                        minDate={new Date()}
                        maxDate={new Date(2020,11,31)}
                        minDetail={'year'}
                    />
                </div>
                <div className="col-md-7">
                    <UpdateTable 
                        date={date}
                        isLoading={isLoading} 
                        dailyAppointment={dailyAppointment}>
                    </UpdateTable>
                </div>
            </div>
        </div>
    );
};

export default AppointmentList;