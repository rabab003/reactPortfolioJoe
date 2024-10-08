// import React from "react";

function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[120px] border-r-[1px]  mt-[90px]"></div>
      <div className="h-[10px] w-[10px] bg-blue-900 rounded-full"></div>
      <h2 className="mt-5 capitalize font-medium text-[13px] tracking-widest">
        Hello my name is
      </h2>

      <h2 className="text-[70px] font-bold tracking-widest capitalize">
        joe <br />
        rogan
      </h2>

      <img
        src="/public/prof.jpg"
        className="rounded-full w-[160px] h-[160px] object-cover bg-blue-950 p-3 mt-4"
        alt=""
      />
    </div>
  );
}

export default Introduction;
