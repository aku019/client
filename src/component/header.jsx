import React from 'react';

import coder from '../logo/coder.png';

const coderfun = ({ isModalOpen }) => {
    return (
        <div  className='h-auto text-white bg-primary p-13 lg:py-25 lg:p-0'>
            <div className='flex flex-col-reverse items-center justify-between lg:flex-row'>
                <h1 className='text-center lg:text-left lg:text-7xl py-13 lg:p-25 '>The Developer Repository</h1>
                <img src={coder} alt="dev" className='lg:pr-25 lg:h-96' />
            </div>
        </div>
    )
}

export default coderfun;