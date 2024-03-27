import { useLoaderData } from 'react-router-dom';

import ShapeChart from "../components/ShapeChart";





const PagesToRead = () => {
  const books =useLoaderData();
  // console.log(books);
  return (
    <div>
       <h1></h1>
        <ShapeChart data={books}  />
      
       
       
    </div>
  );
};

export default PagesToRead;