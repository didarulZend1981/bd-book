import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];







const ShapeChart = () => {

  const books =useLoaderData();
  const [readBooks,setReadBooks] =useState([]);
  useEffect(() =>{
      const storedReadBookIds= getStoredReadBook();
      if(books.length > 0){
        const booksRead = books.filter(book =>storedReadBookIds.includes(book.id))
        // console.log(booksRead);
        setReadBooks(booksRead);
      }
  },[])

  
  
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
    C${x + width / 3},
    ${y + height} ${x + width / 2},
    ${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  

  return (
    <BarChart
    width={1500}
    height={300}
    data={readBooks}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    
    
    <XAxis dataKey='bookName' />
    <YAxis />
    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
    

      {readBooks.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
      ))}
    </Bar>
  </BarChart>
  );
};

export default ShapeChart;


