import React from 'react'; import './Tracker.css'
import imgInfo from '../img/info-pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faInfo } from '@fortawesome/free-solid-svg-icons'


const Tracker = () => {
    return (
        <div className="text-black sticky top-0 border-orange-700">
            <div>
                <p >Personal Information <FontAwesomeIcon icon={faInfo} /></p>
                <img className='h-12 m-auto rounded-full' src={imgInfo} alt="" />
                <div className='text-sm'>
                    <p>Md. Sofiuzzaman Sofi</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="flex justify-between gap-6 border p-3 rounded-md w-auto my-4">
                <div >
                    <p>60 <span className='text-sm'>kg</span></p>
                    <p className='text-sm'>Weight</p>
                </div>
                <div>
                    <p>5.5 <span></span></p>
                    <p className='text-sm'>Height</p>
                </div>
                <div>
                    <p>25 <span className='text-sm'>yrs</span></p>
                    <p className='text-sm'>Age</p>
                </div>
            </div>
            <div className='my-6'>
                <p className='text-left '>Add A Break</p>
                <div className="flex justify-between gap-6 border p-3 rounded-md w-auto my-2 bg-gray-200">
                    <p className='text-sm rounded-full bg-gray-100 p-2'><span>10</span>s</p>
                    <p className='text-sm rounded-full bg-gray-100 p-2'><span>20</span>s</p>
                    <p className='text-sm rounded-full bg-gray-100 p-2'><span>30</span>s</p>
                    <p className='text-sm rounded-full bg-gray-100 p-2'><span>40</span>s</p>
                    <p className='text-sm rounded-full bg-gray-100 p-2'><span>50</span>s</p>
                </div>
            </div>
            <div>
                <p className='text-left '>Exercise Details</p>
                <div className="flex justify-between gap-6 border p-3 rounded-md w-auto my-2 bg-gray-200">
                    <p className='text-lg rounded-full p-2'>Exercise time</p>
                    <p className='text-lg rounded-full  p-2'><span>200</span> second</p>
                </div>
            </div>
            <div>
                <div className="flex justify-between gap-6 border p-3 rounded-md w-auto my-2 bg-gray-200">
                    <p className='text-lg rounded-full p-2'>Break time</p>
                    <p className='text-lg rounded-full  p-2'><span>15</span> second</p>
                </div>
            </div>
            <div className='button mt-12' >
                <button className='review-complete'>Action Completed<FontAwesomeIcon icon={faNetworkWired} /> </button>
            </div>
        </div>
    );

};

export default Tracker;