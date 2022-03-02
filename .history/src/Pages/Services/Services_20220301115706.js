import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import Service from './Service';
import './Services.css';

const Services = () => {
    const [services, setServices ] =useState([])
    useEffect(()=>{
        fetch('./tour.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <Button className='btn' size="lg">Services</Button>

            <Row xs={1} md={2} className="g-4">
  
      {
          services.map(service=><Service 
            key={service.id}
            service={service}
          >
          </Service>)
      }
    
</Row>

        </div>
    );
};

export default Services;