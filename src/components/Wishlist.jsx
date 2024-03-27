import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist,setWishList } from "../utility/localstorage";

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
      <ul>
        {setWishListLoad.map(item => (
          <li key={item.id}>{item.id}: {item.bookName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;