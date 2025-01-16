import RecentlyItem from "components/RecentlyItem";
import arrowRightSvg from "assets/arrow_right.svg"
import Caption from "components/Caption";

const data = [
  {
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Breaking Bad",
    type: "TV Show",
    session: "Season 5",
    episode: "Episode 14",
    time: "45 min",
  },
  {
    img: "https://images.unsplash.com/photo-1617219883316-881339deee58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Inception",
    type: "Movie",
    time: "2h 28m",
  },
  {
    img: "https://images.unsplash.com/photo-1613679074971-91fc27180061?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Office",
    type: "TV Show",
    session: "Season 3",
    episode: "Episode 2",
    time: "22 min",
  },
  {
    img: "https://images.unsplash.com/photo-1525463072426-4d65f1df37b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Interstellar",
    type: "Movie",
    time: "2h 49m",
  },
];

function Recently() {
  return (
    <div>
      <Caption name="Recently Updated"/>
      <div className="flex gap-10 items-center mt-6">
        {data.map((item, index) => (
          <RecentlyItem
            key={index}
            img={item.img}
            name={item.name}
            type={item.type}
            session={item.session}
            episode={item.episode}
            time={item.time}
          />
        ))}
         <img src={arrowRightSvg} className="p-7 bg-[#D9D9D9] rounded-full ml-auto"/>
      </div>
     
    </div>
  );
}

export default Recently;
