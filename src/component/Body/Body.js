import React, { useEffect, useState } from 'react';
import './Body.css'
import Carts from '../Carts/Carts';
import Tracker from '../Tracker/Tracker';






const Body = () => {

    const [codeData, setCodeData] = useState([]);


    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setCodeData(data));
    }, []);
    return (
        <div className=' body-container'>
            <div className='m-2 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    codeData.map(data => <Carts key={data.id} data={data} />)
                }

            </div>
            <div >
                <Tracker />
            </div>
        </div>
    );
};

export default Body;