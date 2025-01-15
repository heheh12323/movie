import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import BannerItem from "../BannerItem";

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


const dataBanner = [
  {
    name: "Movie One",
    img: "https://images.unsplash.com/photo-1691389694412-266f872999c6?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An exciting adventure movie.",
    year: "2020",
    duration: "120 min",
    star: "8.5",
  },
  {
    name: "Movie Two",
    img: "https://images.unsplash.com/photo-1642979904635-33d2e73b1d01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A heartwarming drama film.",
    year: "2021",
    duration: "135 min",
    star: "7.9",
  },
  {
    name: "Movie Three",
    img: "https://images.unsplash.com/photo-1572188863110-46d457c9234d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A thrilling action-packed film.",
    year: "2019",
    duration: "110 min",
    star: "8.0",
  },
];

function Banner() {
  return (
    <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
    >
      {dataBanner.map((data, index) => (
        <SwiperSlide key={index}>
          <BannerItem
            name={data.name}
            img={data.img}
            description={data.description}
            year={data.year}
            duration={data.duration}
            star={data.star}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Banner;
