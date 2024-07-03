// Citas.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Citas.css';
import CitasAgendadas from '../../components/CitasAgendadas/CitasAgendadas'; // Importa el componente correctamente

const Citas = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [doctorEmail, setDoctorEmail] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [appointments, setAppointments] = useState([]); // Estado para guardar las citas

  const doctorEmails = [
    'doctor1@example.com',
    'doctor2@example.com',
    'doctor3@example.com',
    // Añade más correos electrónicos de doctores aquí
  ];

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
      doctorEmail: doctorEmail
    };
    console.log('Cita agendada:', appointment);

    // Guardar la cita en el estado
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);

    // Mostrar mensaje de confirmación
    setConfirmationMessage('Cita agendada con éxito.');

    // Reiniciar el formulario
    setStartDate(new Date());
    setTime(new Date());
    setDoctorEmail('');

    // Ocultar el mensaje de confirmación después de 3 segundos
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  return (
    <div className="appointment-scheduler">
      <h2>Agenda tu cita</h2>
      {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctorEmail">Doctor:</label>
          <select
            id="doctorEmail"
            className="doctor-email-select"
            value={doctorEmail}
            onChange={(e) => setDoctorEmail(e.target.value)}
            required
          >
            <option value="" disabled>Select a doctor</option>
            {doctorEmails.map((email, index) => (
              <option key={index} value={email}>
                {email}
              </option>
            ))}
          </select>
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
      <CitasAgendadas appointments={appointments} /> {/* Añade el componente con citas */}
    </div>
  );
};

export default Citas;
