import { useLoaderData } from "react-router-dom";
import Baner from "../components/Baner";
import Book from "../components/Book";



const Home = () => {
  const books =useLoaderData();
  // console.log(books.length);
  return (
    <div>
      
      <Baner></Baner>
      <h2>Home Page{books.length}</h2>
      <div className="grid justify-center grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
      {
                  books.map(book=><Book key={book.bookId} book={book}></Book>)
                    
                }
      </div>
     
    </div>
  );
};

export default Home;