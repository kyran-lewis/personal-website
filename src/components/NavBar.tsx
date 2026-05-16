import { useState } from "react";

function NavBar() {
  return (
    <nav className="w-full bg-amber-200">
      <div className="container py-6 flex items-center justify-between">
        <div className="text-2xl text-gray-800">kyranlewis.co.uk</div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li className="font-bold">
              <a>Home</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
