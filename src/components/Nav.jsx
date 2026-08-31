import Link from "next/link";
import { FaAnglesDown } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="py-3">
      <div className="container flex items-center gap-7">
        <Link
          href="/"
          className="text-[17px]   text-gray-800 font-[600] hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          Fashion
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          Medicine
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          Furniture
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          Mobile
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          Electronics
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          Construction
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          Messages
        </Link>
        <Link
          href="/"
          className="text-[17px] text-gray-800 font-[600] hover:text-primary"
        >
          News
        </Link>

        <div className="relative group">
          <span className="text-[15px] text-gray-800 font-[600] hover:text-primary flex items-center gap-1 cursor-pointer">
            More <FaAnglesDown size={18} />{" "}
          </span>

          <div
            className="absolute top-full left-0 mt-2 bg-orange-100 shadow-md rounded-md w-[200px]
                  invisible opacity-0 transition-all duration-200 
                  group-hover:visible group-hover:opacity-100 z-50"
          >
            <ul>
              <Link
                href="/"
                className="text-[16px] text-gray-800 font-[600] hover:text-primary"
              >
                OLX
              </Link>
            </ul>
            <ul>
              <Link
                href="/"
                className="text-[16px] text-gray-800 font-[600] hover:text-primary"
              >
                JAMIN
              </Link>
            </ul>

            <ul>
              {" "}
              <Link
                href="/"
                className="text-[16px] text-gray-800 font-[600] hover:text-primary"
              >
                BIKE
              </Link>
            </ul>

            <ul>
              <Link
                href="/"
                className="text-[16px] text-gray-800 font-[600] hover:text-primary"
              >
                CAR
              </Link>
            </ul>

            <ul>
              <Link
                href="/"
                className="text-[16px] text-gray-800 font-[600] hover:text-primary"
              >
                ADVERTISEMENT
              </Link>
            </ul>

            <ul>
              <Link
                href="/"
                className="text-[16px] text-gray-800 font-[600] hover:text-primary"
              >
                JASHPUR
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
