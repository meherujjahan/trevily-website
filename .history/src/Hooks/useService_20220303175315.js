import { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices ] =useState([])
    useEffect(()=>{
        fetch('https://stormy-chamber-95883.herokuapp.com/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        {
            services,
            setServices
        }
    );
};

export default useService;