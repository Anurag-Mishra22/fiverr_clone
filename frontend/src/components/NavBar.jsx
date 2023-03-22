import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const arr = ["Fiverr Business", "Explore", "🌐 English", "₹ INR"];
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Anurag",
    isSeller: true,
  };

  return (
    <div
      className={`${active ? "bg-white text-black" : "bg-black text-white"}
       "flex flex-col justify-center  max-w-[1400] mx-auto transition-all ease-in-out duration-200 sticky top-0 "
      `}
    >
      <div className="flex  px-10 justify-between items-center py-4">
        {/* LOGO......................... */}
        <Link to="/">
          <div>
            <span className="text-[34px] font-bold">fiverr</span>
            <span className="text-[#1dbf73] text-4xl">.</span>
          </div>
        </Link>
        {/* Links......................... */}
        <div className="flex items-center gap-x-6">
          {arr.map((link) => (
            <span className="font-[500]">{link}</span>
          ))}
          {!currentUser?.isSeller && (
            <span className="font-[500]">Become a Seller</span>
          )}
          <span className="font-[500]">Sign in </span>
          {!currentUser && (
            <button className="border border-white px-4 py-[6px] rounded-[5px] font-[500] hover:bg-[#1dbf73]">
              Join
            </button>
          )}
          {/* User */}
          {currentUser && (
            <div
              className="flex items-center gap-x-4 cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
                className="w-8 rounded-full object-contain "
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="absolute top-[50px] right-0 p-[20px] bg-white border rounded-md flex flex-col text-gray-400 w-[200px] font-[400] border-gray-400 ">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/gigs">Gigs</Link>
                      <Link to="/mygigs">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders">Orders</Link>
                  <Link to="/messages">Messages</Link>
                  <Link to="/">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Search....................... */}
      {active && (
        <>
          <hr className="text-gray-500 h-0" />
          <div className="">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
