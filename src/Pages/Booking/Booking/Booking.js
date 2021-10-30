import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams();
    console.log(serviceId)
    useEffect(() => {
        fetch(`https://cryptic-citadel-10405.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2>Booking: {service.name}</h2>
            <img src={service.img} alt="" />
            <h4>Price:{service.price}</h4>
            <p>{service.description}</p>
        </div>
    );
};

export default Booking;