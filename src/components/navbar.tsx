import Searchbar from "./searchbar"
import SideBar from "./sidebar"
import "../app/styles/navbar.css";
import Dropdown from "./dropdown";

function Navbar() {
  return (
    <div className="navbar">
      <div className="btn">
        <SideBar/>
      </div>
      <div className="tittle">
        <h1>InnovaTube</h1>
      </div>
      <div className="search">
        <Searchbar/>
      </div>
      <div className="user">
        <Dropdown/>
      </div>
    </div>
  )
}

export default Navbar