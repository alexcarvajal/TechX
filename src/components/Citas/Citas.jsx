// AppointmentScheduler.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Citas.css';


const Citas = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleTimeChange = (time) => {
    setTime(time);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      date: startDate.toLocaleDateString(),
      time: time.toLocaleTimeString(),
    };
    console.log('Cita agendada:', appointment);
    // Aquí puedes añadir lógica para guardar la cita en una base de datos, etc.
  };

  return (
    <div className="appointment-scheduler">
      <h2>Agenda tu cita</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="datepicker"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <DatePicker
            selected={time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="h:mm aa"
            className="timepicker"
          />
        </div>
        <button type="submit">¡Agenda tu cita aquí!</button>
      </form>
    </div>
  );
};

export default Citas;
