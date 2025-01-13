import Header from "./Header"
import Banner from "./Banner"
import Recently from "./Recently";
import Trending from "./Trending";
import Movie from "./Movie";


function App() {
  return (
    <div className="max-w-[1170px] my-6 mx-auto">
      <Header />
      <Banner />
      <Recently />
      <Trending />
      <Movie />
    </div>
  );
}

export default App
