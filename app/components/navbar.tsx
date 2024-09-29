import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className=" bg-slate-300 w-auto h-20 m-2">
        <div className="flex flex-row">
          <div className="basis-1/7 text-black font-bold text-2xl py-10 pr-10">
            <Link href="/" >
            Home
            </Link>
          </div>
          <div className="basis-1/7 text-black font-bold text-2xl py-10 pr-10">
            <Link href="/about" >
            About
            </Link>
          </div>
          <div className="basis-1/7 text-black font-bold text-2xl py-10 pr-40">
            <Link href="/help" >
            Help
            </Link>
          </div>
          <div className="basis-2/5 text-black text-xl py-10 pr-10">
            <div className="bg-white text-center">Search the data</div>
          </div>
          <div className=" py-10">
            <button className="border border-black rounded-2xl font-bold pr-4 pl-4 flex flex-row-reverse">
              Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
