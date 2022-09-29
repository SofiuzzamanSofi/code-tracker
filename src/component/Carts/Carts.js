import './Carts.css'

import React from 'react';

const Cart = (props) => {
    const { data } = props;
    const { picture, name, about, forage, timerequired } = data;
    return (
        <div className="card lg:h-[670px] lg:w-[300px] bg-white-100 shadow-xl border border-5">
            <figure><img className='h-[140px] w-auto rounded-2xl m-2' src={picture} alt="Shoes" /></figure>
            <div className="card-body text-black">
                <h2 className="card-title">
                    {name}
                </h2>
                <p className='lg:h-[300px] '>{about}</p>
                <p>For Age : 18-{forage}</p>
                <p>Time required : {timerequired}s</p>
                <div className="text-center">
                    <button className='btn btn btn-wide'>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;