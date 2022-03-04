import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';

const MyOrder = () => {
    const {user: users} = useAuth()
    return (
        <div className="my-5">
       <Button>Your Order</Button>
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
            Order.filter(p => p.Uname === users.displayName).map(hello => (
                <tr className="tr-edit">
                    <td className="mb-2"><img className="" src={hello.image} alt="" style={{ width: "90px", height: "40px" }} /></td>
                    <td className="text-muted">{hello.Uname}</td>
                    <td className="text-muted">{hello.service_id}</td>
                    <td className="">*{hello.status}</td>
                    <td className="text-muted"><button onClick={() => handleDelete(hello._id)}>delete</button></td>
                </tr>
            ))
        }
    </div >
    );
};

export default MyOrder;