import bannerImg from "assets/banner.png";
import playSvg from "assets/play.svg";
import timeSvg from "assets/time.svg";
import yearSvg from "assets/year.svg";
import durationSvg from "assets/duration.svg";
import starSvg from "assets/star.svg";
import TagCategory from "components/TagCategory";
import TagMini from "components/TagMini";

interface IBannerItemProps {
  name: string;
  img: string;
  description: string;
  year?: string;
  duration?: string;
  star?: string;
}

function BannerItem({
  name,
  img,
  description,
  year,
  duration,
  star,
}: IBannerItemProps) {
  return (
    <div className="relative snap-center">
        <img
          className="w-screen h-[744px] object-cover"
          src={img}
          alt="Banner"
        />

        <div className="flex items-center justify-center gap-11 absolute top-1/2 left-1/2 translate-x-[-50%]">
          <div className="flex items-center justify-center rounded-md p-5 bg-[#FF0000] gap-2 cursor-pointer">
            <a>Watch Now</a>
            <img src={playSvg} />
          </div>
          <div className="flex items-center justify-center rounded-md p-5 gap-2 border border-[#FF0000] cursor-pointer">
            <a>Watch Later</a>
            <img src={timeSvg} />
          </div>
        </div>

        <div className="max-w-[1170px] my-6 mx-auto">
          <div className="absolute top-[70%]">
            <h2 className="font-bold text-2xl mb-2">{name}</h2>

            <div className="flex gap-2 items-center mb-6">
              <TagCategory name="Action" />
              <TagCategory name="Adventure" />
              <TagCategory name="Science Fiction" />
              <div className="flex gap-2">
                {year && <TagMini svg={yearSvg} label={year} />}
                {duration && <TagMini svg={durationSvg} label={duration} />}
                {star && <TagMini svg={starSvg} label={star} />}
              </div>
            </div>

            <p className="font-medium text-base mb-8">{description}</p>
          </div>
        </div>
      </div>
  );
}

export default BannerItem;
