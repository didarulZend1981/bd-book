import { NavLink } from "react-router-dom";


const NavBar = () => {
  const links = <>
  
  <li><NavLink className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-2' : 'font-bold mx-2'
            } to="/" >Home</NavLink></li>
  <li><NavLink  className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-1' : 'font-bold mx-1'
            } to="/ListedBooks">Listed Books</NavLink></li>
  <li><NavLink className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-2' : 'font-bold mx-2'
            } to="/PagesToRead">Pages To Read</NavLink></li>
  
  <li><NavLink className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-2' : 'font-bold mx-2'
            } to="/Faq">Faq</NavLink></li>
   <li><NavLink className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-2' : 'font-bold mx-2'
            } to="/About">About US</NavLink></li>
  
  
 
</>

  
  return (
    <div className="navbar bg-base-100 border-2 px-4 fixed z-10 w-10/12 max-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="text-xl text-[#232121] font-black">BD BOOK</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn bg-[#23BE0A] text-[#FFFFFF] hover:bg-[#59C6D2]">Sign In</a>
    <a className="btn bg-[#23BE0A] text-[#FFFFFF] hover:bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
  );
};

export default NavBar;