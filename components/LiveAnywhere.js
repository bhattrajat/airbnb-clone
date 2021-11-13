import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const LiveAnywhere = () => {
  return (
    <section className="px-4 py-8 lg:px-12">
      <h2 className="text-2xl text-semibold">Live Anywhere</h2>
      <Swiper
        className="mt-8"
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
          <Image
            className="rounded-lg"
            src="/outdoor-getaways.webp"
            width="290"
            height="290"
          />
          <h3 className="text-lg font-semibold">Outdoor Getaways</h3>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/outdoor-getaways.webp" width="290" height="290" />
          <h3 className="text-lg font-semibold">Outdoor Getaways</h3>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/outdoor-getaways.webp" width="290" height="290" />
          <h3 className="text-lg font-semibold">Outdoor Getaways</h3>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/outdoor-getaways.webp" width="290" height="290" />
          <h3 className="text-lg font-semibold">Outdoor Getaways</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LiveAnywhere;
