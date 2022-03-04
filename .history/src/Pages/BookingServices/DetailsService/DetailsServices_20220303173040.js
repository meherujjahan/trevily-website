import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import './DetailsService.css';

const DetailsServices = () => {
     
    //const {id, img, price,place}= useService();
        const { users}=useAuth();
        const [booking, setBooking] = useState([]);
        const {_id}= useParams()

        useEffect(()=>{
          fetch(`http://localhost:5000/services/${_id}`)
          .then(res=> res.json())
          .then(data=>{
            setBooking(data)
          })
        
        },[_id])
        const nameRef = useRef();
        const emailRef = useRef();
        const desRef = useRef();
        const imgRef = useRef();
        const numRef = useRef();
        const serviceIDRef = useRef();
        const pendingRef = useRef();
        const handleSubmit = (e) =>{
          const name = nameRef.current.value;
        const email = emailRef.current.value;
        const des = desRef.current.value;
        const image = imgRef.current.value;
        const number = numRef.current.value;
        const service_id = serviceIDRef.current.value;
        const pending = pendingRef.current.value;
        const newUser = { Uname: name, email: email, desc: des, image: image, number: number, service_id: service_id, status: pending }
        console.log(newUser)

        fetch('http://localhost:5000/serve',{
          method: "POST",
          headers : {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res=>res.json())
          .then(data => {
            if(data.insertedId){
              alert('place to Your Order');
            }
            e.target.reset()
          })
          e.preventDefault();
          console.log('clicked')
        }

    return (
        <div>
            <Button>Details Service</Button>
             <div className='ContractUs d-flex justify-content-around'>
          
           <div className='ContractUs-Text'>
           <Col>
        <Card className='service-card'>
        <Card.Img className="serviceImg" variant="top" src={booking.img} />
        <Card.Body className='place-name'>
          <Card.Title><h3>{booking.place}</h3></Card.Title>
          <Card.Text>
          <b>Total Cost: {booking.price}$</b> 
          </Card.Text>
        </Card.Body>
      </Card>
</Col>
            </div> 
            <div className='ContractUs-form'>
             <form onSubmit={handleSubmit}>
                            <input ref={nameRef} type="text" placeholder="Full name" value={users.displayName} />
                            <input ref={emailRef} type="text" placeholder="Email Address" value={users.email} />

                            <textarea ref={desRef} type="text" required id="lname" name="lastname" placeholder="Your address" /><br />
                            <input ref={numRef} type="number" required id="lname" placeholder="Phone Number" /><br />
                            <input ref={imgRef} type="hidden" value={booking.img} id="lname" />
                            <input ref={pendingRef} type="hidden" value="pending" id="lname" />
                            <input ref={serviceIDRef} type="hidden" value={booking._id} id="lname" />
                            <input type="submit" value="Place Order" />
                        </form>
            </div>
        </div>
        </div>
    );
};

export default DetailsServices;