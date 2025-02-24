import { Outlet } from "react-router-dom";
import Home from "../../pages/Home";
import ListedBooks from "../../pages/ListedBooks";
import PagesToRead from "../../pages/PagesToRead";
import NavBar from "../NavBar";


const MainLayout = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
      <div className="h-20">
      <NavBar></NavBar>
      </div>
      
      <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default MainLayout;