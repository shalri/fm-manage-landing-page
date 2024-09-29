"use client";

import { testimonials } from "@/libs/data";
import Image from "next/image";
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

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <article className="mt-[68px] flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold text-ml-dark-blue">
        What they&rsquo;ve said
      </h2>
      <Carousel
        setApi={setApi}
        className="mx-auto mt-[63px] w-full max-w-[21rem]"
      >
        <CarouselContent>
          {testimonials.map((testimony) => (
            <CarouselItem key={testimony.name} className="pt-[40px]">
              <section
                key={testimony.name}
                className="relative flex flex-col items-center justify-center rounded-sm bg-ml-very-light-gray pb-8"
              >
                <div className="absolute -top-[40px] size-[72px]">
                  <Image
                    src={testimony.avatar}
                    fill
                    className="object-contain"
                    alt={testimony.name}
                  />
                </div>
                <div className="mt-[58px] text-center">
                  <h3 className="font-bold tracking-tighter text-ml-dark-blue">
                    {testimony.name}
                  </h3>
                  <p className="mt-5 max-w-[300px] text-sm leading-[1.85] text-ml-dark-grayish-blue">
                    {testimony.copy}
                  </p>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div
        className="mt-8 flex justify-center space-x-1"
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
      <Button className="mt-12" />
    </article>
  );
}
