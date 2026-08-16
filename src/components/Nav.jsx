import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-3">
        <div className="container flex items-center gap-7">
            <Link href= '/' className='text-[17px]   text-gray-800 font-[600] hover:text-primary'>Home</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Fashion</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Medicine</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Furniture</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Mobile</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Electronics</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Construction</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>Messages</Link>
            <Link href= '/' className='text-[17px] text-gray-800 font-[600] hover:text-primary'>News</Link>
            

        </div>
      
    </nav>
  );
};

export default Nav;