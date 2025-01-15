import Login from "components/Login"
import Signup from "components/Signup"
import searchSvg from "assets/search.svg"
import DropdownsList from "components/DropdownsList"

function Header() {
    return (
      <div className="max-w-[1170px] my-6 mx-auto flex justify-between items-center font-semibold cursor-pointer mb-10">
        <ul className="flex gap-4">
          <li><a href="#">Home</a></li>
          <DropdownsList categoryLabel="Genre" subCategories={["Genre1", "Genre2"]}/>
          <li>Country</li>
        </ul>

        <div className="flex relative max-w-[416px] w-[416px]">
          <input className="py-3 px-6 rounded-3xl w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Search movies..."></input>
          <div className="absolute right-6 bottom-[50%] translate-y-1/2">
           <img src={searchSvg} />
          </div>
        </div>

        <ul className="flex gap-4">
          <li>Movies</li>
          <li>Series</li>
          <li>Animation</li>
        </ul>

        <div className="flex gap-3">
          <Login />
          <Signup />
        </div>
      </div>
    )
  }
  
export default Header
  