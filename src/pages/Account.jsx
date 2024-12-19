import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Account = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white border-r shadow-sm">
          <ul className="space-y-4 p-6">
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-l-4 border-blue-600 pl-2"
                    : "text-gray-600 hover:text-blue-600"
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-l-4 border-blue-600 pl-2"
                    : "text-gray-600 hover:text-blue-600"
                }
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="selling-orders"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-blue-600 border-l-4 border-blue-600 pl-2"
                    : "text-gray-600 hover:text-blue-600"
                }
              >
                Selling Orders
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white shadow-md rounded-lg mx-4 mt-6 lg:mt-0 lg:mx-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Account;
