import Header from "./Header"
import Banner from "./Banner"
import Recently from "./Recently";
import Trending from "./Trending";
import Movie from "./Movie";


function App() {
  const movies = [
    {
      name: "Ghosted",
      quality: "HD",
      time: "3:12:00",
      episode: "season 1",
      image: "https://replicate.delivery/pbxt/JF3foGR90vm9BXSEXNaYkaeVKHYbJPinmpbMFvRtlDpH4MMk/out-0-1.png"
    },
  ];
  const type = "New Release - Movies";
  return (
    <div className="max-w-[1170px] my-6 mx-auto">
      <Header />
      <Banner />
      <Recently />
      <Trending />
      <Movie type={type} movies={movies}/>
    </div>
  );
}

export default App
