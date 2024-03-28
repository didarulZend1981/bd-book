import { useLoaderData } from "react-router-dom";
import Baner from "../components/Baner";
import Book from "../components/Book";



const Home = () => {
  const books =useLoaderData();
  // console.log(books.length);
  return (
    <div>
      
      <Baner></Baner>
      
      <div className="grid  justify-between grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {
                  books.map(book=><Book key={book.bookId} book={book}></Book>)
                    
                }
      </div>
     
    </div>
  );
};

export default Home;