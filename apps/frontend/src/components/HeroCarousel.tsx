"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const slides = [
  {
    id: 1,
    image: "/slider-1.png",
    headline: "A Journey to Unlock Potentials!",
  },
  {
    id: 2,
    image: "/slider-2.png",
    headline: "Empowering Individuals & Organizations",
  },
  {
    id: 3,
    image: "/slider-3.png",
    headline: "Excellence in Education, Training & Consulting",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={clsx(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {slide.headline}
            </h1>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#081a42] text-white px-4 py-2 rounded"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#081a42] text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </section>
  );
}
