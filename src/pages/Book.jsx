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
  <div className="hero-content flex-col lg:flex-row gap-20">
    <div className="w-1/2 bg-[#F3F3F3] h-[611px] py-[70px]">
       <img src={book.image} height="50px" className="max-w-sm rounded-lg shadow-2xl  h-[400px] w-[350] mx-auto skew-y-30" />
   
    </div>
     
    <div className="w-1/2">
      <h1 className="font-bold text-[40px]">{book.bookName}</h1>
      
      <h3 className="m-y-[30px]">by{book.author}</h3>
      <div className="divider m-[0px]"></div>
      <span>{book.category}</span>
      <div className="divider m-[5px]"></div>
      <p className="py-6"><strong className="text-[16px] Font-bold">Review:</strong>{book.review}</p>
      <h3>Tag:
      
      <span>{book.tags.map((item, index) => (
          <span className="m-2 p-2 text-[10px] text-[#23BE0A] rounded-full bg-slate-100 " key={index}>{item}</span>
        ))}</span></h3>
        <div className="divider m-[5px]"></div>
      <div className="mb-20px">
        <div className="flex gap-20">

          <div>
            <h5 className="loading-20">Number of Pages:</h5>
            <h5 className="loading-20">Publisher:</h5>
            <h5 className="loading-20">Year of Publishing:</h5>
            <h5 className="loading-20">Rating</h5>
          </div>
          <div>
            <h5 className="loading-20">{book.totalPages}</h5>
            <h5 className="loading-20">{book.publisher}</h5>
            <h5 className="loading-20">{book.yearOfPublishing}</h5>
            <h5 className="loading-20">{book.rating}</h5>
          </div>
        
        </div>
        
      </div>
      <div className="flex gap-20 mt-50">
      <button onClick={handleReadBook} className="btn btn-primary bg-[#FFF] text-[#131313] border-1 border-[#131313] hover:bg-[#50B1C9] hover:text-[#FFFF]">Read</button>
      <button onClick={handleWish} className="btn btn-primary bg-[#FFF] text-[#131313] border-1 border-[#131313] hover:bg-[#50B1C9] hover:text-[#FFFF]">Wishlist</button>
      </div>
      
    </div>


  </div>
</div>
<ToastContainer />
    </div>
  );
};

export default Book;