import './Carts.css'

import React from 'react';

const Cart = (props) => {
    const { data } = props;
    const { picture, name, about, forage, timerequired } = data;
    console.log(data);
    return (
        <div>
            <div >
                <div className="card lg:h-[620px] lg:w-[360px] bg-white-100 shadow-xl border border-5">
                    <figure><img className='h-[140px] w-auto rounded-2xl m-2' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                        </h2>
                        <p className='lg:h-[250px]  border border-2'>{about}</p>
                        <p>For Age : 18-{forage}</p>
                        <p>Time required : {timerequired}s</p>
                        <div className="text-center">
                            <button className='btn btn btn-wide'>Add To List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;