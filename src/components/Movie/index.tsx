import TagQuality from "components/TagQuality";

interface IMovie {
  name: string;
  quality: string;
  time?: string;
  image: string;
  episode?: string;
}
interface IMovieProps {
  type: string;
  movies: IMovie[];
}

function Movie({ type, movies }: Readonly<IMovieProps>) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div>{type}</div>
        <div className="flex items-center">
          <div>View all</div>
          <img
            className="w-[22px] h-[20px] ml-2"
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-arrow-right-thin.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <div
            key={`${movie.name}-${index}`}
            className="h-[392px] flex flex-col justify-between"
          >
            <img alt="" className="h-[344px] rounded-lg" src={movie.image} />
            <div className="h-[32px] grid grid-cols-[55%_45%]">
              <div className="flex items-center overflow-hidden">
                {movie.name}
              </div>
              <div className="flex items-center justify-between">
                <TagQuality quality={movie.quality} />
                <div className="border-2 border-red-500 rounded px-1">
                  {movie.time ? (
                    <div className="flex items-center ">
                      <img
                        className="h-[13px] w-[13px] mr-1"
                        src="https://www.svgrepo.com/show/187026/clock.svg"
                        alt=""
                      />
                      {movie.time}
                    </div>
                  ) : (
                    <div>{movie.episode}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movie;
