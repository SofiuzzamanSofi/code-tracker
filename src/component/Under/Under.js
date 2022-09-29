import React from 'react';
import './Under.css'

const Under = () => {
    return (
        <div className='text-center  text-black mt-8 border'>
            <div className='my-8'>
                <h1 className='lg:text-6xl md:text-2xl sm:text-sm'>Some Question and ans for you.</h1>
            </div>
            <div className='my-8'>
                <h1 className='text-xl my-2 px-8'>How does rreact work?</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >React is a Javascript library. It's build user interface. While building client-side apps,React implement a virtual DOM that is basically a DOM tree representation in JaVascript. So when it needs to read or write or anything changes to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.  </p>
                        <p>Unlike browser DOM elements, React elements are plain object and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's work keeping a DOM tree in it to speed up its manipulation.</p>
                        <p>Although React waw conceived to be used in the browser, because of its design it can also in the server with Node.js</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl my-2'>Props vs state?</h1>
                <div className='text-left px-8 text-justify'>
                    <div className="overflow-x-auto text-left px-8 table-color rounded-lg ">
                        <table className=" w-full  ">

                            <thead >
                                <tr className='w-full'>
                                    <th>Props</th>
                                    <th>State</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>Props are use to pass data from one component to another.</td>
                                    <td>The data is passed within the component only.</td>
                                </tr>

                                <tr>
                                    <td>It is immutable ( cannot be modified )</td>
                                    <td>It is Mutable ( can be modified )</td>
                                </tr>

                                <tr>
                                    <td>Props can be used with state and functional component.</td>
                                    <td>State can be used only with the state components/class component ( Before 16.0 )</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='my-8 '>
                <h1 className="text-xl my-2 px-8">What is the use of useEffect other than loading data.?</h1>
                <div className='text-left px-8 text-justify'>
                    <div className='text-left  text-justify table-color rounded-lg px-8 '>
                        <p >UseEffect have use to do so many works including of loading data. This Hook tell React that your component needs to do something after render. Its have a dependency parameter, So when the dependency is changes the useEffect render his under function work auto . Its a functional React component uses props and/or state to calculate the optional or other valuable value.  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Under;