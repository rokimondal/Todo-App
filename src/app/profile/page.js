import Image from 'next/image';
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
    return (
        <div className='mt-4 p-2 rounded-lg w-full m-auto flex items-center justify center flex-col'>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                    <Image src="/user.svg" alt="My SVG" width={200} height={200} />
                </div>
            </div>
        </div>
    )
}

export default Profile