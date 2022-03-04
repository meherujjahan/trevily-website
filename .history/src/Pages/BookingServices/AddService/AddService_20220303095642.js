import React from 'react';
import { Button } from 'react-bootstrap';

const AddService = () => {
    return (
        <div>
            <Button>AddService</Button>
            <Container>
                <h2 className="h2-title text-danger">Add Event</h2>
                <hr />
                <br />
                <br />
                <form onSubmit={handlehtmlForm} >
                    <label className="label-text"><b>Your destination</b></label>
                    <input ref={nameRef} type="text" required placeholder="name" />
                    <label htmlFor="lname"><b>Description</b></label>
                    <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Event Description.." />
                    <label htmlFor="lname"><b>Image Link</b></label>
                    <input ref={imgRef} required type="text" id="lname" name="lastname" placeholder="Image Link.." />
                    <label htmlFor="lname"><b>Distance From Your Location</b></label>
                    <input ref={disRef} required type="text" id="lname" name="lastname" placeholder="Distance.." />
                    <label htmlFor="lname"><b>Package price</b></label>
                    <input ref={priceRef} required type="text" id="lname" name="lastname" placeholder="Price.." />
                    <label htmlFor="lname"><b>Room Services</b></label>
                    <input ref={roomRef} required type="text" id="lname" name="lastname" placeholder="Service.." />

                    <input type="submit" value="Submit" />
                </form>

            </Container>
       
        </div>
    );
};

export default AddService;