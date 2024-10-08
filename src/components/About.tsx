// import React from "react";
import Strings from "../Shared/Strings";


export default function About() {
  return (
    <>
      <div className="flex flex-col items-center mt-12 text-center px-44">
        <h2 className="text-[30px] font-bold">{Strings.ABOUT_HEADING}</h2>

        <span className="mt-16 text-4xl">,,</span>
        <p className="my-5 text-zinc-500 text-[14px] rounded-full">
          {Strings.ABOUT_DES}
        </p>
        <span className="text-4xl">,,</span>
      </div>
    </>
  );
}
