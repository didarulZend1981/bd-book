import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredWishlist,setWishList } from "../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { FaPage4 } from "react-icons/fa";
const Wishlist = () => {

  const books =useLoaderData();
  const [readWishLists,setWishLists] =useState([]);
  const setWishListLoad = setWishList('wislistKey');
  // console.log('books');
  useEffect(() =>{
    // console.log('didar')
    const storedReadBookIds= getStoredWishlist();
    if(books.length > 0){
      const booksRead = books.filter(book =>storedReadBookIds.includes(book.id))
      // console.log(booksRead);
      setWishLists(booksRead);
    }
},[])

  return (
    <div>
      <h2>WishList .{readWishLists.length}</h2>
      {readWishLists.map(item => (
      <div className="card lg:card-side bg-base-100 shadow-xl h-[277px] my-[20px] py-[15px] px-[15px]">
        <div className="w-1/4 bg-[#f3f3f3] rounded-xl py-10">
          <img src={item.image} alt={item.bookName} className="mx-auto h-[172px] w-[123px]"/>
      </div>
          <div className="ml-4 w-3/4">
              <h2 className="text-[24px] font-bold">{item.bookName}</h2>
              <h2 className="text-[16px] my-2">By:{item.author}</h2>
              <div className="flex gap-3 my-2">
                <span>Tag:{item.tags.map((item, index) => (
                  <span className="m-2 p-2 text-[10px] text-[#23BE0A] rounded-full bg-slate-100 " key={index}>{item}</span>
                ))}</span>
                        
                <span className="flex gap-3 h-[20px]"><CiLocationOn className="h-[15px]"></CiLocationOn> Year:{item.yearOfPublishing}</span>
              </div>
               <div className="flex gap-3 my-5">
                <span className="flex gap-3"><RiTeamLine></RiTeamLine> Publisher:{item.publisher}</span>
                <span className="flex gap-3">    <FaPage4> </FaPage4>Page: {item.totalPages}</span>
               </div>
               <div className="divider p-0 mt-0"></div>
              <div className="flex gap-5">
              <span className="m-2 p-2 text-[15px] p-2 text-[#328EFF] rounded-full bg-[#e0eeff]">Category:{item.category}</span>
               <span className="m-2 p-2 text-[15px] p-2 text-[#FFAC33] rounded-full bg-[#fff3e0]">Rating:{item.rating}</span>
               <span className="m-2 p-2 text-[15px] p-2 text-[#fff] rounded-full bg-[#23BE0A]">
               <NavLink to={`/Book/${item.id}`}>
                
                View Deatils </NavLink>
               </span>
              </div>
          </div>
      </div>
      ))}
    </div>
  );
};

export default Wishlist;