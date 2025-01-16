interface IRecentlyItemProps {
  img: string;
  name: string;
  type: string;
  session?: string;
  episode?: string;
  time?: string;
}

function RecentlyItem({ ...item }: IRecentlyItemProps) {
const { img, name, type, session, episode, time } = item;

  return (
    <div className="flex gap-10">
      <div className="flex justify-between">
        <img className="w-16 h-[103px] mr-6 object-cover rounded-md" src={img} />
        <div className="text-base flex flex-col justify-between max-w-[118px]">
          <span className="font-medium">{name}</span>
          <p className="font-normal truncate">
            {type && `${type}`}
            {session && `/${session}`}
            {episode && `/${episode}`}
          </p>
          <span className="font-normal">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default RecentlyItem;
