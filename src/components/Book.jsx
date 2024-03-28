import { NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Book = ({book}) => {
  const {id,tags,image} =book;
  console.log(image);
  return (
      <NavLink to={`/Book/${id}`} className="w-full">
          <div className="card  bg-base-100 shadow-2xl p-6 px-5 pt-5">
          
          

          <div className="rounded-xl w-[326px] h-[230px] bg-[#F3F3F3] mx-auto my-auto">
          <figure className="">
          <img src={image} alt="Shoes" className="rounded-xl w-[134px] h-[166px] mx-auto mt-[30px]"  />
          </figure>
          </div>
          <div className="card-body items-left text-left">
            <div>
              <span>{book.tags.map((item, index) => (
          <span className="m-2 p-2 text-[7px] text-[#23BE0A] rounded-full bg-slate-100 " key={index}>{item}</span>
        ))}</span>
        
      
              <h1 className="font-bold text-[24px] my-5">{book.bookName}</h1>
              <h2>by:{book.author}</h2>

              <div className="divider"></div>
            </div>
            <div className="flex justify-between">
              <span>{book.category}</span>
              <span className="flex justify-between gap-3 h-1/2">{book.rating} <FaRegStar className="h-[15px] mt-[5px]"></FaRegStar></span>
            </div>
          </div>
          </div>
      </NavLink>
        
    
  );
};

export default Book;