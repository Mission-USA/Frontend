import React from 'react';
import { Link } from 'react-router-dom';

const InternshipHeader = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#111418]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Internship Finder</h2>
        </div>
        <div className="flex items-center gap-9">
          <Link to="/student/dashboard" className="text-[#111418] text-sm font-medium leading-normal">
            Home
          </Link>
          <Link to="/student/applications" className="text-[#111418] text-sm font-medium leading-normal">
            My Applications
          </Link>
          <Link to="/student/profile" className="text-[#111418] text-sm font-medium leading-normal">
            Profile
          </Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div
              className="text-[#60758a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              defaultValue=""
            />
          </div>
        </label>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvo6IffZkJ3mmqueDz83Ehzx238hqloKIZ0eq9BnuFAG4o4kLHlNdA335sN-Yg3HQo68eVRPobV2HSz2ynavftqW9W5OkjPlbMqzr0un6MfJ_sP2gno7s0ZTv6_C-dhX-IQ6md8cYt5K2AbSHpt-2xXvld0WlX7qs0jaT5TxEjw8hsscshrB12Y1MC2Z4h7LWYmAlErxQ4uCUuEBghmB4pp2E6qMVh4czbQ8cYJPLlUXeqHXi6x-T4iK-24GSei0X3yCO9njA4SfGW")'
          }}
        ></div>
      </div>
    </header>
  );
};

export default InternshipHeader; 