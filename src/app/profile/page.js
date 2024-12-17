import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaUserEdit, FaKey, FaListAlt, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
    const profileOptions = [
        { id: 1, name: 'Update Profile', link: '/profile/update', icon: <FaUserEdit /> },
        { id: 2, name: 'Change Password', link: '/profile/change-password', icon: <FaKey /> },
        { id: 3, name: 'My Tasks', link: '/tasks', icon: <FaListAlt /> },
        { id: 4, name: 'Logout', link: '/logout', icon: <FaSignOutAlt /> },
    ];
    return (
        <div className='mt-4 p-2 rounded-lg w-full m-auto flex items-center justify center flex-col'>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[200px] h-[200px] rounded-full overflow-hidden border-2 '>
                    <Image src="/user.svg" alt="My SVG" width={200} height={200} />
                </div>
            </div>

            <h1 className='text-2xl font-semibold mt-4'>Welcome, User!</h1>

            <ul className='mt-6 w-full max-w-80 '>
                {profileOptions.map((option) => (
                    <li key={option.id} className='w-full'>
                        <Link
                            href={option.link}
                            className='flex items-center p-3 text-lg rounded-md text-gray-800  hover:text-gray-500 transition-all duration-200'
                        >
                            <span className='text-2xl mr-4 '>{option.icon}</span>
                            <span className=''>{option.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Profile