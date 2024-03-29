import React, {useState} from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-almost_black" role='navigation'>
            <div className="flex justify-between items-center  h-16 px-8 md:px-16">
              <div className="flex text-white font-bold text-3xl">
                Tommy
              </div>
              <div className=" flex hidden text-white font-medium md:block ml-10 flex items-baseline space-x-4">
                  <Link
                    exact to='/'
                    className='p-4 hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E"}}
                  >
                    Home
                  </Link>

                  <Link
                    to='/commands'
                    className='p-4 hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E"}}
                  >
                    Commands
                  </Link>

                  <Link
                    to='/support'
                    className='p-4 hover:text-fuchsia focus:text-fuchsia' activeStyle={{color: "#EB459E"}}
                  >
                    Support
                  </Link>

                  <Link
                    to='/login'
                    className=' transition duration-500 ease-in-out p-4 rounded-full py-3 px-6 bg-white text-almost_black hover:bg-fuchsia hover:text-white focus:text-fuchsia' activeStyle={{color: "#EB459E"}}
                  >
                    Login
                  </Link>
              </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-almost_black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-0 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-8 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  exact to='/'
                  className=" text-white hover:bg-gray-700 hover:text-fuchsia block px-3 py-2 rounded-md text-base font-medium" activeStyle={{color: "#EB459E"}}
                >
                  Home
                </Link>

                <Link
                   to='/commands'
                  className=" text-white hover:bg-gray-700 hover:text-fuchsia block px-3 py-2 rounded-md text-base font-medium" activeStyle={{color: "#EB459E"}}
                >
                  Commands
                </Link>

                <Link
                  to='/support'
                  className=" text-white hover:bg-gray-700 hover:text-fuchsia block px-3 py-2 rounded-md text-base font-medium" activeStyle={{color: "#EB459E"}}
                >
                  Support
                </Link>

                <Link
                  to='/login'
                  className=" text-white hover:bg-gray-700 hover:text-fuchsia block px-3 py-2 rounded-md text-base font-medium" activeStyle={{color: "#EB459E"}}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

 export default Navbar;