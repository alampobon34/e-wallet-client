import React from "react";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="bg-base-100 border-b sticky top-0 z-10">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex-1">
          <a className="font-semibold text-md">eWallet</a>
        </div>
        <div className="flex-none">
          <label
            htmlFor="my-drawer"
            className="cursor-pointer drawer-button mr-2"
          >
            <IoMdMenu className="size-6" />
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
