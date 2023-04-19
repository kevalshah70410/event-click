import React from "react";
import { Link } from "react-router-dom";
function Selectcategory() {
  return (
    <div className="flex min-h-10 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 pt-8 pb-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3">
        <Link to={"/Prewedding"}>
          <div className="group cursor-pointer items-center justify-center overflow-hidden transition-shadow  rounded-lg  hover:shadow-xl hover:shadow-[#ffffff]/80">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 "
                src="https://i.pinimg.com/originals/70/5b/f5/705bf59d670d25f9528459de35816b11.jpg"
                alt="img1"
              />
            </div>
            <div className="bg-white p-4">
              <p className="text-3xl">Pre-Wedding</p>
            </div>
          </div>
        </Link>
        <Link to={"/Wedding"}>
          <div className="group cursor-pointer items-center justify-center overflow-hidden transition-shadow  rounded-lg  hover:shadow-xl hover:shadow-[#ffffff]/80">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500"
                src="https://www.dipakstudios.com/gallery/145941224311.jpeg"
                alt="img2"
              />
            </div>
            <div className="bg-white p-4">
              <p className="text-3xl">Wedding</p>
            </div>
          </div>
        </Link>
        <Link to={"/Party"}>
          <div className="group cursor-pointer items-center justify-center overflow-hidden transition-shadow  rounded-lg  hover:shadow-xl hover:shadow-[#ffffff]/80">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 hover:ease-in-outr"
                src="https://imgs.search.brave.com/S9KMMjQmqimNebWE9h1FkbIjMtK0uSCMnhOfHAZaE5o/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9W/WHdheGlBMlYwNC9t/YXhyZXNkZWZhdWx0/LmpwZw"
                alt="img3"
              />
            </div>
            <div className="bg-white p-4">
              <p className="text-3xl">Party</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Selectcategory;
