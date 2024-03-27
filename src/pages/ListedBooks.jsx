import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getStoredReadBook,getStoredWishlist,saveReadbookLocal,wislistLocalStore } from "../utility/localstorage";
import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  
        
  const readBook= getStoredReadBook();
  const wishlistBook= getStoredWishlist();

  const mergedArray = [...readBook, ...wishlistBook];
  const books =useLoaderData();
 
  const bookWishlist = books.filter(item => mergedArray.includes(item.id));
 
  const [sortBy, setSortBy] = useState('id'); // Initial sort field
  const [array, setArray] = useState([]);
  
  
  const handleSort = (e) => {
    const field = e.target.value;
    
    setSortBy(field);
    const sortedArray = [...bookWishlist].sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
    setArray(sortedArray);
  };

  const redBookKey = 'redBookKey';
  const readBookListing = array.filter(item => readBook.includes(item.id));
  saveReadbookLocal(redBookKey, readBookListing);


  const wislistKey = 'wislistKey';
  const wishlisting = array.filter(item => wishlistBook.includes(item.id));
  wislistLocalStore(wislistKey, wishlisting);


 
  

  
  
       
  
  






 
         
       
  const [tabIndex, setTabIndex] = useState(0);
  
  return (

    <div className='max-w-3xl px-6 py-16 mx-auto space-y-12 overflow-hidden'>
      

      
      <h2>Sort Array by Field</h2>
      <label htmlFor="sortField">Sort by:</label>
      <select id="sortField" value={sortBy} onChange={handleSort}>
        <option value="id">Rating</option>
        <option value="totalPages">Number of pages</option>
        <option value="yearOfPublishing">Publishing</option>
        {/* Add more options for other fields if needed */}
      </select>
   


      <article className='space-y-8 '>
        
        <div className='space-y-6'>
          
          
              


          
         
          <div className='flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap '>
            <Link
              to={``}
              onClick={() => setTabIndex(0)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? 'border border-b-0' : 'border-b'
              }  `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4'
              >
                <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
              </svg>
              <span>Read</span>
            </Link>
            <Link
              to={`Wishlist`}
              onClick={() => setTabIndex(1)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? 'border border-b-0' : 'border-b'
              }  `}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-4 h-4'
              >
                <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
                <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
              </svg>
              <span>Wishlist</span>
            </Link>
           
          </div>
        </div>
       
        <Outlet></Outlet>
      </article>
    </div>
  );
};

export default ListedBooks;