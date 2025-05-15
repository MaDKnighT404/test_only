import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Chevron from "../../../../shared/components/Chevron";
import { useAnimationFadeSlider } from "./hooks/useAnimationFadeSlider";
import type { Event } from "../../types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EventSlider.scss";

const EventSlider = ({
  events,
  mobileTitleRef,
}: {
  events: Event[];
  mobileTitleRef?: React.RefObject<HTMLDivElement>;
}) => {
  const { displayedEvents, sliderRef } = useAnimationFadeSlider({ events, mobileTitleRef });

  return (
    <div className="event-slider">
      <div className="event-slider-content" ref={sliderRef}>
        <div className="event-slider-button__wrapper event-slider-button__wrapper--left">
          <button className="event-slider__button event-slider__button--prev">
            <Chevron direction="left" />
          </button>
        </div>
        <div className="event-slider-button__wrapper event-slider-button__wrapper--right">
          <button className="event-slider__button event-slider__button--next">
            <Chevron direction="right" />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".event-slider__button--next",
            prevEl: ".event-slider__button--prev",
          }}
          pagination={{
            el: ".event-slider__pagination",
            clickable: true,
            bulletClass: "event-slider__bullet",
            bulletActiveClass: "event-slider__bullet--active",
          }}
          watchOverflow={true}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            568: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {displayedEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="event-slider__item">
                <div className="event-slider__year">{event.year}</div>
                <div className="event-slider__description">{event.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="event-slider__pagination"></div>
    </div>
  );
};

export default EventSlider;
