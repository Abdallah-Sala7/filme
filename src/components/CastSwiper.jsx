import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import CastCard from "./CastCard";

register();

const CastSwiper = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      slidesPerView: 4.5,
      spaceBetween: 1,
      freeMode: true,
      breakpoints: {
        576: {
          slidesPerView: 5.2,
        },
        768: {
          slidesPerView: 7.25,
        },
        992: {
          slidesPerView: 9.5,
        },
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            width: 40px;
            height: 100%;
            top: 0;
            margin: 0;
            bottom: 0;
            color: #fff;
          }
          .swiper-button-next {
            right: 0;
            background: linear-gradient(to right,transparent,#000000f0);
          }
          .swiper-button-prev {
            left: 0;
            background: linear-gradient(to left,transparent,#000000f0);
          }
          .swiper-button-next.swiper-button-disabled, 
          .swiper-button-prev.swiper-button-disabled{
            opacity: 0;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.25rem;
            font-weight: 700;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: false,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false">
      {data.map((item, idx) => (
        <swiper-slide key={idx} class="blue-slide">
          <CastCard cast={item} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default CastSwiper;
