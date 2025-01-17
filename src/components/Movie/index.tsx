import TagMini from "components/TagMini";
import TagQuality from "components/TagQuality";
import durationSvg from "assets/duration.svg";
import rightArrowSvg from "assets/right-arrow.svg";

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
            src={rightArrowSvg}
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
            <img alt="" className="h-[344px] rounded-lg object-cover" src={movie.image} />
            <div className="h-[32px] grid grid-cols-[55%_45%]">
              <div className="flex items-center overflow-hidden">
                {movie.name}
              </div>
              <div className="flex items-center justify-between">
                <TagQuality quality={movie.quality} />
                <div className="border-[1px] border-red-500 rounded px-1">
                  {movie.time ? (
                    <TagMini svg={durationSvg} label={movie.time}/>
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
