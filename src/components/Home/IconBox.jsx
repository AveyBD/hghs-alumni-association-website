import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";

const IconBox = () => {
  return (
    <>
      {/*<!-- Component: User profile card --> */}
      <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure className="p-6 pb-0">
          <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full">
            <span>
              <HiOutlineUserGroup className="h-20 w-20 border rounded-full p-1" />
            </span>
          </span>
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">Total Member</h3>
            <p className=" text-slate-400">2547</p>
          </header>
        </div>
        {/*  <!-- Action base sized with lead icon buttons  --> */}
      </div>
    </>
  );
};

export default IconBox;
