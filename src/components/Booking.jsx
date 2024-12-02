import React, { useState } from 'react';
import './Booking.scss';
import Nav from './Nav';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: '',
    });

    const [confirmation, setConfirmation] = useState('');

    // Configuración de horarios
    const openingHours = {
        default: { start: '12:00', end: '23:30' },
        saturday: { start: '20:00', end: '23:00' },
    };

    const closedDays = ['Monday', 'Tuesday', 'Wednesday'];

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validación del tiempo según el día seleccionado
        if (name === 'date') {
            const selectedDay = new Date(value).toLocaleDateString('en-US', {
                weekday: 'long',
            });

            if (closedDays.includes(selectedDay)) {
                alert('Este día está cerrado. Por favor, selecciona otro día.');
                setFormData({ ...formData, date: '' });
                return;
            }
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, date, time, guests } = formData;

        const isLiveMusic =
            time >= openingHours.saturday.start && time <= openingHours.saturday.end;

        const liveMusicMessage = isLiveMusic
            ? ' ¡Disfruta de nuestra música en vivo!'
            : '';

        setConfirmation(
            `Mesa reservada correctamente. ¡Gracias ${name}! Has reservado una mesa para ${guests} comensal(es) el ${date} a las ${time}.${liveMusicMessage}`
        );
    };

    // Determinar las horas válidas según el día
    const getValidTimeRange = () => {
        const selectedDay = new Date(formData.date).toLocaleDateString('en-US', {
            weekday: 'long',
        });

        if (selectedDay === 'Saturday') {
            return openingHours.saturday;
        }
        return openingHours.default;
    };

    const validTimeRange = getValidTimeRange();

    return (
        <>
            <div className="booking-nav">
                <Nav />
            </div>
            <div className="booking">
                <h1>{confirmation ? 'Mesa reservada' : 'Reserva tu mesa'}</h1>
                {!confirmation ? (
                    <form onSubmit={handleSubmit} className="booking-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Fecha de la reserva:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Hora de la reserva:</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                min={validTimeRange.start}
                                max={validTimeRange.end}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guests">Número de comensales:</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-blue">
                            Reservar
                        </button>
                    </form>
                ) : (
                    <div className="confirmation">
                        <p>{confirmation}</p>
                        <button onClick={() => setConfirmation('')} className="btn btn-blue">
                            Hacer otra reserva
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Booking;
