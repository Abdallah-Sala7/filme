import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import LoadingCard from "./loading_components/LoadingCard";
import MovieCard from "./MovieCard";
register();

const MySwiper = ({ isLoading, data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      slidesPerView: 2.5,
      spaceBetween: 10,
      freeMode: true,
      breakpoints: {
        576: {
          slidesPerView: 3.2,
        },
        768: {
          slidesPerView: 4.25,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5.25,
        },
        1200: {
          slidesPerView: 6.25,
        },
      },
      injectStyles: [
        `
        
          .swiper-wrapper {
            padding:1rem 0;
          }

          .blue-slide {
            height: auto;
          }
          
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
      {!isLoading ? (
        <>
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>{" "}
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>{" "}
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>{" "}
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>{" "}
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>{" "}
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>{" "}
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>{" "}
          <swiper-slide class="blue-slide">
            <LoadingCard />
          </swiper-slide>
        </>
      ) : (
        data?.map((item, idx) => (
          <swiper-slide key={idx} class="blue-slide">
            <MovieCard movie={item} />
          </swiper-slide>
        ))
      )}
    </swiper-container>
  );
};

export default MySwiper;
