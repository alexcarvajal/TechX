// CitasAgendadas.js
import React from 'react';
import './CitasAgendadas.css';

const CitasAgendadas = ({ appointments = [] }) => {
  return (
    <div className="scheduled-appointments">
      <h3>Citas Agendadas</h3>
      {appointments.length === 0 ? (
        <p>No hay citas agendadas.</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <p>Doctor: {appointment.doctorEmail}</p>
              <p>Fecha: {appointment.date}</p>
              <p>Hora: {appointment.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitasAgendadas;
