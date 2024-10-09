"use client";

import { testimonials } from "@/libs/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Button from "./Button";
import { useSmallScreen } from "@/hooks/useSmallScreen";
import TestimonialsCard from "./TestimonialsCard";
import Ticker from "framer-motion-ticker";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isSmallScreen = useSmallScreen(792);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <article className="sm:max-w-screen mt-[68px] flex flex-col items-center pb-10 sm:mt-[154px] sm:overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-ml-dark-blue sm:justify-center">
        What they&rsquo;ve said
      </h2>
      {isSmallScreen ? (
        <Carousel
          setApi={setApi}
          className="mx-auto mt-[63px] w-full max-w-[21rem]"
        >
          <CarouselContent>
            {testimonials.map((testimony) => (
              <CarouselItem key={testimony.name} className="pt-[40px]">
                <TestimonialsCard key={testimony.name} {...testimony} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      ) : (
        <div className="z-20">
          <Ticker
            duration={40}
            isPlaying={isPlaying}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {testimonials.map((testimony) => (
              <div className="pt-[7rem]" key={testimony.name}>
                <TestimonialsCard key={testimony.name} {...testimony} />
              </div>
            ))}
          </Ticker>
        </div>
      )}
      <div
        className="mt-8 flex justify-center space-x-1 sm:hidden"
        aria-label="Slide indicators"
      >
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full border border-ml-bright-red transition-colors ${
              index === current ? "bg-ml-bright-red" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
      <Button className="mt-12 sm:mt-7" />
    </article>
  );
}
