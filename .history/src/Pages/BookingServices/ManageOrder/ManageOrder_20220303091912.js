import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const ManageOrder = () => {

    const [allOder, setAllOder] = useState([]);
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
                            <td className="">*{p.status} <button >update</button></td>
                            <td className="text-muted"><button >delete</button></td>
                            {/* onClick={() => handleUpdate(p._id)}
                            onClick={() => handleDelete(p._id)} */}
                        </tr>
                    ))
                }

            </div>
        </Col>
    </Row>
    );
};

export default ManageOrder;