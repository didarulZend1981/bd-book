import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook, saveWishlistBook,getStoredReadBook,getStoredWishlist} from "../utility/localstorage";

const Book = () => {
  const books =useLoaderData()
  const {id} = useParams();
  const idInt = parseInt(id);
  const book = books.find(book =>book.id === idInt)
  // console.log(book.bookName);
  const {idw} = useParams();
  const idIntw = parseInt(idw);
  const bookw = books.find(book =>book.id === idIntw)


  
  const {image,tags} =book;
  const handleReadBook = ()=>{
    // saveReadBook(idInt);
    const bookRead = getStoredReadBook();
    const indexOfValue = bookRead.indexOf(idInt);
    //  console.log(indexOfValue);
     if(indexOfValue===0){
         toast('all ready read book added');
     } else{

      saveReadBook(idInt)
      toast('add to read book');
     }

    
  }


  const handleWish = ()=>{
    const bookRead = getStoredReadBook();
    const indexOfValue = bookRead.indexOf(idInt);
     console.log(indexOfValue);
     if(indexOfValue===0){
         toast('All ready you read book so no add wishlist');
     } else{
          const bookWish = getStoredWishlist();
          const bookwishva = bookWish.indexOf(idInt);
          if(bookwishva===0){
          toast('all ready you add wishlish');

          } 
          else{

            saveWishlistBook(idInt);
            toast('successfully you add wishlish');

          }



      
     }
    
    
    
    
    
    
  }
  
  
  return (
    <div>
      

      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
  
    <img src={book.image} className="max-w-sm rounded-lg shadow-2xl h-[500px] w-[500px]" />
    
    <div>
      <h1 className="text-5xl font-bold">{book.bookName}</h1>
      
      <h3>by{book.author}</h3>
      
      <span>{book.category}</span>
      <p className="py-6">review:{book.review}</p>
      <h3>Tag:
      
        {tags.map}</h3>
      <div>
        <div className="flex gap-20">
          <span>Number of Pages:</span>
          <span>{book.totalPages}</span>
        </div>
        <div className="flex gap-20">
          <span>Publisher:</span>
          <span>{book.publisher}</span>
        </div>
        <div className="flex gap-20">
          <span>Year of Publishing:</span>
          <span>{book.yearOfPublishing}</span>
        </div>
        <div className="flex gap-20">
          <span>Rating</span>
          <span>{book.rating}</span>
        </div>
      </div>
      <div className="flex gap-20">
      <button onClick={handleReadBook} className="btn btn-primary">read</button>
      <button onClick={handleWish} className="btn submit btn-primary">Wishlist</button>
      </div>
      
    </div>
  </div>
</div>
<ToastContainer />
    </div>
  );
};

export default Book;