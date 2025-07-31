import React from 'react';
import vite from '/vite.svg';

function Header() {
  return (
    <div>
      <ul className="flex justify-between items-center bg-gray-800 text-white p-4">
        <li><img src={vite} alt="" /></li>
        <li>
            <ul className="flex space-x-10">
                <li>Home</li>
                <li>Register</li>
                <li>Login</li>
                <li>About Us</li>
                <li>Careers</li>
            </ul>
        </li>
        <li>
            <form action="">
                <input type="text" name="" id=""className='mr-3 text-black rounded-md' />
                <button type="submit" className="bg-blue-500 text-white px-4 rounded-xl ">Search</button>
            </form>
        </li>
      </ul>
    </div>
  );
}

export default Header;
