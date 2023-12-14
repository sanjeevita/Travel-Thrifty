import React from "react";
import Login from "./Login";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Signup from "./Signup";
import background from "./assets/img2.jpg";

const Layout = ({ children }) => {
  const isTabletOrSmaller = window.innerWidth <= 768;
  const location = useLocation();
  const name = location.pathname.slice(1);

  return (
    <>
      <section
        className=" bg-customColor dark:bg-gray-900 bg-cover h-screen overflow-hidden bg-gray-300 bg-blend-multiply"
        style={{
          backgroundImage: isTabletOrSmaller ? "none" : `url(${background})`,
        }}
      >
        <nav class="flex p-2 mt-8 h-[10%]" aria-label="Breadcrumb">
          <ol class="inline-flex mx-auto items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a
                href="/"
                class="inline-flex items-center text-lg font-medium text-gray-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Travel Thrifty
              </a>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-200 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="ms-1 text-lg font-medium text-gray-200 md:ms-2 dark:text-gray-400">
                  {name}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div class="flex items-center justify-center h-[80%] flex-wrap lg:justify-start xl:ml-40 px-4 sm:px-6  mx-auto  lg:py-0">
          {children}
        </div>
      </section>
    </>
  );
};

export default Layout;
