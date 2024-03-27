import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook,setReadBook } from "../utility/localstorage";


const Read = () => {
  const books =useLoaderData();
  const [readBooks,setReadBooks] =useState([]);
   const readbookLoad = setReadBook('redBookKey');

  useEffect(() =>{
      const storedReadBookIds= getStoredReadBook();
      if(books.length > 0){
        const booksRead = books.filter(book =>storedReadBookIds.includes(book.id))
        // console.log(booksRead);
        setReadBooks(booksRead);
      }
  },[])
  

  return (
    <div>
      <h2>Read...{readBooks.length}</h2>
      
      <ul>
        {readbookLoad.map(item => (
          <li key={item.id}>{item.id}: {item.bookName}</li>
        ))}
      </ul>

      
    </div>
  );
};

export default Read;