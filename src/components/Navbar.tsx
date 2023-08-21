import { Fragment } from "react";

export const Navbar = (): JSX.Element => {
  return (
    <Fragment>
      <nav className="relative px-8 py-8 flex justify-between items-center bg-zinc-900 mb-10">
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-xl text-gray-400 hover:text-gray-500" href="#">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
