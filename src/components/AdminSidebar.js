import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";

export default function AdminSidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}>
        <div className='flex-col items-stretch min-h-full flex-nowrap px-0 relative'>
          <a
            target='_blank'
            rel='noreferrer'
            className='mt-2 text-center w-full inline-block'>
            <H6 color='gray'>Admin Dashboard</H6>
          </a>
          <div className='flex flex-col'>
            <hr className='my-4 min-w-full' />

            <ul className='flex-col min-w-full flex list-none'>
              <li className='rounded-lg mb-4'>
                <NavLink
                  to='/Admin/reclamations'
                  exact
                  className={(navData) =>
                    !navData.isActive
                      ? "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                      : "flex items-center gap-4 text-sm  font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  }>
                  <Icon name='dashboard' size='2xl' />
                  Réclamations
                </NavLink>
              </li>
              <li className='rounded-lg mb-2'>
                <NavLink
                  to='/Admin/infos'
                  className={(navData) =>
                    !navData.isActive
                      ? "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                      : "flex items-center gap-4 text-sm  font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  }>
                  <Icon name='groups' size='2xl' />
                  Employers
                </NavLink>
              </li>
              <li className='rounded-lg mb-2 '>
                <NavLink
                  to='/Admin/Ajout'
                  className={(navData) =>
                    !navData.isActive
                      ? "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                      : "flex items-center gap-4 text-sm  font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  }>
                  <Icon name='add' size='2xl' />
                  Ajouter vos employers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
