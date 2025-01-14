import Header from "./Header"
import Recently from "./Recently";
import Trending from "./Trending";
import Movie from "./Movie";
import Banner from "./Banner";

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
    <>
      <Header/>
      <Banner/>
      <div className="max-w-[1170px] my-6 mx-auto">
        <Recently />
        <Trending />
        <Movie type={type} movies={movies}/>
      </div>
    </>
  );
}

export default App
