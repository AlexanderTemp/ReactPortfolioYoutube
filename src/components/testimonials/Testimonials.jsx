import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque facilis blanditiis a consectetur quia hic error. Fuga, nostrum porro. Aperiam perspiciatis id libero beatae possimus, deleniti blanditiis harum illo.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque facilis blanditiis a consectetur quia hic error. Fuga, nostrum porro. Aperiam perspiciatis id libero beatae possimus, deleniti blanditiis harum illo.",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque facilis blanditiis a consectetur quia hic error. Fuga, nostrum porro. Aperiam perspiciatis id libero beatae possimus, deleniti blanditiis harum illo.",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, doloremque facilis blanditiis a consectetur quia hic error. Fuga, nostrum porro. Aperiam perspiciatis id libero beatae possimus, deleniti blanditiis harum illo.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Comentarios de Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
