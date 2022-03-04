import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const ManageOrder = () => {

    const [AllOrder, setAllOrder] = useState([])
    const [reload, setReload] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/myOrder')
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
                console.log(data)
            })
    }, [reload])
    const handleUpdate = (_id) => {
        const confirm = window.confirm('are uou want to update')
        if (confirm) {
            fetch(`http://localhost:5000/myOrder/${_id}`, {
                method: "put",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setReload(!reload)
                    }

                })
        }
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/myOrder/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = AllOrder.filter(order => order._id !== id)
                        setAllOrder(remaining)
                    }

                })
        }

    }
    
    return (
        <Row className="my-5">
        <Col md={12} sm={6} lg={12}>
            <div>
              <Button>Manage Order</Button>
                <table className="table table-hover w-100  my-3">
                    <thead>
                        <tr className="text-muted">
                            <th scope="col">Image</th>
                            <th scope="col"> Name</th>
                            <th scope="col">Code</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                </table>
                {
                    AllOrder.map(p => (
                        <tr className="tr-edit">
                            <td className="mb-2"><img className="" src={p.image} alt="" style={{ width: "90px", height: "40px" }} /></td>
                            <td className="text-muted">{p.Uname}</td>
                            <td className="text-muted">{p.service_id}</td>
                            <td className="">*{p.status} <button  onClick={() => handleUpdate(p._id)}>update</button></td>
                            <td className="text-muted"><button  onClick={() => handleDelete(p._id)}>delete</button></td>
                           
                           
                        </tr>
                    ))
                }

            </div>
        </Col>
    </Row>
    );
};

export default ManageOrder;