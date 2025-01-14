import Header from "./Header"
import Recently from "./Recently";
import Trending from "./Trending";
import Movie from "./Movie";
import Banner from "./Banner";

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <div className="max-w-[1170px] my-6 mx-auto">
        <Recently />
        <Trending />
        <Movie />
      </div>
    </>
  );
}

export default App
