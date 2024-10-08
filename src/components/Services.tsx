// import React from 'react'

import Strings from "../Shared/Strings";

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTEND,
      desc: Strings.FRONTEND_DES,
      logo: "",
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DES,
      logo: "/backend.png",
    },
    {
      id: 2,
      title: Strings.ONLINE,
      desc: Strings.ONLINE_DES,
      logo: "/backend.png",
    },
  ];

  return (
    <div className="px-12 mt-24 mb-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-blue-950 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2>{Strings.SERVICES}</h2>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <div className="w-[20px] h-[7px] bg-blue-950 rounded-full"></div>
      </div>

      <div className="flex justify-around mt-16">
        {servicesList.map((item) => (
          <div
            className="flex flex-col items-center justify-center gap-6 text-center"
          >
            <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[80px] h-[80px]
                p-5 hover:scale-110 transition-all cursor-pointer text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            <h2 className="mt-5 font-bold">{item.title}</h2>
            <h2 className="text-sm text-gray-400">{item.desc}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
