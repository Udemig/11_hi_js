import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../hooks/useAuth';

function Layout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link to="/" className="flex-shrink-0 flex items-center">
                    <ShoppingBagIcon className="h-8 w-8 text-primary" />
                    <span className="ml-2 text-xl font-bold text-gray-900">
                      Shoes Store
                    </span>
                  </Link>
                </div>

                <div className="flex items-center">
                  <Menu as="div" className="ml-3 relative">
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none">
                      <UserCircleIcon className="h-8 w-8 text-gray-400" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => logout.mutate()}
                              className={`${
                                active ? 'bg-gray-100' : ''
                              } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout; 