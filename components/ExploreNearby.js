import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

const ExporeNearby = () => {
  return (
    <section className="px-4 py-8 lg:px-12">
      <h2 className="text-2xl font-semibold">Explore nearby</h2>
      <Swiper
        // slidesPerView={"auto"}
        className="mt-8"
        spaceBetween={10}
        // slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 1000,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex">
            <Image
              src="/mumbai.webp"
              className="rounded-md"
              height="64"
              width="64"
              layout="fixed"
            />
            <div className="flex flex-col justify-center ml-4">
              <h3 className="font-semibold">Ahmedabad</h3>
              <h4>15 minutes drive</h4>
            </div>
          </div>
          <div className="flex mt-4">
            <Image
              src="/navi-mumbai.jpg"
              className="rounded-md"
              height="64"
              width="64"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-semibold">Ahmedabad</h3>
              <h4>15 minutes drive</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-[70vh]">
            <Image
              src="/mumbai.webp"
              className="rounded-md"
              height="64"
              width="64"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-semibold">Mumbai</h3>
              <h4>10 hours drive</h4>
            </div>
          </div>
          <div className="flex mt-4">
            <Image
              src="/navi-mumbai.jpg"
              className="rounded-md"
              height="64"
              width="64"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-semibold">Navi Mumbai</h3>
              <h4>11 hours drive</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <Image
              src="/mumbai.webp"
              className="rounded-md"
              height="64"
              width="64"
              objectFit="cover"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-semibold">Delhi</h3>
              <h4>15 minutes drive</h4>
            </div>
          </div>
          <div className="flex mt-4">
            <Image
              src="/navi-mumbai.jpg"
              height="64"
              className="rounded-md"
              width="64"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-semibold">London</h3>
              <h4>15 minutes drive</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex">
            <Image
              src="/mumbai.webp"
              className="rounded-md"
              height="64"
              width="64"
              objectFit="cover"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-semibold">New York</h3>
              <h4>15 minutes drive</h4>
            </div>
          </div>
          <div className="flex mt-4">
            <Image
              src="/navi-mumbai.jpg"
              height="64"
              className="rounded-md"
              width="64"
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-semibold">Alberta</h3>
              <h4>15 minutes drive</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ExporeNearby;
