import React, { useEffect, useState } from 'react';
import './Body.css'
import Carts from '../Carts/Carts';
import Tracker from '../Tracker/Tracker';


const Body = () => {

    const [codeData, setCodeData] = useState([]);
    const [dataPack, setDatapack] = useState([]);


    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setCodeData(data));
    }, []);

    const addToInformation = (data) => {
        const newDataObj = [...dataPack, data]
        setDatapack(newDataObj);
    }
    return (
        <div className='md:grid lg:grid-cols-4 gap-[2px] md:grid-cols-8  flex flex-col-reverse'>

            <div className='lg:col-span-3 md:col-span-6'>
                <div className='m-2 grid gap-6  xl:grid-cols-3 md:grid-cols-2  sm:grid-cols-1'>
                    {
                        codeData.map(data => <Carts key={data.id} addToInformation={addToInformation} data={data} />)
                    }
                </div>
            </div>
            <div className='lg:col-span-1 md:col-span-2'>
                <Tracker dataPack={dataPack} />
            </div>
        </div>
    );
};

export default Body;