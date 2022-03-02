import React from 'react';
import { Button, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from './Service';
import './Services.css';

const Services = () => {
   const {service} = useService();
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